(() => {
  const key = 'sysifos_cookie_consent';
  const banner = document.getElementById('home-cookie-banner');
  const menu = document.getElementById('home-menu');
  if (!banner) return;
  let decision = null;
  let timer;
  let analyticsStarted = false;
  try { decision = JSON.parse(localStorage.getItem(key))?.decision || null; } catch {}
  if (!['accepted', 'rejected'].includes(decision)) decision = null;
  const gtag = (...args) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  };
  const sync = value => gtag('consent', 'update', {
    ad_storage: value === 'accepted' ? 'granted' : 'denied',
    analytics_storage: value === 'accepted' ? 'granted' : 'denied',
    ad_user_data: value === 'accepted' ? 'granted' : 'denied',
    ad_personalization: value === 'accepted' ? 'granted' : 'denied'
  });
  const startAnalytics = () => {
    if (analyticsStarted) return;
    analyticsStarted = true;
    gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', 'G-3BJ0HZ6RSH', { anonymize_ip: true, send_page_view: false });
    sync('accepted');
    if (!document.querySelector('script[data-gtag]')) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BJ0HZ6RSH';
      script.async = true;
      script.dataset.gtag = '';
      document.head.append(script);
    }
    gtag('event', 'page_view', { page_location: location.href, page_title: document.title, page_path: location.pathname });
  };
  const cleanup = () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  const show = () => { cleanup(); banner.hidden = false; };
  const onScroll = () => {
    if ((scrollY + innerHeight) / document.documentElement.scrollHeight >= 0.3 && decision === null) show();
  };
  const openFromHash = () => { if (location.hash === '#cookies') show(); };
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
  if (decision === 'accepted') startAnalytics();
  if (decision === null && location.hash !== '#cookies') {
    timer = setTimeout(show, 45000);
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  banner.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => {
    decision = button.dataset.consent;
    try { localStorage.setItem(key, JSON.stringify({ decision, timestamp: new Date().toISOString(), version: '1.1' })); } catch {}
    if (decision === 'accepted') { startAnalytics(); gtag('event', 'consent_accepted', { page_path: location.pathname }); }
    else if (analyticsStarted) sync('rejected');
    const payload = JSON.stringify({ decision, path: location.pathname, ts: Date.now() });
    fetch('/api/consent', { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
    banner.hidden = true;
    cleanup();
    if (location.hash === '#cookies') history.replaceState(null, '', location.pathname + location.search);
  }));
  menu?.addEventListener('toggle', () => menu.querySelector('summary').setAttribute('aria-label', menu.open ? 'Cerrar menú' : 'Abrir menú'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if (menu?.open && !menu.contains(event.target)) menu.open = false; });
  const tilt = document.querySelector('.hero-project-tilt');
  const motion = document.querySelector('.hero-project-motion');
  if (tilt && motion && matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    motion.addEventListener('pointermove', event => {
      const box = motion.getBoundingClientRect();
      const x = Math.max(-0.5, Math.min(0.5, (event.clientX - box.left) / box.width - 0.5));
      const y = Math.max(-0.5, Math.min(0.5, (event.clientY - box.top) / box.height - 0.5));
      tilt.style.transform = `perspective(1400px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translate3d(${x * 8}px, ${y * 6}px, 0)`;
    });
    const reset = () => { tilt.style.transform = ''; };
    motion.addEventListener('pointerleave', reset);
    motion.addEventListener('pointercancel', reset);
  }
})();
