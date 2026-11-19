<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="secondary-header-container bg-section-dark">
    <div class="section-container">
      <div class="hero-grid">
        <div>
          <h1 class="about-headline">
            Tecnología con propósito. <span class="display-accent">Un equipo cercano.</span>
          </h1>
        </div>

        <div>
          <p class="about-description">
            Somos un equipo de desarrollo en Coquimbo. Trabajamos contigo para convertir las necesidades de tu negocio en soluciones digitales claras y útiles.
          </p>

          <dl class="hero-facts">
            <div class="hero-fact">
              <dt>Base operativa</dt>
              <dd>Región de Coquimbo, Chile</dd>
            </div>
            <div class="hero-fact">
              <dt>Forma de trabajo</dt>
              <dd>Trato directo con ingeniería, sin intermediarios</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.secondary-header-container {
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

.about-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-inline-size: 18ch;
  text-wrap: balance;
  margin: 0;
}

.about-description {
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
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  }
}

@media (max-width: 640px) {
  .about-headline {
    max-inline-size: none;
  }
}
</style>
