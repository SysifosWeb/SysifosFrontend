<template>
  <section class="proposition-section bg-section-dark">

    <div class="section-container">

      <!-- Stats superiores -->
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="stat.label" class="text-center md:text-left" v-reveal :data-delay="index * 150">
          <div class="stat-number">{{ stat.number }}</div>
          <p class="card-text">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Claim + Diferenciadores -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Izquierda: Claim -->
        <div>
          <p class="section-eyebrow section-eyebrow--purple mb-4" v-reveal data-delay="0">Nuestra propuesta de valor</p>
          <h2 class="section-title proposition-title mb-6" v-reveal data-delay="100">
            Construimos motores de crecimiento digital.
          </h2>
          <p class="section-subtitle mb-10" v-reveal data-delay="200">
            No construimos páginas web. Cada proyecto que entregamos está diseñado para generar resultados medibles:
            más visitas, más conversiones y más ventas.
          </p>
          <NuxtLink to="/contacto" class="cta-primary-btn" v-reveal data-delay="300">
            Agenda una asesoría gratuita
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Derecha: Diferenciadores -->
        <div class="flex flex-col gap-4">
          <div v-for="(diff, index) in differentiators" :key="diff.title"
               v-reveal :data-delay="index * 150"
               class="diff-card flex items-start gap-5">
            <div class="diff-icon"><component :is="diff.icon" class="w-5 h-5" aria-hidden="true" /></div>
            <div>
              <h3 class="card-title mb-1">{{ diff.title }}</h3>
              <p class="card-text">{{ diff.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Handshake, LockKeyhole, Target, Zap } from 'lucide-vue-next'

const stats = [
  { number: '+50', label: 'Proyectos entregados con éxito' },
  { number: '98%', label: 'Clientes que repiten o nos recomiendan' },
  { number: '3×',  label: 'Mejora promedio en conversiones' }
]

const differentiators = [
  {
    icon: Zap,
    title: 'Ves resultados rápido',
    description: 'No esperamos meses para mostrarte avances. En 2–4 semanas ya tienes algo real funcionando.'
  },
  {
    icon: Target,
    title: 'Nos importa tu negocio, no solo el código',
    description: 'Medimos el éxito en ventas, leads y crecimiento. No en cuántas líneas de código escribimos.'
  },
  {
    icon: LockKeyhole,
    title: 'Tu plataforma crece contigo',
    description: 'Construimos pensando en el futuro de tu empresa. Sin bloqueos técnicos ni reescrituras costosas.'
  },
  {
    icon: Handshake,
    title: 'Hablas con quien construye',
    description: 'Sin intermediarios. Tienes acceso directo al equipo que trabaja en tu proyecto, siempre.'
  }
]
</script>

<style scoped>
/* ── Layout ─────────────────────────────── */
.proposition-section {
  position: relative;
  padding: 4rem 0 5rem;
  overflow: hidden;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1380px;
  margin: 0 auto;
}

/* ── Glows posicionados ──────────────────── */
/* ── Stats ───────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
}

.stat-number {
  font-family: 'Inter', sans-serif;
  font-size: var(--fs-hero);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

/* ── Título ──────────────────────────────── */
.proposition-title {
  max-width: 22ch;
}



/* ── Diferenciadores ─────────────────────── */
.diff-card {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, background-color 0.25s ease;
}

.diff-card:hover { border-color: var(--border-accent); background: var(--bg-elevated); }

.diff-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}
</style>
