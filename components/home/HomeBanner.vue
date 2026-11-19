<template>
  <section class="home-closing impulso-closing bg-section-dark" aria-labelledby="home-closing-title">
    <div class="section-container">
      <div class="closing-panel">
        <div class="closing-copy">
          <h2 id="home-closing-title" class="closing-title" v-reveal data-delay="0">
            Conversemos 15 minutos sobre cómo captar y ordenar más clientes.
          </h2>
          <p class="closing-description" v-reveal data-delay="80">
            Revisamos tu sitio actual, formularios y procesos manuales sin compromiso. Si no necesitas un desarrollo a medida, te lo decimos directo.
          </p>
        </div>

        <div class="closing-actions" v-reveal data-delay="140">
          <NuxtLink to="/contacto" class="btn btn-primary px-8 py-4">
            Solicitar diagnóstico gratuito
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="/servicios" class="closing-secondary">
            Ver servicios y valores
          </NuxtLink>
          <p class="closing-note">Respuesta en menos de 24 horas hábiles · Región de Coquimbo y todo Chile</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<style scoped>
.home-closing {
  padding: clamp(5rem, 9vw, 8rem) 0;
  border-top: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.closing-panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding: clamp(2.25rem, 5vw, 4rem);
  border-radius: var(--radius-xl);
  background: var(--bg-surface);
  border: 1px solid var(--border);
}

.closing-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 1.35rem + 2.4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-width: 20ch;
  margin: 0 0 1.25rem;
  text-wrap: balance;
}

.closing-description {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 54ch;
  margin: 0;
}

.closing-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.closing-secondary {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--accent);
}

.closing-secondary:hover {
  text-decoration: underline;
}

.closing-note {
  font-size: var(--fs-small);
  color: var(--text-muted);
  margin: 0.25rem 0 0;
}

@media (min-width: 960px) {
  .closing-panel {
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
    align-items: center;
    gap: 4rem;
  }
}
</style>
