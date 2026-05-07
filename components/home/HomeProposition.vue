<template>
  <section class="proposition-section bg-section-dark">

    <!-- Glows decorativos -->
    <div class="section-glow-cyan glow-right-center"></div>
    <div class="section-glow-purple glow-bottom-left-sm"></div>

    <div class="section-container">

      <!-- Stats superiores -->
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
          <div class="stat-number">{{ stat.number }}</div>
          <p class="card-text">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Claim + Diferenciadores -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Izquierda: Claim -->
        <div>
          <p class="section-eyebrow section-eyebrow--purple mb-4">Nuestra propuesta de valor</p>
          <h2 class="section-title proposition-title mb-6">
            No construimos páginas web.<br/>
            <span class="text-accent">Construimos motores de crecimiento</span> digital para tu empresa.
          </h2>
          <p class="section-subtitle mb-10">
            Cada proyecto que entregamos está diseñado para generar resultados medibles:
            más visitas, más conversiones y más ventas.
          </p>
          <NuxtLink to="/contacto" class="cta-primary-btn">
            Agenda una asesoría gratuita
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Derecha: Diferenciadores -->
        <div class="flex flex-col gap-4">
          <div v-for="diff in differentiators" :key="diff.title"
               class="diff-card flex items-start gap-5">
            <div class="diff-icon">{{ diff.icon }}</div>
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
const stats = [
  { number: '+50', label: 'Proyectos entregados con éxito' },
  { number: '98%', label: 'Clientes que repiten o nos recomiendan' },
  { number: '3×',  label: 'Mejora promedio en conversiones' }
]

const differentiators = [
  {
    icon: '⚡',
    title: 'Ves resultados rápido',
    description: 'No esperamos meses para mostrarte avances. En 2–4 semanas ya tienes algo real funcionando.'
  },
  {
    icon: '🎯',
    title: 'Nos importa tu negocio, no solo el código',
    description: 'Medimos el éxito en ventas, leads y crecimiento. No en cuántas líneas de código escribimos.'
  },
  {
    icon: '🔒',
    title: 'Tu plataforma crece contigo',
    description: 'Construimos pensando en el futuro de tu empresa. Sin bloqueos técnicos ni reescrituras costosas.'
  },
  {
    icon: '🤝',
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
.glow-right-center {
  width: 400px;
  height: 400px;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
}

.glow-bottom-left-sm {
  width: 300px;
  height: 300px;
  bottom: 0;
  left: 0;
}

/* ── Stats ───────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 768px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
}

.stat-number {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

/* ── Título ──────────────────────────────── */
.proposition-title {
  font-size: clamp(1.75rem, 3.5vw, 3rem);
  line-height: 1.1;
}



/* ── Diferenciadores ─────────────────────── */
.diff-card {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  transition: transform 0.25s ease;
}

.diff-card:hover { transform: translateX(-4px); }

.diff-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
</style>
