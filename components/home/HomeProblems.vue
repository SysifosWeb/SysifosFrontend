<template>
  <section class="problems-section bg-section-dark" aria-labelledby="problems-title">
    <div class="section-container">
      <div class="problems-header">
        <h2 id="problems-title" class="section-title max-w-[24ch] mx-auto" v-reveal data-delay="0">
          Dónde se escapan clientes y horas todos los meses.
        </h2>
        <p class="section-subtitle max-w-[58ch] mx-auto mt-4 mb-0" v-reveal data-delay="70">
          Compara cómo opera una web informativa desconectada frente a un flujo conectado y medible construido por SysifosWeb.
        </p>
      </div>

      <div class="compare-grid">
        <!-- Left: Disconnected manual operation -->
        <div class="compare-panel compare-panel--before" v-reveal data-delay="80">
          <div class="compare-panel__head">
            <AlertTriangle class="w-5 h-5 text-subdued shrink-0" aria-hidden="true" />
            <h3>Operación desconectada</h3>
          </div>

          <ol class="compare-list">
            <li v-for="item in brokenFlow" :key="item.title" class="compare-item">
              <XCircle class="w-5 h-5 compare-icon-bad shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Right: SysifosWeb Blueprint Flow -->
        <div class="compare-panel compare-panel--blueprint" v-reveal data-delay="140">
          <div class="compare-panel__head compare-panel__head--dark">
            <CheckCircle2 class="w-5 h-5 text-[#9DCBF5] shrink-0" aria-hidden="true" />
            <h3>Flujo conectado SysifosWeb</h3>
          </div>

          <ol class="blueprint-flow">
            <li v-for="(step, idx) in connectedFlow" :key="step.title" class="blueprint-flow__item">
              <div class="blueprint-flow__node">
                <div class="blueprint-flow__icon">
                  <component :is="step.icon" class="w-4 h-4" aria-hidden="true" />
                </div>
                <div class="blueprint-flow__text">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.desc }}</p>
                </div>
              </div>
              <ArrowDown v-if="idx < connectedFlow.length - 1" class="blueprint-flow__arrow w-4 h-4" aria-hidden="true" />
            </li>
          </ol>
        </div>
      </div>

      <div class="problems-footer" v-reveal data-delay="180">
        <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary">
          Auditar mi flujo actual en 15 minutos
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink to="/servicios" class="btn btn-secondary">
          Ver paquetes y valores
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AlertTriangle, XCircle, CheckCircle2, ArrowDown, ArrowRight, Globe, Database, BellRing, Cpu } from 'lucide-vue-next'

const brokenFlow = [
  {
    title: 'Consultas perdidas entre WhatsApp y correo',
    desc: 'Cuando un formulario falla en silencio o un mensaje queda enterrado en un chat personal, la cotización se enfría.'
  },
  {
    title: 'Horas copiando datos a mano en Excel y PDF',
    desc: 'Transcribir planos, solicitudes técnicas o confirmar horas manualmente consume tiempo operativo cada semana.'
  },
  {
    title: 'Sitio lento o desactualizado sin medición real',
    desc: 'Sin velocidad móvil ni trazabilidad de clics y formularios, no sabes qué canal trae clientes ni cuántos se pierden.'
  }
]

const connectedFlow = [
  {
    icon: Globe,
    title: '1. Captura orientada a conversión',
    desc: 'Sitio rápido en móvil con formulario por servicio/plan y botón WhatsApp medido.'
  },
  {
    icon: Database,
    title: '2. Respaldo automático en base de datos',
    desc: 'Cada lead queda registrado en tu panel administrativo aunque falle el servidor de correo.'
  },
  {
    icon: BellRing,
    title: '3. Alerta inmediata y seguimiento',
    desc: 'Aviso directo al equipo comercial para responder cotizaciones y horas en menos de 24 h.'
  },
  {
    icon: Cpu,
    title: '4. Automatización frugal en cPanel',
    desc: 'Flujos de PDF, agenda o consolidación sin pagar infraestructura cloud cara en dólares.'
  }
]
</script>

<style scoped>
.problems-section {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.problems-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

.compare-panel {
  border-radius: 1.25rem;
  padding: clamp(1.75rem, 3.5vw, 2.5rem);
  display: flex;
  flex-direction: column;
}

.compare-panel--before {
  background: var(--bg-surface);
  border: 1px solid var(--border);
}

.compare-panel--blueprint {
  background-color: #102B46;
  background-image:
    linear-gradient(to right, rgba(157, 203, 245, 0.065) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(157, 203, 245, 0.065) 1px, transparent 1px);
  background-size: 32px 32px;
  border: 1px solid #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 48px rgba(16, 43, 70, 0.16);
}

.compare-panel__head {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.compare-panel__head--dark {
  border-bottom-color: rgba(184, 207, 229, 0.2);
}

.compare-panel__head h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

.compare-panel__head--dark h3 {
  color: #F5F9FD;
}

.compare-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  justify-content: center;
}

.compare-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.compare-icon-bad {
  color: #b91c1c;
}

.compare-item h4 {
  font-family: var(--font-heading);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.3rem;
}

.compare-item p {
  font-size: var(--fs-body);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.blueprint-flow {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.blueprint-flow__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
}

.blueprint-flow__node {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.95rem 1.1rem;
  border-radius: 0.75rem;
  background: rgba(22, 54, 83, 0.92);
  border: 1px solid rgba(157, 203, 245, 0.25);
}

.blueprint-flow__icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: rgba(157, 203, 245, 0.14);
  color: #9DCBF5;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.blueprint-flow__text h4 {
  font-family: var(--font-heading);
  font-size: 0.96875rem;
  font-weight: 700;
  color: #F5F9FD;
  margin: 0 0 0.2rem;
}

.blueprint-flow__text p {
  font-size: var(--fs-small);
  line-height: 1.45;
  color: #B8CFE5;
  margin: 0;
}

.blueprint-flow__arrow {
  color: #9DCBF5;
}

.problems-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 2.5rem;
}

@media (min-width: 960px) {
  .compare-grid {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .problems-footer {
    flex-direction: column;
  }
  .problems-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
