(() => {
  const menu = document.getElementById('home-menu');
  if (menu) {
    const trigger = menu.querySelector('summary');
    const lastLink = menu.querySelector('li:last-child a');
    const desktop = matchMedia('(min-width: 1024px)');
    desktop.addEventListener('change', event => {
      if (event.matches) menu.open = false;
    });
    document.addEventListener('keydown', event => {
      if (!menu.open) return;
      if (event.key === 'Escape') {
        menu.open = false;
        trigger.focus();
      } else if (event.key === 'Tab' && event.shiftKey && document.activeElement === trigger) {
        event.preventDefault();
        lastLink.focus();
      } else if (event.key === 'Tab' && !event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        trigger.focus();
      }
    });
  }
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
