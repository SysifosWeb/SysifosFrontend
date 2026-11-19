<template>
  <header class="portfolio-hero bg-section-dark">
    <div class="section-container">
      <div class="hero-grid">
        <div>
          <h1 class="portfolio-headline">
            Diseño web <span class="display-accent">en acción.</span>
          </h1>
        </div>

        <div>
          <p class="portfolio-subtitle">
            Una selección de sitios y plataformas diseñadas por SysifosWeb. Selecciona un proyecto para revisar su estructura en detalle.
          </p>

          <dl class="hero-facts">
            <div class="hero-fact">
              <dt>Enfoque</dt>
              <dd>Conversión móvil, velocidad y claridad comercial</dd>
            </div>
            <div class="hero-fact">
              <dt>Rubros atendidos</dt>
              <dd>Ingeniería B2B, maestranzas, salud y servicios</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.portfolio-hero {
  border-bottom: 1px solid var(--border);
  padding: clamp(9rem, 11vw, 11rem) 0 clamp(3rem, 5vw, 4.5rem);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.75rem, 4vw, 4.5rem);
  align-items: start;
}

.portfolio-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-inline-size: 14ch;
  text-wrap: balance;
  margin: 0;
}

.portfolio-subtitle {
  font-size: var(--fs-lead);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
}

.hero-facts {
  margin: 0;
  border-top: 1px solid var(--border);
}

.hero-fact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.25rem 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.hero-fact dt {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--text-main);
}

.hero-fact dd {
  margin: 0;
  font-size: var(--fs-small);
  color: var(--text-secondary);
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }
}

@media (max-width: 640px) {
  .portfolio-headline {
    max-inline-size: none;
  }
}
</style>
