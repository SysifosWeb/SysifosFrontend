<template>
  <section id="proceso" class="section bg-section-dark">
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">

      <!-- Header centrado -->
      <div class="section-header text-center mb-16">
        <p class="section-eyebrow section-eyebrow--purple mb-4" v-reveal data-delay="0">Así trabajamos juntos</p>
        <h2 class="section-title" v-reveal data-delay="100">
          Empezar es más fácil de lo que crees.
        </h2>
      </div>

      <div class="relative">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div v-for="(step, index) in steps" :key="index" class="relative group step-item" v-reveal :data-delay="index * 150">
            <div class="step-content relative w-full max-w-[200px] mx-auto flex flex-col items-start text-left">

              <!-- Ícono -->
              <div class="step-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-300">
                <component :is="step.icon" class="w-8 h-8 step-icon transition-transform group-hover:scale-110"/>
              </div>

              <div class="step-copy w-full text-left">
                <h3 class="card-title mb-3 transition-colors group-hover:step-title-hover">
                  {{ step.title }}
                </h3>
                <p class="card-text">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, PenTool, Terminal, CheckCircle } from 'lucide-vue-next'

const steps = [
  {
    title: 'Conversamos',
    description: 'Nos cuentas sobre tu negocio, tus objetivos y lo que necesitas. Sin formularios complicados.',
    icon: Search
  },
  {
    title: 'Diseñamos',
    description: 'Creamos la propuesta visual y la estructura de tu solución. Tú la apruebas antes de construir.',
    icon: PenTool
  },
  {
    title: 'Construimos',
    description: 'Desarrollamos con tecnología moderna y te mantenemos informado en cada etapa.',
    icon: Terminal
  },
  {
    title: 'Lanzamos',
    description: 'Tu plataforma sale al mundo. Y seguimos contigo después del lanzamiento.',
    icon: CheckCircle
  }
]
</script>

<style scoped>
/* Sección */
.section {
  padding: 6rem 0 8rem;
  position: relative;
  overflow: hidden;
}

/* Un mismo eje izquierdo para icono y texto; cada grupo se centra en su columna. */
@media (min-width: 1024px) {
  .step-item:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 40px;
    left: calc(50% - 60px);
    width: calc(100% + 2rem);
    height: 1px;
    background: var(--border);
  }
}

/* Ícono wrapper */
.step-icon-wrap {
  background: rgba(var(--neutral-rgb), 0.04);
  border: 1px solid rgba(var(--neutral-rgb), 0.08);
}
.group:hover .step-icon-wrap {
  background: rgba(var(--decoration-rgb), 0.08);
  border-color: rgba(var(--decoration-rgb), 0.2);
}

/* Ícono */
.step-icon {
  color: var(--accent);
}

/* Hover en el título de la card */
.group:hover .card-title {
  color: var(--accent);
}
</style>
