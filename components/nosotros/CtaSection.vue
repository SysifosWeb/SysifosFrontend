<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="conversemos" class="nosotros-cta impulso-closing bg-section-dark" aria-labelledby="cta-closing-title">
    <div class="section-container">
      <div class="cta-panel">
        <div class="cta-copy">
          <h2 id="cta-closing-title" class="cta-title" v-reveal data-delay="0">
            Ordena tu captación y ahorra horas operativas.
          </h2>
          <p class="cta-subtitle" v-reveal data-delay="80">
            Cuéntanos cómo llegan tus consultas o cotizaciones hoy. En 15 minutos te decimos qué conviene construir primero y cuánto cuesta sin letra chica.
          </p>
        </div>

        <div class="cta-actions" v-reveal data-delay="140">
          <NuxtLink to="/contacto" class="btn btn-primary px-8 py-4 text-body">
            Solicitar diagnóstico gratuito
            <ArrowRight class="w-5 h-5" aria-hidden="true" />
          </NuxtLink>
          <p class="cta-meta">Respuesta en menos de 24 h hábiles · Alcance y valores transparentes · Soporte directo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros-cta {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-top: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.cta-panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  padding: clamp(2rem, 5vw, 3.75rem);
  border-radius: var(--radius-xl);
  background: var(--bg-surface);
  border: 1px solid var(--border);
}

.cta-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 1.35rem + 2.4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-width: 19ch;
  margin: 0 0 1rem;
  text-wrap: balance;
}

.cta-subtitle {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 54ch;
  margin: 0;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.cta-meta {
  font-size: var(--fs-small);
  color: var(--text-muted);
  margin: 0;
}

@media (min-width: 960px) {
  .cta-panel {
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.85fr);
    align-items: center;
    gap: 3.5rem;
  }
}
</style>
