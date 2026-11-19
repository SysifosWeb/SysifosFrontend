<script setup>
import { ArrowRight, CheckCircle2, LayoutTemplate, TrendingUp, Workflow, Zap, ShoppingBag, ShieldCheck } from 'lucide-vue-next'

const corePackages = [
  {
    slug: 'landing-express',
    title: 'Landing Express',
    audience: 'Validación rápida en 1 página',
    price: '$200.000',
    priceMeta: 'Desde · CLP neto + IVA',
    description: 'Presencia rápida sobre plantilla propia para validar una oferta concreta sin sobrecostos.',
    icon: LayoutTemplate,
    features: [
      '1 página de aterrizaje con textos y fotos entregados por el cliente.',
      'Diseño adaptable a móvil y carga rápida en hosting cPanel.',
      'Formulario de contacto + enlace directo a WhatsApp.',
      'Excluye sesiones fotográficas, redacción extensa o lógica a medida.'
    ],
    ctaText: 'Solicitar Landing Express'
  },
  {
    slug: 'captacion-web',
    featured: true,
    title: 'Sistema de Captación Web',
    audience: 'Entrada recomendada para PYMEs',
    price: '$350.000',
    priceMeta: 'Desde · CLP neto + IVA',
    description: 'Sitio orientado a conversión con respaldo en base de datos para no perder ningún contacto aunque falle el correo.',
    icon: TrendingUp,
    features: [
      'Estructura comercial enfocada en conversión y SEO técnico base.',
      'Respaldo automático de cada lead en panel administrativo.',
      'Medición real de envíos de formulario y clics a WhatsApp.',
      'Aviso por correo al equipo ante cada nueva solicitud.'
    ],
    ctaText: 'Solicitar Captación Web'
  },
  {
    slug: 'web-flujo-comercial',
    title: 'Web + Flujo Comercial / Agenda',
    audience: 'Maestranzas B2B y Clínicas',
    price: '$590.000 – $650.000',
    priceMeta: 'CLP neto + IVA',
    description: 'Pensado para empresas B2B y servicios que necesitan ordenar cotizaciones técnicas o solicitudes de hora.',
    icon: Workflow,
    features: [
      'Maestranzas/B2B: catálogo técnico + cotizador con adjuntos y urgencia.',
      'Clínicas/Servicios: especialidades + flujo de solicitud de hora.',
      'Panel de seguimiento de requerimientos y estados.',
      'Validaciones de negocio y pruebas end-to-end antes de publicar.'
    ],
    ctaText: 'Cotizar Web + Flujo'
  }
]

const specializedOffers = [
  {
    slug: 'automatizacion-flujo',
    icon: Zap,
    title: 'Automatización e Integraciones',
    price: 'Desde $450.000 + IVA',
    summary: 'Conecta formularios, WhatsApp, correos y planillas sin pagar servidores cloud caros en dólares.',
    bullets: [
      '1 flujo acotado de alto impacto (PDF de cotización, alertas o consolidación).',
      'Arquitectura compatible con cPanel y colas persistentes.',
      'Integraciones múltiples o APIs complejas: $900.000+ según alcance.'
    ],
    ctaText: 'Evaluar Automatización'
  },
  {
    slug: 'ecommerce-estandar',
    icon: ShoppingBag,
    title: 'E-commerce Estándar',
    price: 'Desde $650.000 + IVA',
    summary: 'Tienda online lista para cobrar con pasarelas chilenas y administración simple de catálogo y pedidos.',
    bullets: [
      'Catálogo estándar autoadministrable y carrito optimizado en móvil.',
      'Integración con Webpay, Flow o MercadoPago.',
      'Integraciones con ERP, SII o inventario avanzado se cotizan aparte.'
    ],
    ctaText: 'Cotizar Tienda Online'
  },
  {
    slug: 'continuidad-mensual',
    icon: ShieldCheck,
    title: 'Plan Continuidad & Soporte',
    price: '$49.000 – $89.000 / mes',
    summary: 'Mantén tu sitio, correos y formularios funcionando sin caídas ni sorpresas técnicas mes a mes (+ IVA).',
    bullets: [
      'Plan Base ($49.000/mes): hosting cPanel, SSL, respaldos, monitoreo + 1 h/mes ajustes.',
      'Plan Crecimiento ($89.000/mes): incluye reporte mensual de contactos + 2 a 3 h/mes mejoras.',
      'Soporte directo sin tickets interminables.'
    ],
    ctaText: 'Activar Continuidad'
  }
]
</script>

