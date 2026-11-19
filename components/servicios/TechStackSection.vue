<script setup>
const frontendSpecs = [
  {
    name: 'Nuxt y Vue',
    role: 'Sitios de conversión y SEO técnico',
    detail: 'Renderizado rápido en servidor, URLs canónicas y carga fluida en conexiones móviles.'
  },
  {
    name: 'React y React Native / Expo',
    role: 'Interfaces interactivas y apps móviles',
    detail: 'Experiencias fluidas y aplicaciones con persistencia local cuando la operación exige trabajo en terreno.'
  },
  {
    name: 'Tailwind CSS y tokens propios',
    role: 'Diseño consistente y accesible',
    detail: 'Sistema visual adaptable a modo claro y oscuro sin peso innecesario de plantillas genéricas.'
  }
]

const backendSpecs = [
  {
    name: 'Laravel (PHP 8.3)',
    role: 'APIs, formularios y automatización',
    detail: 'Validaciones estrictas, colas compatibles con cPanel y mantenimiento predecible.'
  },
  {
    name: 'MariaDB / PostgreSQL',
    role: 'Respaldo y trazabilidad de datos',
    detail: 'Cada consulta, cotización y evento queda guardado con respaldos periódicos y control de acceso.'
  },
  {
    name: 'TypeScript y pruebas automatizadas',
    role: 'Estabilidad antes de publicar',
    detail: 'Contratos claros, pruebas de regresión y despliegues con rollback inmediato.'
  }
]
</script>

<template>
  <section class="tech-section bg-section-dark" aria-labelledby="tech-stack-title">
    <div class="section-container">
      <div class="tech-head">
        <h2 id="tech-stack-title" class="section-title max-w-[22ch] m-0" v-reveal data-delay="0">
          Tecnología elegida por estabilidad y costo real.
        </h2>
        <p class="section-subtitle max-w-[52ch] m-0" v-reveal data-delay="80">
          No usamos herramientas de moda que encarecen tu operación: elegimos un stack probado que corre rápido y se mantiene sin fricciones.
        </p>
      </div>

      <div class="tech-columns">
        <div>
          <h3 class="tech-col-title">Experiencia y Frontend</h3>
          <dl class="tech-ledger">
            <div v-for="spec in frontendSpecs" :key="spec.name" class="tech-row">
              <dt>
                <span class="tech-row__role">{{ spec.role }}</span>
                <span class="tech-row__name">{{ spec.name }}</span>
              </dt>
              <dd>{{ spec.detail }}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 class="tech-col-title">Backend, datos y continuidad</h3>
          <dl class="tech-ledger">
            <div v-for="spec in backendSpecs" :key="spec.name" class="tech-row">
              <dt>
                <span class="tech-row__role">{{ spec.role }}</span>
                <span class="tech-row__name">{{ spec.name }}</span>
              </dt>
              <dd>{{ spec.detail }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding: clamp(4.5rem, 8vw, 6.5rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin-inline: auto;
}

.tech-head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.tech-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 5vw, 4rem);
}

.tech-col-title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 1.15rem + 0.3vw, 1.45rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 1.25rem;
}

.tech-ledger {
  margin: 0;
  border-top: 1px solid var(--border);
}

.tech-row {
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--border);
}

.tech-row dt {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
  margin-bottom: 0.45rem;
}

.tech-row__role {
  font-family: var(--font-heading);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-main);
}

.tech-row__name {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--accent);
}

.tech-row dd {
  margin: 0;
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
}

@media (min-width: 960px) {
  .tech-head,
  .tech-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .tech-head {
    align-items: end;
    gap: 3rem;
  }
}
</style>
