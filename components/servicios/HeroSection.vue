<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="hero-section bg-section-dark pt-36 lg:pt-44 pb-12 lg:pb-16">
    <div class="section-container">
      <div class="hero-grid">
        <div class="hero-left">
          <h1 class="hero-headline" v-reveal data-delay="0">
            Captación web, automatización <span class="display-accent">y&nbsp;software práctico.</span>
          </h1>

          <div class="hero-actions" v-reveal data-delay="120">
            <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary">
              Solicitar diagnóstico gratuito
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
            <a href="#paquetes" class="btn btn-secondary">
              Ver paquetes y valores
            </a>
          </div>
        </div>

        <div class="hero-right" v-reveal data-delay="80">
          <p class="hero-subtitle">
            Infraestructura digital que ordena tus cotizaciones, evita que se pierdan clientes y automatiza trabajo manual sin costos inflados de servidores.
          </p>

          <dl class="hero-facts">
            <div class="hero-fact">
              <dt>Valores transparentes</dt>
              <dd class="tabular-nums">Desde $200.000 CLP netos + IVA</dd>
            </div>
            <div class="hero-fact">
              <dt>Entregas acotadas</dt>
              <dd>Avances visibles en 2 a 4 semanas</dd>
            </div>
            <div class="hero-fact">
              <dt>Infraestructura frugal</dt>
              <dd>Optimizada para hosting cPanel sin sobrecostos</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: start;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-inline-size: 18ch;
  text-wrap: balance;
  margin: 0 0 1.75rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

.hero-subtitle {
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
  .hero-headline {
    max-inline-size: none;
  }
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
