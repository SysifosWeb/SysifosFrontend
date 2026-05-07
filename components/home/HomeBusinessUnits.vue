<template>
  <section id="servicios" class="services-section bg-section-dark">

    <!-- Glow morado sutil -->
    <div class="section-glow-purple glow-right-center"></div>

    <div class="section-container">

      <!-- Header -->
      <div class="mb-12 max-w-xl">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Lo que podemos hacer por ti</span>
        </div>
        <h2 class="section-title text-3xl md:text-4xl">
          Soluciones digitales que impulsan tu negocio.
        </h2>
      </div>

      <!-- Grid de Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="(service, index) in services" :key="index"
             class="service-card group relative flex flex-col p-8 rounded-2xl cursor-default bg-section-surface"
             :class="`service-card--${service.variant}`">

          <!-- Línea top accent al hover -->
          <div class="service-top-line absolute top-0 left-8 right-8 h-px rounded-full"></div>

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
      <div class="mt-10 flex justify-end">
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

/* ── Glow ────────────────────────────────── */
.glow-right-center {
  width: 350px;
  height: 350px;
  top: 50%;
  right: -80px;
  transform: translateY(-50%);
}

/* ── Service Card ────────────────────────── */
.service-card {
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

/* ── Línea top de acento ─────────────────── */
.service-top-line {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-top-line { opacity: 1; }

/* ── Variantes de color por servicio ─────── */
.service-card--cyan  .service-icon { background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.18); color: #38BDF8; }
.service-card--cyan  .service-top-line { background: #38BDF8; }
.service-card--cyan  .service-cta { color: #38BDF8; }

.service-card--purple .service-icon { background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.18); color: #6366F1; }
.service-card--purple .service-top-line { background: #6366F1; }
.service-card--purple .service-cta { color: #6366F1; }

.service-card--green  .service-icon { background: rgba(52, 211, 153, 0.08); border: 1px solid rgba(52, 211, 153, 0.18); color: #34D399; }
.service-card--green  .service-top-line { background: #34D399; }
.service-card--green  .service-cta { color: #34D399; }

/* ── Feature pills ───────────────────────── */
.feature-pill {
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

/* ── CTA interno ─────────────────────────── */
.service-cta-wrap {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
