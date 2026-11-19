<template>
  <section class="bold-prop bg-section-surface" aria-labelledby="proposition-title">
    <div class="section-container">
      <div class="bold-prop__layout">
        <div class="bold-prop__lead">
          <h2 id="proposition-title" class="bold-prop__title" v-reveal data-delay="0">
            Ingeniería práctica que ordena tu negocio sin servidores caros.
          </h2>
          <p class="bold-prop__copy" v-reveal data-delay="70">
            Combinamos diseño de conversión con backend Laravel, automatizaciones y respaldo en base de datos optimizados para operar rápido y a bajo costo en cPanel.
          </p>
          <div class="mt-8" v-reveal data-delay="120">
            <NuxtLink to="/contacto" class="btn btn-primary px-8 py-4">
              Agendar diagnóstico sin costo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <div class="bold-prop__blocks">
          <article v-for="(item, index) in differentiators" :key="item.title" v-reveal :data-delay="index * 70" class="color-block">
            <p class="color-block__stat tabular-nums">{{ item.stat }}</p>
            <h3 class="color-block__title">{{ item.title }}</h3>
            <p class="color-block__desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const differentiators = [
  {
    stat: '2–4 sem',
    title: 'Avances visibles desde el inicio',
    description: 'Trabajamos con alcance cerrado y entregas probadas en pocas semanas, sin meses de espera.'
  },
  {
    stat: 'cPanel',
    title: 'Infraestructura frugal',
    description: 'Sistemas y automatizaciones diseñados para hosting estándar sin cuentas cloud infladas cada mes.'
  },
  {
    stat: '100%',
    title: 'Código y datos tuyos',
    description: 'Tu sitio, formularios y base de datos crecen contigo sin licencias ni bloqueos ocultos.'
  },
  {
    stat: '< 24 h',
    title: 'Trato directo con ingeniería',
    description: 'Conversas directamente con quienes diseñan y programan desde Coquimbo para todo Chile.'
  }
]
</script>

<style scoped>
.bold-prop {
  padding: clamp(5rem, 9vw, 8rem) 0;
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.bold-prop__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: center;
}

.bold-prop__title {
  font-family: var(--font-heading);
  font-size: clamp(2.15rem, 1.35rem + 2.8vw, 3.4rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-width: 16ch;
  margin: 0 0 1.25rem;
  text-wrap: balance;
}

.bold-prop__copy {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 46ch;
  margin: 0;
}

.bold-prop__blocks {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.color-block {
  padding: clamp(1.5rem, 3vw, 2.15rem);
  border-radius: 1.25rem;
  background: var(--bg-elevated);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.color-block__stat {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 1.45rem + 1vw, 2.35rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--accent);
  margin: 0 0 0.75rem;
}

.color-block__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.4rem;
}

.color-block__desc {
  font-size: var(--fs-small);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .color-block:hover {
    transform: translateY(-3px);
  }
}

@media (min-width: 640px) {
  .bold-prop__blocks {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .bold-prop__layout {
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  }
}
</style>
