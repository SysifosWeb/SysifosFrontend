<template>
  <header class="portfolio-hero bg-section-dark">
    <div class="site-container text-center">
      <h1 class="display-title portfolio-headline">
        Diseño web <span class="display-accent">en acción</span>
      </h1>
      <p class="portfolio-subtitle">
        Una selección de sitios diseñados por SysifosWeb. Selecciona un proyecto para ver su diseño en detalle.
      </p>
    </div>
  </header>
</template>

<style scoped>
.portfolio-hero {
  border-bottom: 1px solid var(--border);
  padding: clamp(8rem, 14vw, 12rem) 0 clamp(3.5rem, 7vw, 6rem);
}

.portfolio-headline {
  font-weight: var(--fw-hero);
  color: var(--text-main);
}

.portfolio-subtitle {
  max-width: 55ch;
  margin: 1.5rem auto 0;
  font-size: var(--fs-lead);
  line-height: var(--lh-lead);
  color: var(--text-secondary);
}
</style>
