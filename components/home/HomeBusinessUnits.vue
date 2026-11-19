<template>
  <section id="servicios" class="services-section bg-section-dark" aria-labelledby="home-services-title">
    <div class="section-container">
      <div class="services-header">
        <div>
          <h2 id="home-services-title" class="section-title max-w-[22ch]" v-reveal data-delay="0">
            Soluciones diseñadas para captar y ahorrar trabajo.
          </h2>
        </div>
        <div class="services-header__aside" v-reveal data-delay="80">
          <p class="section-subtitle m-0">
            Cada paquete tiene alcance acotado, valores transparentes en CLP netos y respaldo real en base de datos.
          </p>
          <NuxtLink to="/servicios" class="services-all-link">
            Ver catálogo completo y continuidad mensual
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <div class="services-grid">
        <article v-for="(service, index) in services" :key="service.slug" v-reveal :data-delay="index * 80"
          class="service-panel" :class="{ 'service-panel--featured': service.featured }">
          <div class="service-panel__top">
            <component :is="service.icon" class="w-6 h-6 service-panel__icon" aria-hidden="true" />
            <span class="service-panel__price tabular-nums">{{ service.price }}</span>
          </div>

          <h3 class="service-panel__title">{{ service.title }}</h3>
          <p class="service-panel__desc">{{ service.description }}</p>

          <ul class="service-panel__list">
            <li v-for="feat in service.features" :key="feat">
              <CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <div class="service-panel__footer">
            <NuxtLink :to="`/contacto?plan=${service.slug}`" class="service-panel__cta">
              {{ service.cta }}
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, CheckCircle2, TrendingUp, Workflow, Zap } from 'lucide-vue-next'

const services = [
  {
    slug: 'captacion-web',
    featured: true,
    icon: TrendingUp,
    price: 'Desde $350.000 + IVA',
    title: 'Sistema de Captación Web',
    description: 'Sitio enfocado en conversión con respaldo automático de cada contacto en base de datos para no perder leads aunque falle el correo.',
    features: [
      'Panel de registros y alerta inmediata al equipo',
      'Medición real de formularios y clics a WhatsApp',
      'SEO técnico base y carga veloz en móvil'
    ],
    cta: 'Solicitar Captación Web'
  },
  {
    slug: 'web-flujo-comercial',
    featured: false,
    icon: Workflow,
    price: '$590.000 – $650.000 + IVA',
    title: 'Web + Flujo Comercial o Agenda',
    description: 'Pensado para maestranzas/B2B que reciben planos y cotizaciones técnicas, o clínicas que ordenan solicitudes de hora.',
    features: [
      'Cotizador técnico con adjuntos o solicitud de hora',
      'Seguimiento de estados en panel administrativo',
      'Pruebas end-to-end antes de salir a producción'
    ],
    cta: 'Cotizar Web + Flujo'
  },
  {
    slug: 'automatizacion-flujo',
    featured: false,
    icon: Zap,
    price: 'Desde $450.000 + IVA',
    title: 'Automatización e Integraciones',
    description: 'Conectamos formularios, WhatsApp, correos y planillas para eliminar tareas manuales sin pagar servidores cloud caros.',
    features: [
      'Flujo acotado de alto impacto (PDF, alertas o consolidación)',
      'Compatible con hosting cPanel y colas persistentes',
      'Escalable a e-commerce, SII o software a medida'
    ],
    cta: 'Evaluar Automatización'
  }
]
</script>

<style scoped>
.services-section {
  position: relative;
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.services-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
}

.services-header__aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-width: 48ch;
}

.services-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--accent);
}

.services-all-link:hover {
  text-decoration: underline;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.service-panel {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-panel--featured {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
}

.service-panel--featured .service-panel__title {
  color: #F5F9FD;
}

.service-panel--featured .service-panel__desc,
.service-panel--featured .service-panel__list li {
  color: #B8CFE5;
}

.service-panel--featured .service-panel__icon,
.service-panel--featured .service-panel__price,
.service-panel--featured .service-panel__check,
.service-panel--featured .service-panel__cta {
  color: #9DCBF5;
}

.service-panel--featured .service-panel__footer {
  border-top-color: rgba(184, 207, 229, 0.2);
}

.service-panel__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.service-panel__icon {
  color: var(--accent);
}

.service-panel__price {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--accent);
}

.service-panel__title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 1.15rem + 0.35vw, 1.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
  margin: 0 0 0.75rem;
}

.service-panel__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
}

.service-panel__list {
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex: 1;
}

.service-panel__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

.service-panel__check {
  color: var(--accent);
  margin-top: 0.15rem;
}

.service-panel__footer {
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
}

.service-panel__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--accent);
}

.service-panel__cta:hover {
  text-decoration: underline;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .service-panel:hover {
    transform: translateY(-3px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 960px) {
  .services-header {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    align-items: end;
    gap: 3rem;
  }
  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
