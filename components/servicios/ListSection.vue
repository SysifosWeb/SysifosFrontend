<script setup>
import { ArrowRight, CheckCircle2, LayoutTemplate, TrendingUp, Workflow, Zap, ShoppingBag, ShieldCheck } from 'lucide-vue-next'

const services = [
  {
    id: '01',
    slug: 'landing-express',
    eyebrow: 'PUERTA DE ENTRADA ACOTADA',
    title: 'Landing Express',
    price: 'Desde $200.000 + IVA',
    description: 'Presencia rápida en 1 página sobre plantilla propia para validar una oferta concreta sin sobrecostos.',
    icon: LayoutTemplate,
    features: [
      '1 página de aterrizaje con textos y fotos entregados por el cliente.',
      'Diseño adaptable a móvil y carga rápida en hosting cPanel.',
      'Formulario de contacto + enlace directo a WhatsApp.',
      'Excluye sesiones fotográficas, redacción extensa o lógica a medida.'
    ],
    ctaText: 'Solicitar Landing Express',
  },
  {
    id: '02',
    slug: 'captacion-web',
    eyebrow: 'ENTRADA RECOMENDADA',
    title: 'Sistema de Captación Web',
    price: 'Desde $350.000 + IVA',
    featured: true,
    description: 'Sitio orientado a conversión con respaldo en base de datos para no perder ningún contacto aunque falle el correo.',
    icon: TrendingUp,
    features: [
      'Estructura comercial enfocada en conversión y SEO técnico base.',
      'Respaldo automático de cada lead en panel administrativo.',
      'Medición real de envíos de formulario y clics a WhatsApp.',
      'Aviso por correo al equipo ante cada nueva solicitud.'
    ],
    ctaText: 'Solicitar Captación Web',
  },
  {
    id: '03',
    slug: 'web-flujo-comercial',
    eyebrow: 'MAESTRANZAS B2B · CLÍNICAS',
    title: 'Web + Flujo Comercial / Agenda',
    price: '$590.000 – $650.000 + IVA',
    description: 'Pensado para empresas B2B y servicios que necesitan ordenar cotizaciones técnicas o solicitudes de hora.',
    icon: Workflow,
    features: [
      'Maestranzas/B2B: catálogo técnico + cotizador con adjuntos y urgencia.',
      'Clínicas/Servicios: especialidades + flujo de solicitud de hora.',
      'Panel de seguimiento de requerimientos y estados.',
      'Validaciones de negocio y pruebas end-to-end antes de publicar.'
    ],
    ctaText: 'Cotizar Web + Flujo',
  },
  {
    id: '04',
    slug: 'automatizacion-flujo',
    eyebrow: 'AHORRO DE HORAS-HOMBRE',
    title: 'Automatización e Integraciones',
    price: 'Desde $450.000 + IVA',
    description: 'Conecta formularios, WhatsApp, correos y planillas sin pagar servidores cloud caros en dólares.',
    icon: Zap,
    features: [
      '1 flujo acotado de alto impacto (ej. cotización PDF o consolidación de leads).',
      'Arquitectura frugal compatible con cPanel y colas persistentes.',
      'Alertas operativas y trazabilidad de cada ejecución.',
      'Integraciones múltiples o APIs complejas: $900.000+ según alcance.'
    ],
    ctaText: 'Evaluar Automatización',
  },
  {
    id: '05',
    slug: 'ecommerce-estandar',
    eyebrow: 'VENTA ONLINE CHILE',
    title: 'E-commerce Estándar',
    price: 'Desde $650.000 + IVA',
    description: 'Tienda online lista para cobrar con pasarelas chilenas y administración simple de catálogo y pedidos.',
    icon: ShoppingBag,
    features: [
      'Catálogo estándar autoadministrable y carrito optimizado en móvil.',
      'Integración con Webpay, Flow o MercadoPago.',
      'Notificaciones de pedido y control básico de stock.',
      'Integraciones con ERP, facturación SII o inventario avanzado se cotizan aparte.'
    ],
    ctaText: 'Cotizar Tienda Online',
  },
  {
    id: '06',
    slug: 'continuidad-mensual',
    eyebrow: 'ESTABILIDAD Y EVOLUCIÓN',
    title: 'Plan Continuidad & Soporte',
    price: '$49.000 – $89.000 / mes + IVA',
    description: 'Mantén tu sitio, correos y formularios funcionando sin caídas ni sorpresas técnicas mes a mes.',
    icon: ShieldCheck,
    features: [
      'Plan Base ($49.000/mes): hosting cPanel, SSL, respaldos, monitoreo de formularios + 1 h/mes ajustes.',
      'Plan Crecimiento ($89.000/mes): incluye reporte mensual de contactos + 2 a 3 h/mes de mejoras.',
      'Soporte directo sin tickets interminables.'
    ],
    ctaText: 'Activar Continuidad',
  }
]
</script>

