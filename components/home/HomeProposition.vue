<template>
  <section class="proposition-section bg-section-surface" aria-labelledby="proposition-title">
    <div class="section-container">
      <div class="proposition-grid">
        <!-- Left: Value claim + architectural stack blueprint -->
        <div class="proposition-lead">
          <h2 id="proposition-title" class="section-title proposition-title" v-reveal data-delay="0">
            Ingeniería práctica que ordena tu negocio sin servidores caros.
          </h2>
          <p class="section-subtitle proposition-copy" v-reveal data-delay="70">
            Combinamos diseño de conversión con backend Laravel, automatizaciones y respaldo en base de datos optimizados para correr de forma estable en cPanel.
          </p>

          <div class="mt-7 flex flex-wrap gap-3" v-reveal data-delay="120">
            <NuxtLink to="/contacto" class="btn btn-primary">
              Agendar diagnóstico sin costo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: 2x2 Architectural Capability Modules -->
        <div class="modules-grid">
          <article v-for="(diff, index) in differentiators" :key="diff.title" v-reveal :data-delay="index * 70" class="module-tile">
            <div class="module-tile__head">
              <div class="module-tile__icon">
                <component :is="diff.icon" class="w-5 h-5" aria-hidden="true" />
              </div>
              <span class="module-tile__tag">{{ diff.tag }}</span>
            </div>
            <h3 class="module-tile__title">{{ diff.title }}</h3>
            <p class="module-tile__desc">{{ diff.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Handshake, LockKeyhole, Server, Zap } from 'lucide-vue-next'

const differentiators = [
  {
    icon: Zap,
    tag: '2–4 semanas',
    title: 'Avances verificables rápidos',
    description: 'Alcance acotado y entregas visibles desde las primeras semanas, sin proyectos eternos ni sorpresas.'
  },
  {
    icon: Server,
    tag: 'cPanel-ready',
    title: 'Infraestructura frugal',
    description: 'Sistemas y automatizaciones diseñados para hosting estándar sin cuentas cloud infladas cada mes.'
  },
  {
    icon: LockKeyhole,
    tag: 'Sin amarras',
    title: 'Código y datos bajo tu control',
    description: 'Tu sitio, formularios y base de datos son propiedad de tu empresa y escalan cuando los necesites.'
  },
  {
    icon: Handshake,
    tag: 'Coquimbo · Chile',
    title: 'Trato directo con ingeniería',
    description: 'Conversas directamente con quienes diseñan y programan tu proyecto, sin ejecutivos intermediarios.'
  }
]
</script>

<style scoped>
.proposition-section {
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
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: center;
}

.proposition-title {
  max-width: 19ch;
  margin-bottom: 1.15rem;
}

.proposition-copy {
  max-width: 46ch;
  font-size: var(--fs-lead);
  line-height: 1.55;
  margin: 0;
}

.modules-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.module-tile {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-dark);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.module-tile__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.module-tile__icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  color: var(--accent);
  display: grid;
  place-items: center;
}

.module-tile__tag {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--accent);
}

.module-tile__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.45rem;
}

.module-tile__desc {
  font-size: var(--fs-small);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .module-tile:hover {
    transform: translateY(-2px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 640px) {
  .modules-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .proposition-grid {
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  }
}
</style>
