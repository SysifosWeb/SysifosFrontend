const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const { chromium } = require('playwright');

async function checkPages() {
    const origin = 'http://127.0.0.1:43128';
    const server = spawn(process.execPath, ['.output/server/index.mjs'], {
        env: { ...process.env, PORT: '43128', HOST: '127.0.0.1', NITRO_HOST: '127.0.0.1' },
        stdio: ['ignore', 'inherit', 'inherit'],
    });
    const exited = once(server, 'exit');
    let browser;
    try {
        for (let attempt = 0; attempt < 40; attempt++) {
            try {
                if ((await fetch(`${origin}/admin/login`)).ok) break;
            } catch { /* Server is starting. */ }
            if (server.exitCode !== null) throw new Error('Compiled server exited before starting.');
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        browser = await chromium.launch({ headless: true });
        for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
            const page = await browser.newPage({ viewport });
            const errors = [];
            page.on('pageerror', error => errors.push(error.message));
            // These checks never send a contact or analytics request.
            await page.route('**/*', route => {
                const request = route.request();
                if (!request.url().startsWith(origin) || request.method() !== 'GET') return route.abort();
                return route.continue();
            });
            const hydrated = () => page.waitForFunction(() =>
                document.querySelector('#__nuxt')?.__vue_app__?.config.globalProperties.$nuxt?.isHydrating === false);
            const aboutVisible = async () => {
                await page.getByRole('heading', { level: 1, name: 'Tecnología con propósito. Un equipo cercano.' }).waitFor({ state: 'visible' });
                assert.match(await page.locator('main').innerText(), /Karen Godoy/);
                assert.match(await page.locator('main').innerText(), /Osman Ahumada/);
            };
            for (const route of ['/nosotros', '/contacto', '/servicios', '/portfolio']) {
                await page.goto(origin + route);
                await hydrated();
                await page.locator('h1').waitFor({ state: 'visible' });
                assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${route}: horizontal overflow`);
                if (route === '/nosotros') await aboutVisible();
                if (route === '/contacto') {
                    assert.equal(await page.getByLabel('Nombre *', { exact: true }).getAttribute('required'), '');
                    assert.equal(await page.locator('.whatsapp-float').count(), 0, 'Floating WhatsApp must not cover the form');
                    await page.getByRole('link', { name: /WhatsApp Abrir chat/ }).waitFor({ state: 'visible' });
                    // Exercise the route change that previously also blanked Nosotros.
                    await page.locator('footer a[href="/nosotros"]').click();
                    await aboutVisible();
                }
            }
            assert.deepEqual(errors, [], `Browser errors at ${viewport.width}px`);
            console.log(`Public pages remain visible after hydration and navigation at ${viewport.width}px.`);
            await page.close();
        }
    } finally {
        await browser?.close();
        server.kill('SIGTERM');
        await exited;
    }
}

checkPages().catch(error => { console.error(error); process.exitCode = 1; });
