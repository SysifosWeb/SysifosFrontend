// Isolated UI checks: synthetic cookies and a local fake API never reach production.
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const fs = require('node:fs');
const { chromium } = require('playwright');

const origin = 'http://127.0.0.1:43129';
const titles = ['Revisar facturación del proyecto', 'Validar accesos del equipo', 'Preparar entrega del sprint', 'Documentar el flujo de soporte', 'Revisar evidencias de la integración'];
const tasks = Array.from({ length: 15 }, (_, i) => ({ id: i + 1, issue_key: `SYS-${i + 1}`, title: titles[i % titles.length] + (i >= 5 ? ` · ${i + 1}` : ''), kanban_project_id: i % 2 + 1, project: { name: i % 2 ? 'Operaciones' : 'Plataforma web' }, status: i % 3 ? 'todo' : 'in_progress', priority: 'medium', due_date: i < 2 ? '2026-01-01' : null, updated_at: '2026-11-01', type: 'task', labels: [], assignees: [] }));
let mode = 'data';
const populated = { assigned: tasks, overdue: tasks.slice(0, 2), upcoming: [], recently_modified: tasks.slice(0, 4), created_by_me: tasks.slice(0, 7) };
const backend = createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname;
    res.setHeader('Content-Type', 'application/json');
    if (path.endsWith('/kanban/my-work')) {
        if (mode === 'failure') { res.statusCode = 503; return res.end('{"message":"Fixture failure"}'); }
        return res.end(JSON.stringify({ data: mode === 'empty' ? Object.fromEntries(Object.keys(populated).map(key => [key, []])) : populated }));
    }
    if (path.endsWith('/auth/me')) return res.end('{"id":1,"name":"Equipo de prueba","email":"qa@example.test"}');
    if (path.endsWith('/kanban/notifications')) return res.end('{"data":[],"meta":{"unread_count":0,"last_page":1}}');
    res.end('{"data":[],"meta":{"total":0,"last_page":1,"links":[]},"total":0}');
});

async function run() {
    backend.listen(43130, '127.0.0.1');
    await once(backend, 'listening');
    const server = spawn(process.execPath, ['.output/server/index.mjs'], { env: { ...process.env, PORT: '43129', HOST: '127.0.0.1', NITRO_HOST: '127.0.0.1', NUXT_API_BASE: 'http://127.0.0.1:43130/api/' }, stdio: ['ignore', 'inherit', 'inherit'] });
    const exited = once(server, 'exit');
    let browser;
    try {
        for (let i = 0; i < 40; i++) {
            try { if ((await fetch(origin + '/admin/login')).ok) break; } catch { /* Starting. */ }
            if (server.exitCode !== null) throw new Error('Server did not start');
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        browser = await chromium.launch();
        fs.mkdirSync('.artifacts/admin', { recursive: true });
        for (const theme of ['light', 'dark']) {
            for (const width of [1440, 390]) {
                mode = 'data';
                const context = await browser.newContext({ viewport: { width, height: 1000 } });
                await context.addCookies([{ name: 'auth_token', value: 'isolated-test-token', url: origin }]);
                await context.addInitScript(theme => localStorage.setItem('theme', theme), theme);
                const page = await context.newPage();
                const errors = [];
                page.on('pageerror', error => errors.push(error.message));
                await page.route('**/*', route => !route.request().url().startsWith(origin) ? route.abort() : route.continue());
                await page.goto(origin + '/admin/kanban/my-work');
                await page.getByRole('navigation', { name: 'Filtrar mi trabajo' }).waitFor();
                await page.waitForFunction(theme => document.documentElement.classList.contains('dark') === (theme === 'dark'), theme);
                assert.equal(await page.getByRole('button', { name: /^Vencidas/ }).getAttribute('aria-pressed'), 'true');
                await page.getByRole('button', { name: /^Asignadas a mí/ }).click();
                const rows = page.locator('.work-row');
                await page.waitForFunction(() => document.querySelectorAll('.work-row').length === 10);
                assert.equal(await rows.count(), 10);
                await page.screenshot({ path: `.artifacts/admin/my-work-${theme}-${width}.png`, fullPage: true });
                await page.getByRole('button', { name: 'Página siguiente', exact: true }).click();
                await page.waitForFunction(() => document.querySelectorAll('.work-row').length === 5);
                await page.getByRole('searchbox', { name: 'Buscar en esta vista' }).fill('facturacion');
                await page.waitForFunction(() => document.querySelectorAll('.work-row').length === 3);
                await page.waitForURL(/q=facturacion/);
                await page.reload();
                await page.waitForFunction(() => document.querySelectorAll('.work-row').length === 3);
                await page.getByRole('searchbox', { name: 'Buscar en esta vista' }).fill('');
                await page.getByRole('button', { name: /^Próximos 7 días/ }).click();
                await page.getByText('No tienes entregas previstas para los próximos 7 días.', { exact: true }).waitFor();
                assert.equal(await page.locator('.work-inbox section').count(), 1);
                await page.getByRole('button', { name: /^Asignadas a mí/ }).click();
                await page.waitForFunction(() => document.querySelectorAll('.work-row').length === 10);
                mode = 'failure';
                await page.getByRole('button', { name: 'Actualizar', exact: true }).click();
                await page.getByRole('alert').waitFor();
                assert.equal(await rows.count(), 10, 'Failed refresh preserves the prior work');
                mode = 'empty';
                await page.getByRole('button', { name: 'Actualizar', exact: true }).click();
                await page.getByText('No tienes tareas asignadas pendientes.', { exact: true }).waitFor();
                await page.screenshot({ path: `.artifacts/admin/my-work-empty-${theme}-${width}.png`, fullPage: true });
                mode = 'data';
                assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
                for (const route of ['/admin/posts', '/admin/categories', '/admin/contacts', '/admin/kanban']) {
                    await page.goto(origin + route);
                    await page.locator('main').waitFor({ state: 'visible' });
                    await page.waitForFunction(theme => document.documentElement.classList.contains('dark') === (theme === 'dark'), theme);
                    assert.equal(await page.locator('main').evaluate(el => getComputedStyle(el).backgroundColor), theme === 'dark' ? 'rgb(22, 54, 83)' : 'rgb(255, 255, 255)', `${route} shares the brand surface`);
                    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${route}: overflow`);
                    await page.screenshot({ path: `.artifacts/admin/${route.split('/').pop()}-${theme}-${width}.png`, fullPage: true });
                }
                assert.deepEqual(errors, []);
                console.log(`Admin palette and My work filters, pagination, empty and error states pass: ${theme}, ${width}px.`);
                await context.close();
            }
        }
    } finally {
        await browser?.close();
        server.kill('SIGTERM');
        await exited;
        await new Promise(resolve => backend.close(resolve));
    }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