<template>
  <section id="paquetes" class="catalog-section bg-section-surface">
    <div class="section-container">

      <!-- Band 1: Core implementation packages -->
      <div class="band-head">
        <h2 class="bold-band-title">Implementación web y captación</h2>
        <p class="bold-band-lead">
          Tres niveles con alcance cerrado para que pagues exactamente por la capacidad operativa que tu empresa necesita hoy.
        </p>
      </div>

      <div class="core-grid">
        <article v-for="(item, index) in corePackages" :key="item.slug" v-reveal :data-delay="index * 70"
          class="tier-card" :class="{ 'tier-card--featured': item.featured }">
          <div class="tier-head">
            <div class="tier-title-wrap">
              <component :is="item.icon" class="w-5 h-5 tier-icon shrink-0" aria-hidden="true" />
              <h3 class="tier-title">{{ item.title }}</h3>
            </div>
            <p class="tier-audience">{{ item.audience }}</p>
          </div>

          <div class="tier-pricing">
            <p class="tier-price tabular-nums">{{ item.price }}</p>
            <p class="tier-price-meta">{{ item.priceMeta }}</p>
          </div>

          <p class="tier-desc">{{ item.description }}</p>

          <ul class="tier-features">
            <li v-for="feature in item.features" :key="feature">
              <CheckCircle2 class="w-4 h-4 tier-check shrink-0" aria-hidden="true" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="tier-cta-wrap">
            <NuxtLink :to="`/contacto?plan=${item.slug}`" class="btn w-full justify-center py-3.5"
              :class="item.featured ? 'tier-btn-featured' : 'btn-primary'">
              {{ item.ctaText }}
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Band 2: Bold Color-Blocked Modules -->
      <div class="specialized-block">
        <div class="band-head">
          <h2 class="bold-band-title">Automatización, ventas y continuidad</h2>
          <p class="bold-band-lead">
            Módulos independientes para ahorrar horas manuales, cobrar online o mantener tu plataforma monitoreada mes a mes.
          </p>
        </div>

        <div class="specialized-grid">
          <article v-for="(offer, index) in specializedOffers" :key="offer.slug" v-reveal :data-delay="index * 70"
            class="spec-tile">
            <div class="spec-tile__top">
              <component :is="offer.icon" class="w-6 h-6 text-accent shrink-0" aria-hidden="true" />
              <h3 class="spec-tile__title">{{ offer.title }}</h3>
            </div>

            <p class="spec-tile__price tabular-nums">{{ offer.price }}</p>
            <p class="spec-tile__summary">{{ offer.summary }}</p>

            <ul class="spec-tile__bullets">
              <li v-for="bullet in offer.bullets" :key="bullet">
                <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <NuxtLink :to="`/contacto?plan=${offer.slug}`" class="btn btn-secondary w-full justify-center py-3.5">
              {{ offer.ctaText }}
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </article>
        </div>
      </div>

      <!-- Band 3: Bold Deep Navy Custom Banner -->
      <div class="custom-band impulso-closing" v-reveal data-delay="120">
        <div class="custom-band__copy">
          <h3 class="custom-band__title">Software a medida y Piloto Control de Asistencia</h3>
          <p class="custom-band__desc">
            Si necesitas portales internos, integraciones con sistemas propios o evaluar un piloto de control de asistencia y turnos en terreno, definimos alcance, plazos y presupuesto tras una reunión de diagnóstico.
          </p>
        </div>
        <NuxtLink to="/contacto?plan=software-a-medida" class="btn tier-btn-featured shrink-0 py-4 px-7">
          Solicitar Diagnóstico
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.catalog-section {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.band-head {
  text-align: center;
  max-width: 44rem;
  margin: 0 auto clamp(2.5rem, 5vw, 3.75rem);
}

.bold-band-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 1.35rem + 2.4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--text-main);
  margin: 0 0 1rem;
  text-wrap: balance;
}

