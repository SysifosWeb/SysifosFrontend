const { createHash } = require('node:crypto');
const { existsSync, readFileSync, readdirSync, statSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const sourceInputs = [
    'app.vue', 'error.vue', 'nuxt.config.ts', 'tailwind.config.js', 'tsconfig.json',
    'package.json', 'package-lock.json', '.cpanel.yml', 'app.cjs',
    'assets', 'components', 'composables', 'content', 'layouts', 'middleware',
    'pages', 'plugins', 'public', 'server', 'types', 'utils',
    'scripts/check-production-build.cjs',
];

function sourceHash(root) {
    const hash = createHash('sha256');
    function add(relative) {
        const file = path.join(root, relative);
        if (!existsSync(file)) return;
        if (statSync(file).isDirectory()) {
            for (const name of readdirSync(file).sort()) {
                if (name === '.DS_Store' || name === 'error_log' || name.endsWith('.log')) continue;
                add(`${relative}/${name}`);
            }
        } else {
            const contents = readFileSync(file);
            hash.update(`${relative}\0${contents.length}\0`);
            hash.update(contents);
        }
    }
    for (const input of sourceInputs) add(input);
    return hash.digest('hex');
}

function checkProductionBuild(root, { stamp = false } = {}) {
    const required = [
        '.output/server/index.mjs',
        '.output/server/package.json',
        '.output/server/chunks/build/server.mjs',
        '.output/server/chunks/build/client.precomputed.mjs',
        '.output/public/_nuxt/builds/latest.json',
        '.output/nitro.json',
    ];
    for (const relative of required) {
        const file = path.join(root, relative);
        if (!existsSync(file) || !statSync(file).isFile() || statSync(file).size === 0) {
            throw new Error(`Build de producción incompleto: falta ${relative}. Ejecuta npm run build y publica .output completo.`);
        }
    }
    const readJson = relative => JSON.parse(readFileSync(path.join(root, relative), 'utf8'));
    const nitro = readJson('.output/nitro.json');
    if (nitro.preset !== 'node-server') throw new Error('El build debe usar el preset node-server de producción.');
    const manifest = readJson('.output/public/_nuxt/builds/latest.json');
    if (typeof manifest.id !== 'string' || !/^[a-zA-Z0-9-]+$/.test(manifest.id) || manifest.id === 'dev'
        || !existsSync(path.join(root, '.output/public/_nuxt/builds/meta', `${manifest.id}.json`))) {
        throw new Error('El manifiesto del build de producción no está completo.');
    }
    const clientFiles = readdirSync(path.join(root, '.output/public/_nuxt'));
    if (!clientFiles.some(file => file.endsWith('.js'))) throw new Error('El build no contiene los archivos JavaScript del cliente.');
    const fingerprintFile = '.output/build-source.json';
    const fingerprint = { version: 1, buildId: manifest.id, sourceHash: sourceHash(root) };
    if (stamp) {
        writeFileSync(path.join(root, fingerprintFile), `${JSON.stringify({ ...fingerprint, builtAt: new Date().toISOString() }, null, 2)}\n`);
    } else {
        if (!existsSync(path.join(root, fingerprintFile))) throw new Error('Falta la firma de fuentes del build. Ejecuta npm run build.');
        const stored = readJson(fingerprintFile);
        if (stored.version !== fingerprint.version || stored.buildId !== fingerprint.buildId || stored.sourceHash !== fingerprint.sourceHash) {
            throw new Error('El build no corresponde al código actual. Ejecuta npm run build y publica la nueva carpeta .output.');
        }
    }
    return manifest.id;
}

module.exports = { checkProductionBuild };
if (require.main === module) {
    try {
        const buildId = checkProductionBuild(path.resolve(__dirname, '..'), { stamp: process.argv.includes('--stamp') });
        console.log(`Build de producción verificado: ${buildId}`);
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}
