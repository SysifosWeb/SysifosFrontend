const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = require('node:fs');
const path = require('node:path');
const { checkProductionBuild } = require('./check-production-build.cjs');

function fixture(t) {
    const root = mkdtempSync('/tmp/opencode/production-build-test-');
    t.after(() => rmSync(root, { recursive: true, force: true }));
    function write(relative, content) {
        const file = path.join(root, relative);
        mkdirSync(path.dirname(file), { recursive: true });
        writeFileSync(file, content);
    }
    write('pages/index.vue', '<template>Inicio</template>');
    write('nuxt.config.ts', 'export default {}');
    write('.output/server/index.mjs', 'export default {}');
    write('.output/server/package.json', '{"type":"module"}');
    write('.output/server/chunks/build/server.mjs', 'export default {}');
    write('.output/server/chunks/build/client.precomputed.mjs', 'export default {}');
    write('.output/public/_nuxt/app.js', 'export default {}');
    write('.output/public/_nuxt/builds/latest.json', '{"id":"release-1"}');
    write('.output/public/_nuxt/builds/meta/release-1.json', '{}');
    write('.output/nitro.json', '{"preset":"node-server"}');
    return { root, write };
}

test('accepts a complete build stamped against the current source files', t => {
    const { root } = fixture(t);
    assert.equal(checkProductionBuild(root, { stamp: true }), 'release-1');
    assert.equal(checkProductionBuild(root), 'release-1');
});

test('rejects an incomplete build before the application is restarted', t => {
    const { root } = fixture(t);
    rmSync(path.join(root, '.output/server/index.mjs'));
    assert.throws(() => checkProductionBuild(root, { stamp: true }), /incompleto.*index\.mjs/);
});

test('rejects a stale build when existing sources change or a new page is added', t => {
    const { root, write } = fixture(t);
    checkProductionBuild(root, { stamp: true });
    write('pages/index.vue', '<template>Nuevo diseño</template>');
    assert.throws(() => checkProductionBuild(root), /no corresponde al código actual/);
    checkProductionBuild(root, { stamp: true });
    write('pages/admin/mercado-publico/index.vue', '<template>Mercado Público</template>');
    assert.throws(() => checkProductionBuild(root), /no corresponde al código actual/);
});

test('rejects a development build and missing client chunks', t => {
    const { root, write } = fixture(t);
    write('.output/nitro.json', '{"preset":"nitro-dev"}');
    assert.throws(() => checkProductionBuild(root, { stamp: true }), /preset node-server/);
    write('.output/nitro.json', '{"preset":"node-server"}');
    rmSync(path.join(root, '.output/public/_nuxt/app.js'));
    assert.throws(() => checkProductionBuild(root, { stamp: true }), /JavaScript del cliente/);
});

test('requires a source fingerprint for the exact build manifest being deployed', t => {
    const { root, write } = fixture(t);
    assert.throws(() => checkProductionBuild(root), /Falta la firma/);
    checkProductionBuild(root, { stamp: true });
    write('.output/public/_nuxt/builds/latest.json', '{"id":"release-2"}');
    write('.output/public/_nuxt/builds/meta/release-2.json', '{}');
    assert.throws(() => checkProductionBuild(root), /no corresponde al código actual/);
});
