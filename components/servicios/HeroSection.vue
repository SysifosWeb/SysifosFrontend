<script setup>
import { ArrowRight, Globe, Database, BellRing, Cpu } from 'lucide-vue-next'

const flowNodes = [
  { icon: Globe, title: 'Web / Formulario / WhatsApp', sub: 'Captura con plan y origen' },
  { icon: Database, title: 'Respaldo en BD Laravel', sub: 'Cero leads perdidos' },
  { icon: BellRing, title: 'Alerta + Panel Admin', sub: 'Aviso inmediato al equipo' },
  { icon: Cpu, title: 'Automatización cPanel', sub: 'PDF, seguimiento y colas' }
]
</script>

<template>
  <section class="blueprint-hero-wrap bg-section-dark">
    <div class="site-container">
      <div class="blueprint-hero">
        <div class="blueprint-hero__content">
          <h1 class="blueprint-hero__title" v-reveal data-delay="0">
            Captación web, automatización <span>y&nbsp;software práctico.</span>
          </h1>
          <p class="blueprint-hero__lead" v-reveal data-delay="70">
            Infraestructura digital que ordena tus cotizaciones, evita que se pierdan clientes y automatiza trabajo manual sin costos inflados de servidores.
          </p>

          <div class="blueprint-hero__actions" v-reveal data-delay="120">
            <NuxtLink to="/contacto?plan=captacion-web" class="btn blueprint-hero__btn-primary">
              Solicitar diagnóstico gratuito
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
            <a href="#paquetes" class="btn blueprint-hero__btn-secondary">
              Ver paquetes y valores
            </a>
          </div>
        </div>

        <!-- Blueprint Flow Diagram -->
        <div class="flow-schematic" aria-label="Flujo de arquitectura SysifosWeb" v-reveal data-delay="160">
          <div v-for="(node, idx) in flowNodes" :key="node.title" class="flow-step">
            <div class="flow-node">
              <div class="flow-node__icon">
                <component :is="node.icon" class="w-4 h-4" aria-hidden="true" />
              </div>
              <div class="flow-node__copy">
                <span class="flow-node__title">{{ node.title }}</span>
                <span class="flow-node__sub">{{ node.sub }}</span>
              </div>
            </div>
            <ArrowRight v-if="idx < flowNodes.length - 1" class="flow-arrow w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        <dl class="blueprint-spec-strip">
          <div class="blueprint-spec">
            <dt>Valores transparentes</dt>
            <dd class="tabular-nums">Desde $200.000 CLP netos + IVA</dd>
          </div>
          <div class="blueprint-spec">
            <dt>Entregas acotadas</dt>
            <dd>Avances visibles en 2 a 4 semanas</dd>
          </div>
          <div class="blueprint-spec">
            <dt>Infraestructura frugal</dt>
            <dd>Hosting cPanel sin cuentas cloud infladas</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flow-schematic {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: clamp(2rem, 4vw, 3rem);
  padding: 1.25rem;
  border-radius: 1rem;
  background: rgba(12, 27, 43, 0.55);
  border: 1px solid rgba(157, 203, 245, 0.2);
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.flow-node {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  background: #163653;
  border: 1px solid rgba(157, 203, 245, 0.25);
}

.flow-node__icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background: rgba(157, 203, 245, 0.14);
  color: #9DCBF5;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.flow-node__copy {
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 0;
}

.flow-node__title {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  color: #F5F9FD;
  line-height: 1.25;
}

.flow-node__sub {
  font-size: 0.8125rem;
  color: #B8CFE5;
  line-height: 1.3;
}

.flow-arrow {
  color: #9DCBF5;
  transform: rotate(90deg);
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .flow-schematic {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
    padding: 1.25rem 1.5rem;
  }
  .flow-step {
    flex-direction: row;
    gap: 0.5rem;
  }
  .flow-arrow {
    transform: none;
  }
}
</style>
