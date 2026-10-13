const { test } = require('node:test');
const assert = require('node:assert/strict');
const { isApplicationWorker } = require('./restart-production.cjs');
const root = '/home/account/repositories/SysifosFrontend';

test('recognizes this application when Node uses a relative startup file', () => {
    assert.equal(isApplicationWorker({ pid: 20, command: 'node', cwd: root, args: 'node .output/server/index.mjs' }, root, [10]), true);
    assert.equal(isApplicationWorker({ pid: 20, command: 'lsnode:/home/ac', cwd: '/home/account', args: `lsnode:${root}/` }, root, [10]), true);
});

test('does not stop other applications or similarly named repositories', () => {
    assert.equal(isApplicationWorker({ pid: 20, command: 'node', cwd: `${root}Other`, args: `node ${root}Other/app.cjs` }, root, [10]), false);
    assert.equal(isApplicationWorker({ pid: 20, command: 'node', cwd: '/home/account/repositories/Faremin', args: 'node app.cjs' }, root, [10]), false);
    assert.equal(isApplicationWorker({ pid: 20, command: 'sh', cwd: root, args: `sh -c node ${root}/app.cjs` }, root, [10]), false);
});

test('does not stop the restart helper or its parent', () => {
    assert.equal(isApplicationWorker({ pid: 10, command: 'node', cwd: root, args: 'node scripts/restart-production.cjs' }, root, [10, 11]), false);
    assert.equal(isApplicationWorker({ pid: 11, command: 'node', cwd: root, args: 'node parent.cjs' }, root, [10, 11]), false);
});
