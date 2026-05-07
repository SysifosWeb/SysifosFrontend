<template>
  <section class="problems-section bg-section-dark">

    <!-- Línea decorativa top -->
    <div class="section-line-top"></div>

    <!-- Glow morado bottom-left -->
    <div class="section-glow-purple glow-bottom-left"></div>

    <div class="section-container">

      <!-- Header -->
      <div class="text-center mb-12">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">El problema que frena tu crecimiento</span>
        </div>
        <h2 class="section-title problems-title">
          Tu negocio merece más que<br class="hidden md:block"/> un sitio web genérico.
        </h2>
      </div>

      <!-- Pain Point Cards -->
      <div class="flex flex-col gap-4">
        <div v-for="(pain, index) in pains" :key="pain.id"
             class="pain-card group relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-section-surface card-border">

          <!-- Número -->
          <div class="step-badge">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Ícono con color dinámico por tipo -->
          <div class="pain-icon shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
               :class="pain.iconClass">
            <component :is="pain.icon" class="w-5 h-5" :class="pain.colorClass" :stroke-width="1.8"/>
          </div>

          <!-- Texto -->
          <div class="flex-1 min-w-0">
            <h3 class="card-title mb-1.5">{{ pain.title }}</h3>
            <p class="card-text">{{ pain.description }}</p>
          </div>

          <!-- Solución -->
          <div class="solution-pill shrink-0 hidden lg:flex">
            <component :is="CheckCircle" class="w-4 h-4 shrink-0 text-accent"/>
            <span class="solution-pill__text">{{ pain.solution }}</span>
          </div>

          <!-- Hover glow -->
          <div class="card-hover-glow"></div>
        </div>
      </div>

      <!-- CTA inferior -->
      <div class="mt-12 text-center">
        <p class="card-text mb-5">¿Te identificas con alguno de estos problemas?</p>
        <NuxtLink to="/contacto" class="cta-ghost">
          Hablemos de tu proyecto
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Gauge, TrendingDown, Layers, CheckCircle } from 'lucide-vue-next'

const pains = [
  {
    id: 1,
    icon: Gauge,
    title: 'Tu web tarda en cargar y pierdes clientes antes de que te conozcan',
    description: 'Cada segundo de espera cuesta visitas, confianza y ventas. Una web lenta es una oportunidad perdida antes de comenzar.',
    solution: 'Construimos con velocidad como prioridad desde el primer día',
    iconClass: 'pain-icon--cyan',
    colorClass: 'text-accent',
  },
  {
    id: 2,
    icon: TrendingDown,
    title: 'Inviertes en publicidad pero tu sitio no convierte ese tráfico en ventas',
    description: 'Atraer visitantes es solo la mitad del trabajo. Sin una estrategia de conversión clara, el presupuesto publicitario se pierde.',
    solution: 'Diseñamos cada página con un objetivo: que el visitante actúe',
    iconClass: 'pain-icon--purple',
    colorClass: 'text-purple',
  },
  {
    id: 3,
    icon: Layers,
    title: 'Tu plataforma actual ya no da abasto con el crecimiento de tu empresa',
    description: 'Lo que funcionó al principio tiene un límite. Cuando tu negocio crece, tu tecnología debe crecer con él — no frenarlo.',
    solution: 'Arquitecturas flexibles que evolucionan con tu negocio',
    iconClass: 'pain-icon--cyan',
    colorClass: 'text-accent',
  }
]
</script>

<style scoped>
/* ── Layout ─────────────────────────────── */
.problems-section {
  position: relative;
  padding: 4rem 0 5rem;
  overflow: hidden;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Glow posicionado ────────────────────── */
.glow-bottom-left {
  width: 400px;
  height: 400px;
  bottom: -80px;
  left: -80px;
}

/* ── Título ──────────────────────────────── */
.problems-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  max-width: 700px;
  margin: 0 auto;
}

/* ── Pain card ───────────────────────────── */
.pain-card {
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.pain-card:hover {
  border-color: rgba(56, 189, 248, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

/* ── Ícono de pain (colores por variante) ── */
.pain-icon--cyan {
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.pain-icon--purple {
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.text-purple { color: var(--purple); }
</style>
