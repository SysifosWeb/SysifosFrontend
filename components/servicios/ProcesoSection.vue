<script setup>
import imgAnalysis from '@/assets/img/Estrategia-optimized.webp'
import imgDesign from '@/assets/img/design-optimized.webp'
import imgDev from '@/assets/img/arquitectura-optimized.webp'
import imgDeploy from '@/assets/img/despliege-optimized.webp'

const steps = [
  {
    id: '01',
    title: 'Diagnóstico y alcance cerrado',
    description: 'Auditamos cómo captas consultas hoy, qué se pierde entre WhatsApp y correo, y acordamos un alcance exacto antes de escribir una línea de código.',
    image: imgAnalysis,
    align: 'right'
  },
  {
    id: '02',
    title: 'Diseño orientado a conversión',
    description: 'Estructuramos mensajes claros en español de Chile, jerarquía visual limpia y recorridos pensados para celular y escritorio.',
    image: imgDesign,
    align: 'left'
  },
  {
    id: '03',
    title: 'Ingeniería frugal y mantenible',
    description: 'Construimos con Nuxt, Vue y Laravel optimizados para correr rápido y estable sobre hosting compartido cPanel, sin inflar tus costos mensuales.',
    image: imgDev,
    align: 'right'
  },
  {
    id: '04',
    title: 'Publicación con QA y respaldo',
    description: 'Validamos formularios, alertas de correo, SEO técnico y backups antes de lanzar. Si contratas continuidad, monitoreamos y mejoramos cada mes.',
    image: imgDeploy,
    align: 'left'
  }
]
</script>

<template>
  <section class="services-process bg-section-surface" aria-labelledby="services-process-title">
    <div class="section-container">
      <div class="process-head">
        <h2 id="services-process-title" class="section-title max-w-[22ch] m-0" v-reveal data-delay="0">
          Cómo llevamos un proyecto a producción sin sorpresas.
        </h2>
        <p class="section-subtitle max-w-[50ch] m-0" v-reveal data-delay="80">
          Cada entrega queda versionada en Git, probada en móvil y escritorio, y verificada antes de publicarse en tu dominio.
        </p>
      </div>

      <div class="process-list">
        <div v-for="step in steps" :key="step.id" class="process-row" v-reveal data-delay="100">
          <div class="process-copy" :class="{ 'lg:order-2': step.align === 'left' }">
            <span class="process-num tabular-nums">{{ step.id }}</span>
            <h3 class="process-step-title">{{ step.title }}</h3>
            <p class="process-step-desc">{{ step.description }}</p>
          </div>

          <div class="process-visual" :class="{ 'lg:order-1': step.align === 'left' }">
            <div class="process-frame">
              <img :src="step.image" :alt="step.title" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-process {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin-inline: auto;
}

.process-head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.process-list {
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 7vw, 6rem);
}

.process-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.75rem, 4vw, 4rem);
  align-items: center;
}

.process-num {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.process-step-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 1.35rem + 0.6vw, 2rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-main);
  margin: 0 0 1rem;
}

.process-step-desc {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 48ch;
  margin: 0;
}

.process-frame {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-dark);
  aspect-ratio: 4 / 3;
}

.process-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 1024px) {
  .process-head,
  .process-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .process-head {
    align-items: end;
    gap: 3rem;
  }
}
</style>
