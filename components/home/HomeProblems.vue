<template>
  <section class="bold-problems impulso-closing bg-section-dark" aria-labelledby="problems-title">
    <div class="section-container">
      <div class="bold-problems__head">
        <h2 id="problems-title" class="bold-section-title" v-reveal data-delay="0">
          Dónde se escapan clientes y horas todos los meses.
        </h2>
        <p class="bold-section-lead" v-reveal data-delay="70">
          Una web informativa suelta no resuelve el cuello de botella comercial. Estos son los tres puntos que corregimos desde el primer día.
        </p>
      </div>

      <div class="bold-problems__grid">
        <article v-for="(pain, index) in pains" :key="pain.num" v-reveal :data-delay="index * 80" class="bold-pain-block">
          <span class="bold-pain-block__num tabular-nums">{{ pain.num }}</span>
          <h3 class="bold-pain-block__title">{{ pain.title }}</h3>
          <p class="bold-pain-block__desc">{{ pain.description }}</p>
          <p class="bold-pain-block__fix">
            <CheckCircle2 class="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{{ pain.solution }}</span>
          </p>
        </article>
      </div>

      <div class="bold-problems__cta" v-reveal data-delay="180">
        <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary px-8 py-4">
          Revisar mi caso en 15 minutos
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink to="/servicios" class="bold-problems__link">
          Ver paquetes y valores
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2, ArrowRight } from 'lucide-vue-next'

const pains = [
  {
    num: '01',
    title: 'Cotizaciones perdidas entre WhatsApp y correo',
    description: 'Cuando un formulario falla en silencio o un mensaje queda enterrado en un chat personal, la venta se enfría antes de responder.',
    solution: 'Respaldo automático en base de datos + alerta inmediata al equipo.'
  },
  {
    num: '02',
    title: 'Horas copiando datos entre Excel, formularios y PDF',
    description: 'Transcribir planos, solicitudes técnicas o confirmar horas a mano consume tiempo que debería estar en producción o ventas.',
    solution: 'Flujos automatizados sobre hosting cPanel sin servidores caros.'
  },
  {
    num: '03',
    title: 'Un sitio lento que no refleja el nivel de tu empresa',
    description: 'En maestranzas, B2B y clínicas privadas, un sitio desactualizado en celular hace que el cliente cotice con otro proveedor.',
    solution: 'Diseño rápido en celular, SEO técnico y registro real de cada consulta.'
  }
]
</script>

<style scoped>
.bold-problems {
  padding: clamp(5rem, 9vw, 8rem) 0;
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.bold-problems__head {
  text-align: center;
  max-width: 46rem;
  margin: 0 auto clamp(3rem, 6vw, 4.5rem);
}

.bold-section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.15rem, 1.35rem + 2.8vw, 3.5rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  margin: 0 0 1.25rem;
  text-wrap: balance;
}

.bold-section-lead {
  font-size: var(--fs-lead);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.bold-problems__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.bold-pain-block {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3.5vw, 2.5rem);
  border-radius: 1.25rem;
  background: var(--bg-surface);
}

.bold-pain-block__num {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 1.6rem + 1.2vw, 2.75rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.bold-pain-block__title {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 1.1rem + 0.3vw, 1.375rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--text-main);
  margin: 0 0 0.75rem;
}

.bold-pain-block__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
  flex: 1;
}

.bold-pain-block__fix {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  padding-top: 1.15rem;
  border-top: 1px solid rgba(184, 207, 229, 0.2);
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  line-height: 1.45;
  color: var(--accent);
  margin: 0;
}

.bold-problems__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: clamp(2.5rem, 5vw, 3.75rem);
}

.bold-problems__link {
  font-family: var(--font-heading);
  font-size: var(--fs-body);
  font-weight: 700;
  color: var(--accent);
}

.bold-problems__link:hover {
  text-decoration: underline;
}

@media (min-width: 960px) {
  .bold-problems__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .bold-problems__cta {
    flex-direction: column;
  }
  .bold-problems__cta .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