<template>
  <section class="relative bg-section-dark py-12 lg:py-20 overflow-hidden">

    <div class="section-container relative z-10">

      <!-- Uniform Grid Layout (3 items per row) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <div v-for="(item, index) in services" :key="item.id" v-reveal :data-delay="index * 80"
          class="plan-card group relative flex flex-col p-8 lg:p-9 rounded-2xl bg-panel border overflow-hidden hover:bg-quiet hover:border-accent/30"
          :class="item.featured ? 'border-accent/50 shadow-[0_12px_32px_rgba(var(--decoration-rgb),0.08)]' : 'border-line'">

          <!-- Header -->
          <div class="flex flex-wrap justify-between items-start gap-4 mb-5 relative z-10">
            <div
              class="plan-icon w-14 h-14 shrink-0 rounded-2xl bg-quiet flex items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent/30">
              <component :is="item.icon" class="w-7 h-7" />
            </div>
            <span class="text-small font-semibold text-accent">
              {{ item.eyebrow }}
            </span>
          </div>

          <!-- Titles & Price -->
          <h3 class="text-h3 text-content mb-2 relative z-10">
            {{ item.title }}
          </h3>
          <p class="text-body font-bold text-accent mb-4 relative z-10">
            {{ item.price }}
          </p>
          <p class="text-subdued text-body leading-relaxed mb-6 relative z-10">
            {{ item.description }}
          </p>

          <!-- Features (What you get) -->
          <div class="flex-grow mb-8 relative z-10">
            <p class="text-small font-semibold text-accent mb-4">Alcance y condiciones</p>
            <ul class="flex flex-col gap-3">
              <li v-for="feature in item.features" :key="feature"
                class="flex items-start gap-3 text-body text-content font-medium">
                <div class="flex items-center justify-center mt-0.5">
                  <CheckCircle2 class="w-5 h-5 text-accent shrink-0" />
                </div>
                <span class="leading-tight">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Call to Action -->
          <NuxtLink :to="`/contacto?plan=${item.slug}`"
            class="btn w-full relative z-10 py-3.5"
            :class="item.featured ? 'btn-primary' : 'btn-secondary hover:bg-accent hover:text-action hover:border-accent'">
            {{ item.ctaText }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>

        </div>

      </div>

      <!-- Software a medida / Piloto -->
      <div class="mt-10 rounded-2xl border border-line bg-panel p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6" v-reveal data-delay="200">
        <div class="max-w-2xl">
          <p class="text-small font-semibold text-accent mb-2">BAJO DIAGNÓSTICO TÉCNICO</p>
          <h3 class="text-h3 text-content mb-2">Software a medida y Control de Asistencia</h3>
          <p class="text-body text-subdued leading-relaxed mb-0">
            Si necesitas portales internos, integraciones con sistemas propios o evaluar un piloto de control de asistencia y turnos en terreno, definimos alcance, plazos y presupuesto tras una reunión de diagnóstico.
          </p>
        </div>
        <NuxtLink to="/contacto?plan=software-a-medida" class="btn btn-secondary shrink-0 py-3.5 px-6 hover:bg-accent hover:text-action hover:border-accent">
          Solicitar Diagnóstico
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.section-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.plan-card {
  transition: opacity 1.2s ease, transform 1.2s ease, translate .25s ease,
    box-shadow .25s ease, background-color .25s ease, border-color .25s ease;
}
.plan-icon svg { transition: transform .25s ease; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .plan-card:hover, .plan-card:focus-within {
    translate: 0 -5px;
    box-shadow: 0 16px 36px rgba(16, 43, 70, .12);
  }
  .plan-card:hover .plan-icon svg, .plan-card:focus-within .plan-icon svg {
    transform: translateY(-2px) scale(1.06);
  }
}
</style>
