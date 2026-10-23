// NODE_PATH puede apuntar al runtime de herramientas; no añade dependencias al producto.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const origin = process.env.CONSENT_TEST_URL || 'http://127.0.0.1:3217';
const KEY = 'sysifos_cookie_consent';
let browser;
before(async () => { browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || '/opt/google/chrome/chrome', headless: true, args: ['--no-sandbox'] }); });
after(async () => { await browser?.close(); });
async function setup(t, stored, viewport) {
  const context = await browser.newContext({ viewport: viewport || { width: 1280, height: 800 } });
  t.after(() => context.close());
  const metrics = [], google = [], errors = [];
  await context.route('**/*', async route => {
    const request = route.request(), url = request.url();
    if (url.includes('googletagmanager.com') || url.includes('google-analytics.com')) {
      google.push(url); return route.fulfill({ contentType: 'application/javascript', body: '/* Google aislado durante pruebas */' });
    }
    if (url.startsWith(origin + '/api/consent-events')) {
      metrics.push(request.postDataJSON()); return route.fulfill({ status: 201, contentType: 'application/json', body: '{"type":"success"}' });
    }
    if (!url.startsWith(origin)) return route.abort();
    return route.continue();
  });
  if (stored !== undefined) await context.addInitScript(({ KEY, stored }) => localStorage.setItem(KEY, JSON.stringify(stored)), { KEY, stored });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(origin + '/servicios');
  await page.waitForFunction(() => !!window.SysifosConsent);
  return { page, context, metrics, google, errors };
}
const record = analytics => ({ version: '2.0', timestamp: new Date().toISOString(), preferences: { necessary: true, analytics, advertising: false } });
const state = page => page.evaluate(() => window.SysifosConsent.getState());
const commands = page => page.evaluate(() => window.dataLayer.map(item => Array.from(item)));
const countViews = async page => (await commands(page)).filter(item => item[0] === 'event' && item[1] === 'page_view').length;
const accept = page => page.locator('[data-consent="accepted"]').click();
const reject = page => page.locator('[data-consent="rejected"]').click();

