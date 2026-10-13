const { execFileSync } = require('node:child_process');
const { readlinkSync, realpathSync } = require('node:fs');
const path = require('node:path');

function isApplicationWorker(worker, appRoot, excludedPids) {
    if (excludedPids.includes(worker.pid)) return false;
    if (worker.command !== 'node' && !worker.command.startsWith('lsnode')) return false;
    const inApplicationDirectory = worker.cwd === appRoot || worker.cwd.startsWith(`${appRoot}/`);
    const applicationInArguments = worker.args.includes(`${appRoot}/`)
        || worker.args.endsWith(appRoot);
    return inApplicationDirectory || applicationInArguments;
}

function restartWorkers() {
    const appRoot = realpathSync(path.resolve(__dirname, '..'));
    const processes = execFileSync('/bin/ps', [
        '-u', String(process.getuid()), '-o', 'pid=,comm=,args='
    ], { encoding: 'utf8' });
    let restarted = 0;
    for (const line of processes.split('\n')) {
        const match = line.match(/^\s*(\d+)\s+(\S+)\s+(.*)$/);
        if (!match) continue;
        const worker = { pid: Number(match[1]), command: match[2], args: match[3], cwd: '' };
        try { worker.cwd = readlinkSync(`/proc/${worker.pid}/cwd`); } catch { /* The process may already have exited. */ }
        if (!isApplicationWorker(worker, appRoot, [process.pid, process.ppid])) continue;
        try {
            process.kill(worker.pid, 'SIGTERM');
            console.log(`Stopped application worker ${worker.pid}; LiteSpeed will start the current build on the next request.`);
            restarted++;
        } catch (error) {
            if (error.code !== 'ESRCH') throw error;
        }
    }
    console.log(`Application workers renewed: ${restarted}`);
}

module.exports = { isApplicationWorker };
if (require.main === module) restartWorkers();
