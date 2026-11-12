(() => {
  const root = document.documentElement;
  const updateScrollControls = () => {
    root.classList.toggle('site-nav-scrolled', window.scrollY > 32);
    const remaining = root.scrollHeight - window.innerHeight - window.scrollY;
    root.classList.toggle('site-near-bottom', window.scrollY > 32 && remaining <= 120);
  };

  window.addEventListener('scroll', updateScrollControls, { passive: true });
  window.addEventListener('resize', updateScrollControls);
  window.addEventListener('pageshow', updateScrollControls);

  document.addEventListener('click', event => {
    if (!event.target.closest('[data-back-to-top]')) return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    document.querySelector('.site-nav a[href="/"]')?.focus({ preventScroll: true });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  });

  updateScrollControls();
})();
