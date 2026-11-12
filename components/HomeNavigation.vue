<script setup>
const links = [
  { to: '/', label: 'Inicio' }, { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' }, { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' }
]
</script>
<template>
  <nav class="site-nav home-navigation" aria-label="Navegación principal">
    <div class="site-container site-nav-frame">
      <div class="site-nav-bar flex items-center justify-between py-10 lg:py-12">
        <a href="/" class="flex items-center"><BrandLogo class="h-8 md:h-10 w-auto aspect-[403/80]" /></a>
        <ul class="hidden lg:flex items-center gap-7 xl:gap-12">
          <li v-for="item in links" :key="item.to"><a :href="item.to" :aria-current="item.to === '/' ? 'page' : undefined" class="nav-link text-[15px] tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-all font-tech uppercase" :class="{ 'text-accent': item.to === '/' }">{{ item.label }}</a></li>
          <li><a href="/contacto" class="btn btn-primary ml-6 text-[13px] uppercase tracking-widest font-tech">Contacto</a></li>
        </ul>
        <SiteThemeToggle />
        <details id="home-menu" class="min-h-11 min-w-11 lg:hidden">
          <summary class="home-menu-toggle text-accent rounded-sm min-w-11 min-h-11 flex items-center justify-center cursor-pointer list-none" aria-controls="home-menu-panel">
            <span class="home-menu-open">
              <span class="sr-only">Abrir menú</span>
              <span class="flex flex-col gap-1.5" aria-hidden="true">
                <span v-for="line in 3" :key="line" class="w-5 h-px bg-accent"></span>
              </span>
            </span>
            <span class="home-menu-close">
              <span class="sr-only">Cerrar menú</span>
              <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="square" stroke-width="0.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </summary>
          <div id="home-menu-panel" class="fixed inset-0 bg-[var(--bg-dark)] p-10 overflow-y-auto overscroll-contain">
            <div class="absolute inset-0 technical-grid opacity-5 pointer-events-none" aria-hidden="true"></div>
            <a href="/" class="relative flex w-fit items-center mb-24">
              <BrandLogo class="h-8 md:h-10 w-auto aspect-[403/80]" />
            </a>
            <ul class="relative flex flex-col space-y-10">
              <li v-for="item in [...links, { to: '/contacto', label: 'Contacto' }]" :key="item.to">
                <a :href="item.to" :aria-current="item.to === '/' ? 'page' : undefined" class="text-2xl font-bold tracking-widest text-[var(--text-main)] font-tech uppercase transition-colors hover:text-accent">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </nav>
</template>
<style scoped>
summary::-webkit-details-marker { display: none; }
.home-menu-close,
#home-menu[open] .home-menu-open { display: none; }

#home-menu[open] .home-menu-close { display: block; }

#home-menu[open] .home-menu-toggle {
  position: fixed;
  top: 2.125rem;
  right: 2.125rem;
  z-index: 1;
}

@media (max-width: 1023px) {
  :global(body:has(#home-menu[open])) { overflow: hidden; }
}
</style>
