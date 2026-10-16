<script setup>
import { ArrowRight, CheckCircle2, TrendingUp, Database, Code2, ShoppingBag, LayoutTemplate, Smartphone } from 'lucide-vue-next'

const services = [
  {
    id: '01',
    eyebrow: 'CONVERSIÓN INMEDIATA',
    title: 'Páginas Web',
    description: 'El aliado digital para captar clientes en piloto automático sin perder tiempo.',
    icon: TrendingUp,
    features: [
      'Copywriting persuasivo (Textos que atrapan).',
      'Diseño Mobile-First (Carga ultra fluida en celulares).',
      'Botón directo a tu WhatsApp o formulario.',
      'Estructura lista para aparecer en Google.'
    ],
    ctaText: 'Cotizar desde $200.000 + IVA',
    ctaLink: 'https://wa.me/56985021549?text=Hola,%20me%20interesa%20una%20Landing%20Page/One%20Page.',
  },
  {
    id: '02',
    eyebrow: 'LIBERTAD Y VENTAS 24/7',
    title: 'Tiendas Online',
    description: 'Tu tienda online construida para vender y cobrar sola, eliminando la gestión manual.',
    icon: ShoppingBag,
    features: [
      'Proceso de compra rápido y fácil para el cliente.',
      'Conexión automática de inventario y stock.',
      'Recibe pagos con Tarjetas de Crédito y Débito.',
      'Panel autoadministrable (Control total desde tu celular).'
    ],
    ctaText: 'Automatizar mi Negocio',
    ctaLink: 'https://wa.me/56985021549?text=Hola,%20me%20interesa%20Desarrollo%20E-commerce%20o%20Plataforma.',
  },
  {
    id: '03',
    eyebrow: 'EFICIENCIA & ESCALABILIDAD',
    title: 'Sistemas y Software a Medida',
    description: 'Sistemas robustos que reducen costos operativos y blindan la seguridad de tu empresa.',
    icon: Database,
    features: [
      'Sistemas rápidos y accesibles desde cualquier lugar.',
      'Automatización de procesos internos pesados.',
      'Seguridad, encriptación y respaldos automáticos.',
      'Conexión e integración con tus sistemas actuales.'
    ],
    ctaText: 'Solicitar Evaluación Técnica',
    ctaLink: 'https://wa.me/56985021549?text=Hola,%20necesito%20una%20evaluación%20técnica%20para%20Software%20a%20Medida.',
  }
]
</script>

<template>
  <section class="relative bg-section-dark py-12 lg:py-20 overflow-hidden">

    <div class="section-container relative z-10">

      <!-- Uniform Grid Layout (3 items per row) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <div v-for="(item, index) in services" :key="item.id" v-reveal :data-delay="index * 100"
          class="plan-card group relative flex flex-col p-8 lg:p-10 rounded-2xl bg-panel border border-line overflow-hidden hover:bg-quiet hover:border-accent/30">

          <!-- Header -->
          <div class="flex flex-wrap justify-between items-start gap-4 mb-6 relative z-10">
            <div
               class="plan-icon w-14 h-14 shrink-0 rounded-2xl bg-quiet flex items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent/30">
               <component :is="item.icon" class="w-7 h-7" />
            </div>
            <span
               class="text-small font-semibold text-accent">
              {{ item.eyebrow }}
            </span>
          </div>

          <!-- Titles -->
           <h3 class="text-h3 text-content mb-3 relative z-10">
            {{ item.title }}
          </h3>
           <p class="text-subdued text-body leading-relaxed mb-6 relative z-10">
            {{ item.description }}
          </p>

          <!-- Features (What you get) -->
          <div class="flex-grow mb-8 relative z-10">
             <p class="text-small font-semibold text-accent mb-4">¿Qué incluye?</p>
            <ul class="flex flex-col gap-3">
              <li v-for="feature in item.features" :key="feature"
                class="flex items-start gap-3 text-body text-content font-medium">
                <div class="flex items-center justify-center mt-0.5">
                  <CheckCircle2 class="w-5 h-5 text-accent" />
                </div>
                <span class="leading-tight">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Call to Action -->
          <a :href="item.ctaLink" target="_blank"
            class="btn btn-secondary w-full relative z-10 py-3.5 hover:bg-accent hover:text-action hover:border-accent">
            {{ item.ctaText }}
            <ArrowRight class="w-4 h-4" />
          </a>

        </div>

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
