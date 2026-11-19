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
      '1 flujo acotado de alto impacto (PDF de cotización, alertas o consolidación de leads).',
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
      'Integraciones con ERP, facturación SII o inventario avanzado se cotizan aparte.'
    ],
    ctaText: 'Cotizar Tienda Online'
  },
  {
    slug: 'continuidad-mensual',
    icon: ShieldCheck,
    title: 'Plan Continuidad & Soporte',
    price: '$49.000 – $89.000 / mes + IVA',
    summary: 'Mantén tu sitio, correos y formularios funcionando sin caídas ni sorpresas técnicas mes a mes.',
    bullets: [
      'Plan Base ($49.000/mes): hosting cPanel, SSL, respaldos, monitoreo de formularios + 1 h/mes ajustes.',
      'Plan Crecimiento ($89.000/mes): incluye reporte mensual de contactos + 2 a 3 h/mes de mejoras.',
      'Soporte directo sin tickets interminables.'
    ],
    ctaText: 'Activar Continuidad'
  }
]
</script>

<template>
  <section id="paquetes" class="catalog-section bg-section-dark">
    <div class="section-container">

      <!-- Band 1: Core implementation packages -->
      <div class="band-head">
        <h2 class="section-title m-0">Implementación web y captación</h2>
        <p class="section-subtitle m-0 max-w-[52ch]">
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
              :class="item.featured ? 'tier-btn-featured' : 'btn-secondary hover:bg-accent hover:text-action hover:border-accent'">
              {{ item.ctaText }}
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Band 2: Specialized automation, ecommerce & monthly continuity (hairline ledger, not another card wall) -->
      <div class="specialized-block">
        <div class="band-head">
          <h2 class="section-title m-0">Automatización, ventas y continuidad mensual</h2>
          <p class="section-subtitle m-0 max-w-[52ch]">
            Servicios modulares para ahorrar horas manuales, cobrar online o mantener tu plataforma monitoreada mes a mes.
          </p>
        </div>

        <div class="specialized-ledger">
          <article v-for="(offer, index) in specializedOffers" :key="offer.slug" v-reveal :data-delay="index * 70"
            class="ledger-item">
            <div class="ledger-item__meta">
              <div class="ledger-item__title-row">
                <component :is="offer.icon" class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <h3 class="ledger-item__title">{{ offer.title }}</h3>
              </div>
              <p class="ledger-item__price tabular-nums">{{ offer.price }}</p>
              <p class="ledger-item__summary">{{ offer.summary }}</p>
            </div>

            <ul class="ledger-item__bullets">
              <li v-for="bullet in offer.bullets" :key="bullet">
                <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <div class="ledger-item__action">
              <NuxtLink :to="`/contacto?plan=${offer.slug}`" class="btn btn-secondary py-3 px-5 hover:bg-accent hover:text-action hover:border-accent">
                {{ offer.ctaText }}
                <ArrowRight class="w-4 h-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>

      <!-- Band 3: Custom software & attendance pilot -->
      <div class="custom-band" v-reveal data-delay="120">
        <div class="custom-band__copy">
          <h3 class="custom-band__title">Software a medida y Piloto Control de Asistencia</h3>
          <p class="custom-band__desc">
            Si necesitas portales internos, integraciones con sistemas propios o evaluar un piloto de control de asistencia y turnos en terreno, definimos alcance, plazos y presupuesto tras una reunión de diagnóstico.
          </p>
        </div>
        <NuxtLink to="/contacto?plan=software-a-medida" class="btn btn-primary shrink-0 py-3.5 px-6">
          Solicitar Diagnóstico
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.catalog-section {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 clamp(4rem, 7vw, 6rem);
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.band-head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2.25rem;
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
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.tier-card--featured {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 44px rgba(16, 43, 70, 0.16);
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
  font-size: clamp(1.65rem, 1.4rem + 0.7vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
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

/* Featured navy contrast overrides (works in both light & dark themes) */
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

/* Band 2: Specialized hairline ledger */
.specialized-block {
  margin-top: clamp(4rem, 7vw, 6rem);
}

.specialized-ledger {
  border-top: 1px solid var(--border);
}

.ledger-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: clamp(1.75rem, 3vw, 2.5rem) 0;
  border-bottom: 1px solid var(--border);
}

.ledger-item__title-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.35rem;
}

.ledger-item__title {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 1.1rem + 0.3vw, 1.4rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

.ledger-item__price {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--accent);
  margin: 0 0 0.65rem;
}

.ledger-item__summary {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
  max-width: 44ch;
}

.ledger-item__bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.ledger-item__bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

.ledger-item__action {
  display: flex;
  align-items: center;
}

/* Band 3: Custom software */
.custom-band {
  margin-top: clamp(3rem, 5vw, 4.5rem);
  padding: clamp(1.75rem, 3.5vw, 2.75rem);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}

.custom-band__title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 1.15rem + 0.35vw, 1.55rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.custom-band__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 62ch;
  margin: 0;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .tier-card:hover {
    transform: translateY(-3px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 960px) {
  .band-head {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    gap: 3rem;
  }
  .core-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .ledger-item {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.25fr) auto;
    align-items: center;
    gap: 2.5rem;
  }
  .custom-band {
    flex-direction: row;
    align-items: center;
  }
}
</style>
