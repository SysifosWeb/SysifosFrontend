(() => {
  if (window.SysifosSiteThemeReady) return;
  window.SysifosSiteThemeReady = true;

  const storageKey = 'sysifos-site-theme';
  const root = document.documentElement;

  try {
    if (localStorage.getItem(storageKey) === 'dark') root.dataset.siteTheme = 'dark';
  } catch {
    // The theme can still be changed for the current page.
  }

  document.addEventListener('click', event => {
    if (!event.target.closest('[data-site-theme-toggle]')) return;

    const dark = root.dataset.siteTheme !== 'dark';
    if (dark) root.dataset.siteTheme = 'dark';
    else delete root.dataset.siteTheme;

    try {
      localStorage.setItem(storageKey, dark ? 'dark' : 'light');
    } catch {
      // Keep the active theme when storage is unavailable.
    }
  });
})();
