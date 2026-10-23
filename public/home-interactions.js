(() => {
  const menu = document.getElementById('home-menu');
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
