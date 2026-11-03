const { spawn } = require('node:child_process');
const { once } = require('node:events');

async function smoke() {
    const port = '43127';
    const server = spawn(process.execPath, ['.output/server/index.mjs'], {
        env: { ...process.env, PORT: port, HOST: '127.0.0.1', NITRO_HOST: '127.0.0.1' },
        stdio: ['ignore', 'inherit', 'inherit'],
    });
    const exited = once(server, 'exit');
    try {
        let ready = false;
        for (let attempt = 0; attempt < 40; attempt++) {
            if (server.exitCode !== null) throw new Error('The compiled server exited before becoming ready.');
            try {
                const response = await fetch(`http://127.0.0.1:${port}/admin/login`, { signal: AbortSignal.timeout(2000) });
                if (response.status === 200 && (await response.text()).includes('SysifosWeb')) {
                    ready = true;
                    break;
                }
            } catch { /* The listener may still be starting. */ }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        if (!ready) throw new Error('The compiled login page did not become healthy.');
        const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(10000) });
        if (response.status !== 200 || !(await response.text()).includes('Sysifos')) {
            throw new Error('The compiled home page failed its smoke test.');
        }
        const image = await fetch(`http://127.0.0.1:${port}/_ipx/w_32,f_webp/img/brand/mark.svg`, { signal: AbortSignal.timeout(15000) });
        if (image.status !== 200 || !image.headers.get('content-type')?.includes('image/webp')) {
            throw new Error(`Native image optimization failed: HTTP ${image.status}.`);
        }
        console.log('Compiled home page, admin login and native image optimization are healthy.');
    } finally {
        server.kill('SIGTERM');
        await exited;
    }
}

smoke().catch(error => { console.error(error); process.exitCode = 1; });
