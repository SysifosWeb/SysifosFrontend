<template>
  <section class="bento-prop bg-section-surface" aria-labelledby="proposition-title">
    <div class="section-container">
      <div class="prop-bento">
        <!-- Left Anchor (5 cols, Deep Navy) -->
        <div class="prop-tile prop-tile--navy prop-span-5" v-reveal data-delay="0">
          <h2 id="proposition-title" class="prop-anchor__title">
            Ingeniería práctica que ordena tu negocio sin servidores caros.
          </h2>
          <p class="prop-anchor__desc">
            Combinamos diseño de conversión con backend Laravel, automatizaciones y respaldo en base de datos optimizados para correr de forma estable en cPanel.
          </p>
          <div class="mt-auto pt-6">
            <NuxtLink to="/contacto" class="btn prop-btn-sky py-3.5 px-6">
              Agendar diagnóstico sin costo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Asymmetric Bento Subgrid (7 cols) -->
        <div class="prop-right prop-span-7">
          <!-- Wide Top Module (Ice tint) -->
          <article class="prop-tile prop-tile--tint prop-right-wide" v-reveal data-delay="70">
            <div class="prop-tile__head">
              <Server class="w-5 h-5 text-accent" aria-hidden="true" />
              <span class="prop-stat">cPanel-ready</span>
            </div>
            <h3 class="prop-tile__title">Arquitectura frugal sin sobrecostos cloud</h3>
            <p class="prop-tile__desc">
              Nuxt, Laravel, MariaDB y colas persistentes diseñadas para operar rápido en hosting compartido estándar, sin cuentas mensuales en dólares.
            </p>
          </article>

          <!-- Bottom Left -->
          <article class="prop-tile prop-tile--surface" v-reveal data-delay="110">
            <div class="prop-tile__head">
              <Zap class="w-5 h-5 text-accent" aria-hidden="true" />
              <span class="prop-stat tabular-nums">2–4 sem</span>
            </div>
            <h3 class="prop-tile__title">Avances verificables</h3>
            <p class="prop-tile__desc m-0">
              Alcance cerrado y entregas visibles desde las primeras semanas.
            </p>
          </article>

          <!-- Bottom Right -->
          <article class="prop-tile prop-tile--surface" v-reveal data-delay="140">
            <div class="prop-tile__head">
              <Handshake class="w-5 h-5 text-accent" aria-hidden="true" />
              <span class="prop-stat">100% tuyo</span>
            </div>
            <h3 class="prop-tile__title">Trato directo en Coquimbo</h3>
            <p class="prop-tile__desc m-0">
              Código propio, datos bajo tu control y contacto directo con ingeniería.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Server, Zap, Handshake } from 'lucide-vue-next'
</script>

<style scoped>
.bento-prop {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.prop-bento {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.prop-right {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.prop-tile {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  border: 1px solid var(--border);
}

.prop-tile--surface { background: var(--bg-dark); }
.prop-tile--tint { background: var(--bg-elevated); }
.prop-tile--navy {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 48px rgba(16, 43, 70, 0.16);
}

.prop-anchor__title {
  font-family: var(--font-heading);
  font-size: clamp(1.85rem, 1.35rem + 1.8vw, 2.55rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #F5F9FD;
  margin: 0 0 1.15rem;
  text-wrap: balance;
}

.prop-anchor__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: #B8CFE5;
  margin: 0;
}

.prop-btn-sky {
  background: #9DCBF5;
  color: #102B46;
  border: 1px solid #9DCBF5;
  font-weight: 700;
}
.prop-btn-sky:hover {
  background: #F5F9FD;
  border-color: #F5F9FD;
  color: #102B46;
}

.prop-tile__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.prop-stat {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--accent);
}

.prop-tile__title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.prop-tile__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

@media (min-width: 640px) {
  .prop-right {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .prop-right-wide {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .prop-bento {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .prop-span-5 { grid-column: span 5; }
  .prop-span-7 { grid-column: span 7; }
}
</style>
