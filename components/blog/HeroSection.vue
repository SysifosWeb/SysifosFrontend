<script setup>
</script>

<template>
  <section class="blog-hero bg-section-dark pt-36 pb-12 lg:pt-44 lg:pb-16 border-b border-line">
    <div class="section-container">
      <div class="hero-grid">
        <div>
          <h1 class="blog-hero__title" v-reveal data-delay="0">
            Guías prácticas de software, captación <span class="display-accent">y&nbsp;automatización.</span>
          </h1>
        </div>

        <div v-reveal data-delay="80">
          <p class="blog-hero__subtitle">
            Artículos técnicos y comerciales para empresas en Chile que buscan ordenar sus procesos, mejorar su web y elegir tecnología sin sobredimensionar costos.
          </p>

          <dl class="hero-facts">
            <div class="hero-fact">
              <dt>Temas principales</dt>
              <dd>Captación web, integraciones y automatización PYME</dd>
            </div>
            <div class="hero-fact">
              <dt>Enfoque</dt>
              <dd>Decisiones prácticas para operar con cPanel y Laravel</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.blog-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-inline-size: 18ch;
  margin: 0;
  text-wrap: balance;
}

.blog-hero__subtitle {
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
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  }
}

@media (max-width: 640px) {
  .blog-hero__title {
    max-inline-size: none;
  }
}
</style>
