<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="hero-section bg-section-dark pt-36 lg:pt-44 pb-12 lg:pb-16">
    <div class="section-container">
      <div class="hero-inner">
        <h1 class="hero-headline" v-reveal data-delay="0">
          Captación web, automatización <span class="display-accent">y&nbsp;software práctico.</span>
        </h1>

        <p class="hero-subtitle" v-reveal data-delay="80">
          Infraestructura digital que ordena tus cotizaciones, evita que se pierdan clientes y automatiza trabajo manual sin costos inflados de servidores. Todos los valores en CLP netos + IVA.
        </p>

        <div class="hero-actions" v-reveal data-delay="140">
          <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary">
            Solicitar diagnóstico gratuito
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
          <a href="#paquetes" class="btn btn-secondary">
            Ver paquetes y valores
          </a>
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

.hero-inner {
  max-width: 48rem;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3.2vw, 3.85rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-inline-size: 20ch;
  text-wrap: balance;
  margin: 0 0 1.25rem;
}

.hero-subtitle {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 60ch;
  margin: 0 0 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
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
