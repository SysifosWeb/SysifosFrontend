<template>
  <section id="proceso" class="process-section bg-section-surface" aria-labelledby="home-process-title">
    <div class="section-container">
      <div class="process-header">
        <h2 id="home-process-title" class="section-title max-w-[22ch]" v-reveal data-delay="0">
          Cuatro pasos claros desde el diagnóstico hasta producción.
        </h2>
        <p class="section-subtitle max-w-[50ch] m-0" v-reveal data-delay="80">
          Sin procesos opacos ni cambios interminables. Acordamos alcance, plazos y pruebas antes de publicar.
        </p>
      </div>

      <ol class="process-steps">
        <li v-for="(step, index) in steps" :key="step.num" v-reveal :data-delay="index * 70" class="process-step">
          <div class="process-step__head">
            <span class="process-step__num tabular-nums">{{ step.num }}</span>
            <component :is="step.icon" class="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <h3 class="process-step__title">{{ step.title }}</h3>
          <p class="process-step__desc">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { Search, PenTool, Terminal, CheckCircle2 } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Revisamos cómo recibes cotizaciones o consultas hoy, qué se está perdiendo y qué paquete genera retorno más rápido.',
    icon: Search
  },
  {
    num: '02',
    title: 'Estructura y diseño',
    description: 'Definimos arquitectura, textos clave y recorridos móvil/desktop. Apruebas el diseño antes de pasar a desarrollo.',
    icon: PenTool
  },
  {
    num: '03',
    title: 'Desarrollo y pruebas',
    description: 'Implementamos frontend, formularios con respaldo en base de datos, alertas y pruebas automatizadas en rama controlada.',
    icon: Terminal
  },
  {
    num: '04',
    title: 'Publicación y continuidad',
    description: 'Desplegamos en tu dominio con SSL, SEO técnico y medición activa. Opcionalmente mantenemos y mejoramos cada mes.',
    icon: CheckCircle2
  }
]
</script>

<style scoped>
.process-section {
  position: relative;
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.process-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.process-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.process-step {
  padding-top: 1.5rem;
  border-top: 2px solid var(--border);
  transition: border-color 0.25s ease;
}

.process-step:hover {
  border-top-color: var(--accent);
}

.process-step__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.process-step__num {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--accent);
}

.process-step__title {
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 1.08rem + 0.25vw, 1.3rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.process-step__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

@media (min-width: 640px) {
  .process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.25rem 2rem;
  }
}

@media (min-width: 1024px) {
  .process-header {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    align-items: end;
    gap: 3rem;
  }
  .process-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