test('1. usuario nuevo: default denegado, banner, cero Google y cookies GA', async t => {
 const { page, google, errors } = await setup(t);
 assert.equal(await page.locator('#home-cookie-banner').isVisible(), true);
 assert.deepEqual((await commands(page))[0], ['consent','default',{ analytics_storage:'denied', ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied' }]);
 assert.equal(google.length,0); assert.deepEqual((await page.context().cookies()).filter(c=>c.name.startsWith('_ga')),[]); assert.deepEqual(errors,[]);
});
test('2. aceptar: persiste, evento, una etiqueta y un page_view incluso al repetir', async t => {
 const { page, google } = await setup(t); await accept(page);
 await page.waitForFunction(() => window.SysifosConsent.getState().analytics);
 await page.evaluate(() => window.SysifosConsent.choose(true,'accept'));
 assert.equal(await countViews(page),1); assert.equal(google.length,1);
 assert.equal(await page.locator('#home-cookie-banner').isVisible(),false);
 const list=await commands(page); assert(list.some(c=>c[1]==='consent_accept'));
 const update=list.filter(c=>c[0]==='consent').at(-1)[2]; assert.equal(update.analytics_storage,'granted'); assert.equal(update.ad_storage,'denied'); assert.equal(update.ad_user_data,'denied'); assert.equal(update.ad_personalization,'denied');
 assert.equal(await page.evaluate(KEY=>JSON.parse(localStorage.getItem(KEY)).preferences.analytics,KEY),true);
});
test('3. rechazar: métrica propia, sin Google ni cola de eventos GA', async t => {
 const { page, google, metrics } = await setup(t); await reject(page); await page.waitForTimeout(100);
 assert.equal((await state(page)).analytics,false); assert.equal(google.length,0);
 assert(metrics.some(e=>e.event==='consent_reject')); assert.equal((await commands(page)).filter(c=>c[0]==='event').length,0);
});
for (const analytics of [true,false]) test(`4/5/9. restaurar y recargar: ${analytics}`, async t => {
 const { page, google } = await setup(t,record(analytics));
 assert.equal((await state(page)).analytics,analytics); assert.equal(await page.locator('#home-cookie-banner').isVisible(),false);
 assert.equal(google.length,analytics?1:0); await page.reload(); await page.waitForFunction(()=>!!window.SysifosConsent);
 assert.equal((await state(page)).analytics,analytics); assert.equal(await page.locator('#home-cookie-banner').isVisible(),false);
 assert.equal(await countViews(page),analytics?1:0);
});
test('6/7. aceptar, retirar, limpiar cookies y volver a aceptar sin duplicar', async t => {
 const { page, google, metrics } = await setup(t); await accept(page);
 await page.context().addCookies([{name:'_ga',value:'test',url:origin},{name:'necessary',value:'keep',url:origin}]);
 await page.locator('a[href="#cookies"]').click(); await page.locator('[data-consent-analytics]').uncheck(); await page.locator('[data-consent-save]').click();
 assert.equal((await state(page)).analytics,false);
 let cookies=await page.context().cookies(); assert(!cookies.some(c=>c.name==='_ga')); assert(cookies.some(c=>c.name==='necessary'));
 await page.locator('a[href="#cookies"]').click(); await page.locator('[data-consent-analytics]').check(); await page.locator('[data-consent-save]').click();
 assert.equal((await state(page)).analytics,true); assert.equal(google.length,1); assert.equal(await countViews(page),1);
 await page.waitForTimeout(100); assert.equal(metrics.filter(e=>e.event==='consent_change').length,2);
});
test('8. navegación SPA: un page_view por ruta y banner oculto', async t => {
 const { page, google } = await setup(t); await accept(page);
 await page.locator('a[href="/portfolio"]').first().click(); await page.waitForURL('**/portfolio');
 await page.waitForFunction(()=>window.dataLayer.filter(c=>c[1]==='page_view').length===2);
 assert.equal(await page.locator('#home-cookie-banner').isVisible(),false); assert.equal(google.length,1);
 await page.goBack(); await page.waitForURL('**/servicios'); await page.waitForFunction(()=>window.dataLayer.filter(c=>c[1]==='page_view').length===3);
});
test('10. móvil: banner y modal completos, controles táctiles y sin overflow', async t => {
 const { page } = await setup(t,undefined,{width:360,height:640});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 for(const button of await page.locator('#home-cookie-banner button').all()) { const b=await button.boundingBox(); assert(b.height>=44);assert(b.x>=0&&b.x+b.width<=360);assert(b.y>=0&&b.y+b.height<=640); }
 await page.locator('[data-consent="preferences"]').click();assert.equal(await page.locator('#cookie-preferences').isVisible(),true);
 await page.locator('[data-consent-save]').click();assert.equal(await page.locator('#cookie-preferences').isVisible(),false);
});
test('11. teclado: Enter, Tab, Shift+Tab, Escape y restauración de foco', async t => {
 const {page}=await setup(t);await page.locator('[data-consent="preferences"]').focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('#cookie-preferences').evaluate(e=>e.open),true);
 await page.locator('[data-consent-close]').focus();await page.keyboard.press('Tab');assert.equal(await page.locator('[data-consent-analytics]').evaluate(e=>e===document.activeElement),true);
 await page.keyboard.press('Shift+Tab');assert.equal(await page.locator('[data-consent-close]').evaluate(e=>e===document.activeElement),true);
 await page.keyboard.press('Escape');assert.equal(await page.locator('#cookie-preferences').evaluate(e=>e.open),false);
 assert.equal(await page.locator('[data-consent="preferences"]').evaluate(e=>e===document.activeElement),true);
});
test('portada sin Nuxt: mismo servicio, decisiones y modal', async t => {
 const { page, google }=await setup(t);await page.goto(origin+'/');await page.waitForFunction(()=>!!window.SysifosConsent);
 assert.equal(await page.locator('#home-cookie-banner').isVisible(),true);await accept(page);assert.equal((await state(page)).analytics,true);
 await page.locator('a[href="#cookies"]').click();assert.equal(await page.locator('#cookie-preferences').evaluate(e=>e.open),true);assert.equal(google.length,1);
});
test('preferencia caducada, antigua o corrupta: pedir decisión y no cargar Google', async t => {
 const {page, google}=await setup(t,{...record(true),timestamp:'2020-01-01T00:00:00Z'});
 assert.equal((await state(page)).decided,false);assert.equal(google.length,0);
 await page.evaluate(KEY=>localStorage.setItem(KEY,'broken'),KEY);await page.reload();await page.waitForFunction(()=>!!window.SysifosConsent);
 assert.equal((await state(page)).decided,false);
});
test('eventos previos a aceptar se descartan y URLs se minimizan', async t=>{
 const {page}=await setup(t);assert.equal(await page.evaluate(()=>window.SysifosConsent.track('generate_lead')),false);
 await page.goto(origin+'/servicios?email=private@example.com#private');await accept(page);
 const events=(await commands(page)).filter(c=>c[0]==='event');assert(!events.some(c=>c[1]==='generate_lead'));assert(events.every(c=>!JSON.stringify(c).includes('private@example')));
});
test('almacenamiento bloqueado: elegir sigue funcionando en memoria',async t=>{
 const {page}=await setup(t);await page.evaluate(()=>{Storage.prototype.setItem=()=>{throw Error('blocked')}});await accept(page);assert.equal((await state(page)).analytics,true);
});
test('métricas: configurar y guardar cuentan una sola primera interacción', async t=>{
 const {page,metrics}=await setup(t);await page.locator('[data-consent="preferences"]').click();await page.locator('[data-consent-close]').click();
 await page.locator('[data-consent="preferences"]').click();await page.locator('[data-consent-save]').click();await page.waitForTimeout(100);
 assert.equal(metrics.filter(e=>e.first_interaction).length,1);assert.equal(metrics.filter(e=>e.event==='consent_banner_view').length,1);
 assert(!metrics.some(e=>'path' in e || 'email' in e || 'visitor_id' in e));
});
test('otra pestaña: retirada de consentimiento sincroniza el estado',async t=>{
 const {page,context}=await setup(t);await accept(page);const second=await context.newPage();await second.goto(origin+'/servicios');await second.waitForFunction(()=>!!window.SysifosConsent);
 await second.evaluate(()=>window.SysifosConsent.choose(false,'reject'));await page.waitForFunction(()=>!window.SysifosConsent.getState().analytics);
 assert.equal(await page.evaluate(()=>window['ga-disable-G-3BJ0HZ6RSH']),true);
});
test('layout secundario: nosotros también permite decidir y reabrir',async t=>{
 const {page}=await setup(t);await page.goto(origin+'/nosotros');await page.waitForFunction(()=>!!window.SysifosConsent);
 assert.equal(await page.locator('#home-cookie-banner').isVisible(),true);await reject(page);await page.locator('a[href="#cookies"]').click();assert.equal(await page.locator('#cookie-preferences').evaluate(e=>e.open),true);
});
for (const [analytics,status] of [[true,200],[false,200],[true,422]]) test(`contacto: evento condicionado a consentimiento=${analytics} y respuesta=${status}`,async t=>{
 const {page}=await setup(t,record(analytics));
 await page.route('**/api/contact/register',route=>route.fulfill({status,contentType:'application/json',body:JSON.stringify({message:status===200?'Recibido':'Error de validación'})}));
 await page.goto(origin+'/contacto');await page.waitForFunction(()=>!!window.SysifosConsent);
 await page.locator('#contact-name').fill('Persona de prueba');await page.locator('#contact-email').fill('qa@example.invalid');
 await page.locator('#contact-subject').fill('Consulta de prueba');await page.locator('#contact-message').fill('Mensaje de prueba sin envío real al backend.');
 const form=page.locator('form').filter({has:page.locator('#contact-name')});await form.locator('input[type="checkbox"]').check();
 await form.locator('button[type="submit"]').click();await page.waitForTimeout(150);
 const events=(await commands(page)).filter(c=>c[0]==='event');assert.equal(events.filter(c=>c[1]==='generate_lead').length,analytics&&status===200?1:0);
 assert(!events.some(c=>c[1]==='conversion'));assert(!events.some(c=>JSON.stringify(c).includes('qa@example.invalid')));
});
for(const stored of [{...record(true),version:'1.1'},{...record(true),timestamp:'2099-01-01T00:00:00Z'},{version:'2.0',timestamp:new Date().toISOString()}]) test(`preferencia inválida no habilita GA: ${JSON.stringify(stored)}`,async t=>{
 const {page,google}=await setup(t,stored);assert.equal((await state(page)).decided,false);assert.equal(google.length,0);assert.equal(await page.locator('#home-cookie-banner').isVisible(),true);
});
test('volver a una ruta después de navegar sin permiso permite medir la vista actual',async t=>{
 const {page,google}=await setup(t);await accept(page);await page.evaluate(()=>window.SysifosConsent.choose(false,'reject'));
 await page.locator('a[href="/portfolio"]').first().click();await page.waitForURL('**/portfolio');await page.waitForTimeout(80);
 await page.goBack();await page.waitForURL('**/servicios');await page.waitForTimeout(80);
 await page.evaluate(()=>window.SysifosConsent.choose(true,'accept'));assert.equal(await countViews(page),2);assert.equal(google.length,1);
});
