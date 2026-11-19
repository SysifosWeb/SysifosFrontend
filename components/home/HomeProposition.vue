<template>
  <section class="proposition-section bg-section-surface" aria-labelledby="proposition-title">
    <div class="section-container">
      <div class="proposition-grid">
        <div class="proposition-lead">
          <h2 id="proposition-title" class="section-title proposition-title" v-reveal data-delay="0">
            Ingeniería práctica que ordena tu negocio sin servidores caros.
          </h2>
          <p class="section-subtitle proposition-copy" v-reveal data-delay="80">
            Combinamos diseño de conversión con backend Laravel, automatizaciones y respaldo en base de datos optimizados para correr de forma estable y económica.
          </p>
          <div class="mt-8" v-reveal data-delay="140">
            <NuxtLink to="/contacto" class="btn btn-primary">
              Agendar diagnóstico sin costo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <dl class="proposition-list">
          <div v-for="(diff, index) in differentiators" :key="diff.title" v-reveal :data-delay="index * 70" class="proposition-item">
            <dt class="proposition-item__title">
              <component :is="diff.icon" class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <span>{{ diff.title }}</span>
            </dt>
            <dd class="proposition-item__desc">{{ diff.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Handshake, LockKeyhole, Server, Zap } from 'lucide-vue-next'

const differentiators = [
  {
    icon: Zap,
    title: 'Avances verificables en 2 a 4 semanas',
    description: 'Trabajamos con alcance cerrado y entregas visibles desde las primeras semanas, sin meses de espera antes de ver resultados.'
  },
  {
    icon: Server,
    title: 'Arquitectura frugal lista para cPanel',
    description: 'Diseñamos sistemas y automatizaciones que operan en hosting compartido estándar, evitando cuentas cloud infladas cada mes.'
  },
  {
    icon: LockKeyhole,
    title: 'Código propio y datos bajo tu control',
    description: 'Sin amarras ni licencias sorpresivas: tu sitio, formularios y base de datos crecen al ritmo real de tu empresa.'
  },
  {
    icon: Handshake,
    title: 'Trato directo con el equipo técnico',
    description: 'Conversas directamente con quienes diseñan y programan tu solución en Coquimbo y de forma remota para todo Chile.'
  }
]
</script>

<style scoped>
.proposition-section {
  position: relative;
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.proposition-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;
}

.proposition-title {
  max-width: 20ch;
  margin-bottom: 1.25rem;
}

.proposition-copy {
  max-width: 48ch;
  font-size: var(--fs-lead);
  line-height: 1.5;
}

.proposition-list {
  margin: 0;
  border-top: 1px solid var(--border);
}

.proposition-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
}

.proposition-item__title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-size: clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem);
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.45rem;
}

.proposition-item__desc {
  margin: 0;
  padding-left: 2rem;
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 56ch;
}

@media (min-width: 1024px) {
  .proposition-grid {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  }
  .proposition-lead {
    position: sticky;
    top: 7rem;
  }
}
</style>
