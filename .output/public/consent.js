/* Servicio compartido por Nuxt y la portada sin hidratación. Sin dependencias. */
(() => {
  'use strict';
  if (window.SysifosConsent) return;
  const KEY = 'sysifos_cookie_consent';
  const VERSION = '2.0';
  const MAX_AGE = 180 * 86400000;
  const ID = 'G-3BJ0HZ6RSH';
  const denied = { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
  const debug = ['localhost', '127.0.0.1'].includes(location.hostname) && new URLSearchParams(location.search).get('consent_debug') === '1';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', { ...denied });
  window[`ga-disable-${ID}`] = true;

  let record = readStored();
  let started = false;
  let lastPage = null;
  let observedPage = null;
  let viewedCurrentPage = false;
  let root;
  let dialog;
  let previousFocus;
  let bannerCounted = false;
  let interacted = false;
  let preferencesContext = 'initial';
  const mounted = new WeakSet();

  function readStored() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY));
      const timestamp = Date.parse(value?.timestamp);
      if (value?.version === VERSION && typeof value.preferences?.analytics === 'boolean'
        && value.preferences?.necessary === true && value.preferences?.advertising === false
        && Number.isFinite(timestamp) && timestamp <= Date.now() && Date.now() - timestamp < MAX_AGE) return value;
    } catch { /* Almacenamiento bloqueado o inválido: denegar. */ }
    return null;
  }
  function allowed() { return record?.preferences.analytics === true; }
  function eligible() { return !/^\/admin(?:\/|$)/.test(location.pathname); }
  function apply() {
    window[`ga-disable-${ID}`] = !allowed() || !eligible();
    gtag('consent', 'update', { ...denied, analytics_storage: allowed() ? 'granted' : 'denied' });
  }
  function cleanUrl(value) {
    const url = new URL(value, location.origin);
    // No enviar querystrings, hashes ni rutas privadas a Google.
    return url.origin + url.pathname;
  }
  function track(name, parameters = {}) {
    if (!allowed() || !eligible()) return false;
    gtag('event', name, { page_referrer: document.referrer ? cleanUrl(document.referrer) : '', ...parameters, send_to: ID, page_location: cleanUrl(location.href), ...(debug ? { debug_mode: true } : {}) });
    return true;
  }
  function pageView() {
    window[`ga-disable-${ID}`] = !allowed() || !eligible();
    const page = cleanUrl(location.href);
    if (page !== observedPage) { observedPage = page; viewedCurrentPage = false; }
    if (!allowed() || !eligible()) return;
    start();
    if (viewedCurrentPage) return;
    viewedCurrentPage = true;
    const referrer = lastPage || (document.referrer ? cleanUrl(document.referrer) : '');
    lastPage = page;
    track('page_view', { page_title: document.title, page_referrer: referrer });
  }
  function start() {
    if (started || !allowed() || !eligible()) return;
    started = true;
    gtag('js', new Date());
    gtag('set', 'ads_data_redaction', true);
    gtag('config', ID, { send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false, cookie_expires: 180 * 86400, cookie_update: false,
      page_location: cleanUrl(location.href), page_referrer: document.referrer ? cleanUrl(document.referrer) : '',
      ...(debug ? { debug_mode: true } : {}) });
    if (!document.querySelector('script[data-sysifos-analytics]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
      script.dataset.sysifosAnalytics = '';
      document.head.append(script);
    }
  }
  function removeAnalyticsCookies() {
    const domains = location.hostname.split('.');
    const paths = new Set(['/']);
    const segments = location.pathname.split('/').filter(Boolean);
    while (segments.length) { paths.add('/' + segments.join('/')); paths.add('/' + segments.join('/') + '/'); segments.pop(); }
    document.cookie.split(';').forEach(item => {
      const name = item.trim().split('=')[0];
      if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gac_|_gcl_)/.test(name)) return;
      for (const path of paths) {
        const expired = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; SameSite=Lax`;
        document.cookie = expired;
        for (let i = 0; i < domains.length - 1; i++) {
          const domain = domains.slice(i).join('.');
          document.cookie = `${expired}; domain=${domain}`;
          document.cookie = `${expired}; domain=.${domain}`;
        }
      }
    });
  }
  function emit(name, context) {
    const firstInteraction = context === 'initial' && !interacted
      && ['consent_accept', 'consent_reject', 'consent_preferences_open'].includes(name);
    if (firstInteraction) interacted = true;
    const payload = { event: name, version: VERSION, context, analytics: allowed(), first_interaction: firstInteraction };
    window.dispatchEvent(new CustomEvent('sysifos:consent-event', { detail: payload }));
    if (debug) console.info('[consent]', payload);
    // Sin cookies, IP persistida, user-agent, rutas ni identificador de visitante.
    // No encolar eventos rechazados para enviarlos a GA4 después de aceptar.
    fetch('/api/consent-events', { method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload), keepalive: true }).catch(() => {});
    track(name, { consent_context: context, consent_version: VERSION });
  }
  function choose(analytics, action = 'save') {
    const previous = record;
    const context = previous ? 'settings' : 'initial';
    record = { version: VERSION, timestamp: new Date().toISOString(),
      preferences: { necessary: true, analytics: analytics === true, advertising: false } };
    try { localStorage.setItem(KEY, JSON.stringify(record)); } catch { /* Vigente en memoria. */ }
    apply();
    if (allowed()) { start(); pageView(); } else removeAnalyticsCookies();
    emit(action === 'accept' ? 'consent_accept' : action === 'reject' ? 'consent_reject' : 'consent_preferences_save', context);
    if (previous && previous.preferences.analytics !== allowed()) emit('consent_change', context);
    if (root) root.hidden = true;
    closePreferences();
    if (location.hash === '#cookies') history.replaceState(history.state, '', location.pathname + location.search);
  }
  function closePreferences() {
    if (dialog?.open) dialog.close();
  }
  function openPreferences() {
    mount();
    if (!dialog || dialog.open) return;
    previousFocus = document.activeElement;
    preferencesContext = record ? 'settings' : 'initial';
    dialog.querySelector('[data-consent-analytics]').checked = allowed();
    dialog.showModal();
    dialog.querySelector('[data-consent-analytics]').focus();
    emit('consent_preferences_open', preferencesContext);
  }
  function mount() {
    root = document.getElementById('home-cookie-banner');
    dialog = document.getElementById('cookie-preferences');
    if (!root || !dialog) return;
    const visible = !record && eligible();
    root.hidden = !visible;
    if (visible && !bannerCounted) { bannerCounted = true; emit('consent_banner_view', 'initial'); }
    if (mounted.has(root)) return;
    mounted.add(root);
    root.querySelector('[data-consent="accepted"]').addEventListener('click', () => choose(true, 'accept'));
    root.querySelector('[data-consent="rejected"]').addEventListener('click', () => choose(false, 'reject'));
    root.querySelector('[data-consent="preferences"]').addEventListener('click', openPreferences);
    dialog.querySelector('[data-consent-save]').addEventListener('click', () => choose(dialog.querySelector('[data-consent-analytics]').checked, 'save'));
    dialog.querySelector('[data-consent-close]').addEventListener('click', closePreferences);
    dialog.addEventListener('close', () => {
      if (previousFocus?.isConnected && !previousFocus.closest('[hidden]')) previousFocus.focus();
      else document.querySelector('a[href="#cookies"]')?.focus();
    });
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const elements = [...dialog.querySelectorAll('button, input:not(:disabled), a[href]')];
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }
  window.SysifosConsent = { choose, openPreferences, track, pageView, mount,
    getState: () => ({ analytics: allowed(), decided: !!record, version: VERSION }) };
  apply();
  if (!allowed()) removeAnalyticsCookies();
  pageView();
  document.addEventListener('click', event => {
    const link = event.target instanceof Element && event.target.closest('a[href="#cookies"]');
    if (link) { event.preventDefault(); openPreferences(); }
  });
  window.addEventListener('hashchange', () => { if (location.hash === '#cookies') openPreferences(); });
  window.addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    record = readStored();
    apply();
    if (allowed()) pageView(); else removeAnalyticsCookies();
    mount();
  });
  function ready() { mount(); if (location.hash === '#cookies') openPreferences(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
