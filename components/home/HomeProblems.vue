<template>
  <section class="problems-section bg-section-dark" aria-labelledby="problems-title">
    <div class="section-container">
      <div class="problems-header">
        <h2 id="problems-title" class="section-title problems-title" v-reveal data-delay="0">
          Dónde se escapan clientes y horas todos los meses.
        </h2>
        <p class="section-subtitle max-w-[54ch]" v-reveal data-delay="80">
          Una web informativa suelta no resuelve el cuello de botella comercial. Estos son los tres puntos que auditamos antes de escribir código.
        </p>
      </div>

      <ol class="problems-ledger">
        <li v-for="(pain, index) in pains" :key="pain.id" v-reveal :data-delay="index * 80" class="ledger-row">
          <div class="ledger-problem">
            <h3 class="ledger-title">{{ pain.title }}</h3>
            <p class="card-text">{{ pain.description }}</p>
          </div>
          <div class="ledger-resolution">
            <CheckCircle2 class="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span class="ledger-label">Cómo lo resolvemos</span>
              <p class="ledger-solution">{{ pain.solution }}</p>
            </div>
          </div>
        </li>
      </ol>

      <div class="problems-footer" v-reveal data-delay="200">
        <p class="card-text m-0">¿Reconoces alguno de estos cuellos de botella en tu operación?</p>
        <NuxtLink to="/contacto?plan=captacion-web" class="cta-ghost">
          Revisar mi caso en 15 minutos
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2, ArrowRight } from 'lucide-vue-next'

const pains = [
  {
    id: 1,
    title: 'Cotizaciones y consultas que se pierden entre WhatsApp y el correo',
    description: 'Cuando un formulario falla en silencio o un mensaje queda enterrado en un chat personal, la oportunidad se enfría antes de responder.',
    solution: 'Cada consulta queda respaldada en base de datos, con alerta inmediata al equipo y trazabilidad por canal.'
  },
  {
    id: 2,
    title: 'Horas semanales copiando datos a mano entre formularios, Excel y PDF',
    description: 'Reescribir solicitudes técnicas, armar cotizaciones repetitivas o confirmar horas manualmente consume tiempo que debería estar en ventas o producción.',
    solution: 'Automatizamos flujos acotados sobre hosting cPanel para que tu operación corra sin servidores caros en dólares.'
  },
  {
    id: 3,
    title: 'Un sitio lento o desactualizado que no refleja el nivel real de tu empresa',
    description: 'En rubros B2B, maestranzas y clínicas privadas, un sitio roto en móvil o sin llamado a la acción claro hace que el cliente cotice con la competencia.',
    solution: 'Diseñamos recorridos claros orientados a captación, velocidad real en celular y SEO técnico verificado.'
  }
]
</script>

<style scoped>
.problems-section {
  position: relative;
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.problems-header {
  display: grid;
  gap: 1.25rem;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.problems-title {
  max-width: 24ch;
}

.problems-ledger {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border);
}

.ledger-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: clamp(1.75rem, 3vw, 2.5rem) 0;
  border-bottom: 1px solid var(--border);
}

.ledger-title {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 1.08rem + 0.35vw, 1.4rem);
  font-weight: 700;
  line-height: 1.28;
  color: var(--text-main);
  margin: 0 0 0.6rem;
  text-wrap: balance;
}

.ledger-problem .card-text {
  max-width: 60ch;
  margin: 0;
}

.ledger-resolution {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  border: 1px solid var(--border);
}

.ledger-label {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.ledger-solution {
  font-size: var(--fs-body);
  line-height: 1.5;
  color: var(--text-main);
  margin: 0;
}

.problems-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

@media (min-width: 960px) {
  .problems-header {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    align-items: end;
    gap: 3rem;
  }
  .ledger-row {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.95fr);
    align-items: center;
    gap: 3rem;
  }
}
</style>
