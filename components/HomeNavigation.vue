<script setup>
const links = [
  { to: '/', label: 'Inicio' }, { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' }, { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' }
]
</script>
<template>
  <nav class="home-navigation absolute top-0 left-0 w-full z-[1002]" aria-label="Navegación principal">
    <div class="site-container border-b border-[var(--border)]">
      <div class="flex items-center justify-between py-10 lg:py-12">
        <a href="/" class="flex items-center"><BrandLogo class="h-8 md:h-10 w-auto aspect-[403/80]" /></a>
        <ul class="hidden lg:flex items-center gap-12">
          <li v-for="item in links" :key="item.to"><a :href="item.to" :aria-current="item.to === '/' ? 'page' : undefined" class="text-[15px] tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] font-tech uppercase">{{ item.label }}</a></li>
          <li><a href="/contacto" class="btn btn-primary ml-6 text-[13px] uppercase tracking-widest font-tech">Contacto</a></li>
        </ul>
        <details id="home-menu" class="lg:hidden">
          <summary aria-label="Abrir menú" class="text-accent min-w-11 min-h-11 flex items-center justify-center cursor-pointer list-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </summary>
          <div class="home-menu-panel">
            <ul><li v-for="item in [...links, { to: '/contacto', label: 'Contacto' }]" :key="item.to"><a :href="item.to">{{ item.label }}</a></li></ul>
          </div>
        </details>
      </div>
    </div>
  </nav>
</template>
<style scoped>
summary::-webkit-details-marker { display: none; }
.home-menu-panel { position: absolute; top: calc(100% - 1px); left: 4%; right: 4%; padding: 1rem; background: var(--bg-dark); border: 1px solid var(--border); border-radius: 0 0 16px 16px; box-shadow: 0 18px 30px #102b4614; }
.home-menu-panel a { display: block; padding: .85rem 1rem; color: var(--text-main); font-weight: 600; border-radius: 8px; }
.home-menu-panel a:hover, .home-menu-panel a:focus-visible { background: var(--bg-elevated); }
</style>
