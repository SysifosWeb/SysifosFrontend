<template>
  <section id="servicios" class="services-section bg-section-dark">

    <div class="section-container">

      <!-- Header -->
      <div class="mb-12 max-w-xl">
        <p class="section-eyebrow mb-4" v-reveal data-delay="0">Lo que podemos hacer por ti</p>
        <h2 class="section-title" v-reveal data-delay="100">
          Soluciones digitales que impulsan tu negocio.
        </h2>
      </div>

      <!-- Grid de Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="(service, index) in services" :key="index"
             v-reveal :data-delay="index * 150"
             class="service-card group relative flex flex-col p-8 cursor-default bg-section-surface"
             :class="`service-card--${service.variant}`">

          <!-- Ícono -->
          <div class="service-icon mb-7 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300">
            <component :is="service.icon" class="w-5 h-5" :stroke-width="1.8"/>
          </div>

          <!-- Título -->
          <h3 class="card-title mb-3">{{ service.title }}</h3>

          <!-- Descripción -->
          <p class="card-text mb-8 flex-1">{{ service.description }}</p>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="feat in service.features" :key="feat" class="feature-pill">
              {{ feat }}
            </span>
          </div>

          <!-- CTA interno -->
          <div class="service-cta-wrap pt-5">
            <NuxtLink to="/contacto" class="service-cta group/link inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200">
              Hablemos de tu proyecto
              <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="mt-10 flex justify-end" v-reveal data-delay="300">
        <NuxtLink to="/servicios" class="cta-ghost">
          Ver todos los servicios
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Globe, ShoppingBag, Cpu } from 'lucide-vue-next'

const services = [
  {
    title: 'Páginas web que convierten visitantes en clientes',
    description: 'Diseñamos sitios rápidos, modernos y estratégicamente construidos para llevar a cada visitante hacia la acción que necesitas. Sin plantillas, sin atajos.',
    icon: Globe,
    features: ['Diseño a medida', 'SEO desde el inicio', 'Optimizado para móvil'],
    variant: 'cyan',
  },
  {
    title: 'Tu tienda online lista para vender las 24 horas',
    description: 'Creamos plataformas de venta seguras, fáciles de administrar y preparadas para escalar cuando tu negocio lo necesite.',
    icon: ShoppingBag,
    features: ['Pagos seguros', 'Gestión de inventario', 'Experiencia de compra fluida'],
    variant: 'purple',
  },
  {
    title: 'Software hecho exactamente para tu empresa',
    description: 'Cuando las herramientas genéricas no son suficientes, construimos la solución exacta que tu negocio necesita para crecer sin fricciones.',
    icon: Cpu,
    features: ['Automatización de procesos', 'Integración con sistemas actuales', 'Soporte continuo'],
    variant: 'green',
  }
]
</script>

<style scoped>
/* ── Layout ─────────────────────────────── */
.services-section {
  position: relative;
  padding: 4rem 0 5rem;
  overflow: hidden;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 88%;
  max-width: 1340px;
  margin: 0 auto;
}

/* ── Service Card ────────────────────────── */
.service-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.25s ease, background-color 0.25s ease;
}

.service-card:hover {
  border-color: var(--border-accent);
  background: var(--bg-elevated);
}

/* ── Variantes de color por servicio ─────── */
.service-card--cyan  .service-icon { background: rgba(var(--decoration-rgb), 0.08); border: 1px solid rgba(var(--decoration-rgb), 0.18); color: var(--accent); }
.service-card--cyan  .service-top-line { background: var(--accent); }
.service-card--cyan  .service-cta { color: var(--accent); }

.service-card--purple .service-icon { background: rgba(var(--decoration-rgb), 0.08); border: 1px solid rgba(var(--decoration-rgb), 0.18); color: var(--accent); }
.service-card--purple .service-top-line { background: var(--accent); }
.service-card--purple .service-cta { color: var(--accent); }

.service-card--green  .service-icon { background: rgba(var(--decoration-rgb), 0.08); border: 1px solid rgba(var(--decoration-rgb), 0.18); color: var(--accent); }
.service-card--green  .service-top-line { background: var(--accent); }
.service-card--green  .service-cta { color: var(--accent); }

/* ── Feature pills ───────────────────────── */
.feature-pill {
  font-size: var(--fs-small);
  font-weight: 500;
  padding: 0.2rem 0.75rem;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--text-muted);
  border: 1px solid rgba(var(--neutral-rgb), 0.07);
}

/* ── CTA interno ─────────────────────────── */
.service-cta-wrap {
  margin-top: auto;
}
</style>