.bold-band-lead {
  font-size: var(--fs-lead);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.core-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.tier-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  background: var(--bg-dark);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.tier-card--featured {
  background: #102B46;
  color: #F5F9FD;
  box-shadow: 0 24px 52px rgba(16, 43, 70, 0.18);
}

.tier-head {
  margin-bottom: 1.25rem;
}

.tier-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.35rem;
}

.tier-icon {
  color: var(--accent);
}

.tier-title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 1.15rem + 0.3vw, 1.45rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
  margin: 0;
}

.tier-audience {
  font-size: var(--fs-small);
  color: var(--text-secondary);
  margin: 0;
}

.tier-pricing {
  padding: 1.15rem 0;
  margin-bottom: 1.25rem;
  border-block: 1px solid var(--border);
}

.tier-price {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 1.45rem + 0.8vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--text-main);
  margin: 0 0 0.25rem;
}

.tier-price-meta {
  font-size: var(--fs-small);
  color: var(--accent);
  font-weight: 600;
  margin: 0;
}

.tier-desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
}

.tier-features {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
}

.tier-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

.tier-check {
  color: var(--accent);
  margin-top: 0.15rem;
}

.tier-card--featured .tier-title,
.tier-card--featured .tier-price {
  color: #F5F9FD;
}
.tier-card--featured .tier-audience,
.tier-card--featured .tier-desc,
.tier-card--featured .tier-features li {
  color: #B8CFE5;
}
.tier-card--featured .tier-icon,
.tier-card--featured .tier-price-meta,
.tier-card--featured .tier-check {
  color: #9DCBF5;
}
.tier-card--featured .tier-pricing {
  border-color: rgba(184, 207, 229, 0.2);
}
.tier-btn-featured {
  background: #9DCBF5;
  color: #102B46;
  border: 1px solid #9DCBF5;
  font-weight: 700;
}
.tier-btn-featured:hover {
  background: #F5F9FD;
  border-color: #F5F9FD;
  color: #102B46;
}

/* Band 2: Solid color-blocked modules */
.specialized-block {
  margin-top: clamp(4.5rem, 8vw, 6.5rem);
}

.specialized-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.spec-tile {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  background: var(--bg-elevated);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.spec-tile__top {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.spec-tile__title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

.spec-tile__price {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 1.2rem + 0.5vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--accent);
  margin: 0 0 0.75rem;
}

.spec-tile__summary {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.25rem;
}

.spec-tile__bullets {
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.spec-tile__bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

/* Band 3: Deep navy statement banner */
.custom-band {
  margin-top: clamp(3rem, 5vw, 4.5rem);
  padding: clamp(2rem, 4vw, 3.25rem);
  border-radius: 1.5rem;
  background: #102B46;
  color: #F5F9FD;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.75rem;
}

.custom-band__title {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 1.2rem + 0.6vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #F5F9FD;
  margin: 0 0 0.6rem;
}

.custom-band__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: #B8CFE5;
  max-width: 60ch;
  margin: 0;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .tier-card:hover,
  .spec-tile:hover {
    transform: translateY(-3px);
  }
}

@media (min-width: 960px) {
  .core-grid,
  .specialized-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .custom-band {
    flex-direction: row;
    align-items: center;
  }
}
</style>
