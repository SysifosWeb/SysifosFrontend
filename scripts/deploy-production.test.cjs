const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { checkProductionBuild } = require('./check-production-build.cjs');

const revision = 'a'.repeat(40);

function fixture(t, { smokeFails = false, healthFails = false } = {}) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'frontend-deploy-'));
    t.after(() => fs.rmSync(root, { recursive: true, force: true }));
    const app = path.join(root, 'app');
    const candidate = path.join(root, 'candidate');
    function write(base, name, value) {
        const file = path.join(base, name);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, value);
    }
    write(app, '.output/marker', 'previous');
    write(candidate, 'REVISION', revision);
    write(candidate, 'pages/index.vue', '<template>SysifosWeb</template>');
    write(candidate, 'scripts/check-production-build.cjs', fs.readFileSync(path.join(__dirname, 'check-production-build.cjs')));
    write(candidate, 'scripts/smoke-production.cjs', `process.exit(${smokeFails ? 1 : 0});`);
    for (const file of ['index.mjs', 'chunks/build/server.mjs', 'chunks/build/client.precomputed.mjs']) {
        write(candidate, `.output/server/${file}`, 'export default {};');
    }
    write(candidate, '.output/server/package.json', '{"type":"module"}');
    write(candidate, '.output/public/_nuxt/app.js', 'export default {};');
    write(candidate, '.output/public/_nuxt/builds/latest.json', '{"id":"new-build"}');
    write(candidate, '.output/public/_nuxt/builds/meta/new-build.json', '{}');
    write(candidate, '.output/nitro.json', '{"preset":"node-server"}');
    checkProductionBuild(candidate, { stamp: true });
    const archive = path.join(root, 'release.tar.gz');
    assert.equal(spawnSync('tar', ['-czf', archive, '-C', candidate, '.']).status, 0);
    write(root, 'bin/curl', `#!/bin/bash\nif [[ "$*" == *latest.json* ]]; then echo '{"id":"${healthFails ? 'old-build' : 'new-build'}"}'; else echo SysifosWeb; fi\n`);
    fs.chmodSync(path.join(root, 'bin/curl'), 0o755);
    const script = fs.readFileSync(path.join(__dirname, 'deploy-production.sh'), 'utf8')
        .replace('APP_ROOT=/home/sysifosw/repositories/SysifosFrontend', `APP_ROOT=${app}`)
        .replace('NODE=/home/sysifosw/nodevenv/repositories/SysifosFrontend/22/bin/node', `NODE=${process.execPath}`)
        .replace(/restart\(\) \{[\s\S]*?\n\}/, 'restart() {\n    echo restarted >> "$APP_ROOT/restarts"\n}')
        .replace('sleep 3', 'sleep 0');
    const driver = path.join(root, 'deploy.sh');
    fs.writeFileSync(driver, script);
    return {
        app,
        run: (command = `deploy ${revision}`) => spawnSync('bash', [driver], {
            input: fs.readFileSync(archive), encoding: 'utf8',
            env: { ...process.env, SSH_ORIGINAL_COMMAND: command, PATH: `${path.join(root, 'bin')}:${process.env.PATH}` },
        }),
    };
}

test('the CI key rejects arbitrary SSH commands', t => {
    const { run } = fixture(t);
    assert.equal(run('whoami').status, 64);
});

test('a healthy release switches output and retains the prior version', t => {
    const { app, run } = fixture(t);
    const result = run();
    assert.equal(result.status, 0, result.stderr);
    assert.equal(fs.lstatSync(path.join(app, '.output')).isSymbolicLink(), true);
    assert.equal(fs.readFileSync(path.join(app, '.releases/current-revision'), 'utf8').trim(), revision);
    const previous = fs.readFileSync(path.join(app, '.releases/previous-output'), 'utf8').trim();
    assert.equal(fs.readFileSync(path.join(previous, 'marker'), 'utf8'), 'previous');
});

test('a failed candidate never replaces the production output', t => {
    const { app, run } = fixture(t, { smokeFails: true });
    assert.notEqual(run().status, 0);
    assert.equal(fs.lstatSync(path.join(app, '.output')).isDirectory(), true);
    assert.equal(fs.readFileSync(path.join(app, '.output/marker'), 'utf8'), 'previous');
});

test('a production build mismatch restores the previous output and restarts it', t => {
    const { app, run } = fixture(t, { healthFails: true });
    const result = run();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /restored/);
    assert.equal(fs.readFileSync(path.join(app, '.output/marker'), 'utf8'), 'previous');
    assert.equal(fs.readFileSync(path.join(app, 'restarts'), 'utf8').trim().split('\n').length, 2);
});
