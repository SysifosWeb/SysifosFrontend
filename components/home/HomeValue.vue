<template>
  <section class="section bg-section-dark" style="padding: 4rem 0 5rem;">
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">

      <!-- Header centrado -->
      <div class="section-header text-center mb-16">
        <p class="section-eyebrow section-eyebrow--purple mb-4">Así trabajamos juntos</p>
        <h2 class="section-title text-3xl md:text-4xl">
          Empezar es más fácil de lo que crees.
        </h2>
      </div>

      <div class="relative">
        <!-- Línea conectora (Desktop) -->
        <div class="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px connector-line"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div v-for="(step, index) in steps" :key="index" class="relative group step-item">
            <div class="flex flex-col items-center text-center">

              <!-- Ícono -->
              <div class="step-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mb-10 relative z-10 transition-all duration-300">
                <component :is="step.icon" class="w-8 h-8 step-icon transition-transform group-hover:scale-110"/>
                <div class="step-number absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold">
                  0{{ index + 1 }}
                </div>
              </div>

              <h3 class="card-title mb-3 transition-colors group-hover:step-title-hover">
                {{ step.title }}
              </h3>

              <p class="card-text max-w-[200px]">
                {{ step.description }}
              </p>
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

/* Línea conectora */
.connector-line {
  background: linear-gradient(to right, transparent, var(--border-accent), transparent);
}

/* Ícono wrapper */
.step-icon-wrap {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.group:hover .step-icon-wrap {
  background: rgba(56, 189, 248, 0.08);
  border-color: rgba(56, 189, 248, 0.2);
}

/* Ícono */
.step-icon {
  color: var(--accent);
}

/* Número de paso */
.step-number {
  background-color: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--accent);
  font-family: 'Inter', sans-serif;
}

/* Hover en el título de la card */
.group:hover .card-title {
  color: var(--accent);
}
</style>
