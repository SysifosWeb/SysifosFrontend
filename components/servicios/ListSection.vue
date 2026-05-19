<script setup>
import { ArrowRight, CheckCircle2, TrendingUp, Database, Code2, ShoppingBag, LayoutTemplate, Smartphone } from 'lucide-vue-next'

const services = [
  {
    id: '01',
    eyebrow: 'Conversión',
    title: 'Landing Pages',
    description: 'Embudos de venta diseñados para capturar leads calificados.',
    icon: TrendingUp,
    features: [
      'Copywriting persuasivo',
      'Diseño orientado a la acción',
      'Velocidad de carga extrema',
      'Integración con tu CRM'
    ],
    ctaText: 'Cotizar Landing Page',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20necesito%20una%20Landing%20Page.',
  },
  {
    id: '02',
    eyebrow: 'Arquitectura',
    title: 'Bases de Datos',
    description: 'Estructuras de datos garantizando seguridad bancaria y consultas veloces.',
    icon: Database,
    features: [
      'Arquitectura Relacional / NoSQL',
      'Optimización de consultas',
      'Copias de seguridad automatizadas',
      'Seguridad y encriptación'
    ],
    ctaText: 'Cotizar Base de Datos',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20necesito%20gestión%20de%20Bases%20de%20Datos.',
  },
  {
    id: '03',
    eyebrow: 'Eficiencia',
    title: 'Software a Medida',
    description: 'Sistemas que automatizan tareas manuales y reducen costos operativos.',
    icon: Code2,
    features: [
      'Automatización de procesos',
      'Paneles de administración',
      'Conexión mediante APIs',
      'Soporte técnico dedicado'
    ],
    ctaText: 'Cotizar Software',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20busco%20desarrollo%20de%20Software%20a%20Medida.',
  },
  {
    id: '04',
    eyebrow: 'Transaccional',
    title: 'Desarrollo E-commerce',
    description: 'Tiendas online construidas para vender 24/7 sin límites de stock.',
    icon: ShoppingBag,
    features: [
      'Checkout sin fricción',
      'Integración de pasarelas de pago',
      'Gestión de inventarios',
      'Optimización logística'
    ],
    ctaText: 'Cotizar E-commerce',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20necesito%20un%20E-commerce.',
  },
  {
    id: '05',
    eyebrow: 'Corporativo',
    title: 'Plataformas Web',
    description: 'Sistemas extensos con gestión de roles para alto volumen de tráfico.',
    icon: LayoutTemplate,
    features: [
      'CMS Empresarial',
      'Gestión de múltiples usuarios',
      'Arquitectura escalable (Cloud)',
      'SEO Técnico avanzado'
    ],
    ctaText: 'Cotizar Plataforma',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20busco%20una%20Plataforma%20Web.',
  },
  {
    id: '06',
    eyebrow: 'Impacto',
    title: 'One Page Sites',
    description: 'Sitios fluidos e impactantes en una sola pantalla. Ideales para lanzamientos.',
    icon: Smartphone,
    features: [
      'Navegación ultra-fluida',
      'Animaciones interactivas',
      'Diseño Mobile-First',
      'Alto impacto visual'
    ],
    ctaText: 'Cotizar One Page',
    ctaLink: 'https://wa.me/56949109970?text=Hola,%20necesito%20un%20sitio%20One%20Page.',
  }
]
</script>

<template>
  <section class="relative bg-section-dark py-8 lg:py-16 overflow-hidden">
    
    <div class="section-container relative z-10">
      
      <!-- Uniform Grid Layout (3 items per row) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div v-for="(item, index) in services" :key="item.id" 
             v-reveal :data-delay="index * 100"
             class="group relative flex flex-col p-8 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/15 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1">
          
          <!-- Persistent top glowing border effect -->
          <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Header -->
          <div class="flex justify-between items-start mb-6 relative z-10">
             <div class="w-14 h-14 rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.02)] flex items-center justify-center border border-white/10 text-accent group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500">
                <component :is="item.icon" class="w-7 h-7 drop-shadow-lg" />
             </div>
             <span class="text-[10px] font-extrabold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {{ item.eyebrow }}
             </span>
          </div>

          <!-- Titles -->
          <h3 class="text-2xl font-bold tracking-tight text-white mb-3 relative z-10">
             {{ item.title }}
          </h3>
          <p class="text-white/60 text-sm leading-relaxed mb-6 h-10 relative z-10">
             {{ item.description }}
          </p>

          <!-- Ticket Divider (Dashed) -->
          <div class="relative w-full my-6 flex items-center z-10">
             <div class="w-full border-t border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
          </div>

          <!-- Features (What you get) -->
          <div class="flex-grow mb-8 relative z-10">
             <p class="text-[11px] font-bold text-accent/60 uppercase tracking-widest mb-4">¿Qué incluye?</p>
             <ul class="flex flex-col gap-3">
                <li v-for="feature in item.features" :key="feature" class="flex items-start gap-3 text-sm text-white/80 font-medium">
                   <!-- Ticket / Checkmark Design -->
                   <div class="relative flex items-center justify-center mt-0.5">
                      <!-- Resplandor sutil del ticket -->
                      <div class="absolute inset-0 bg-accent/20 rounded-full blur-[4px] group-hover:blur-[6px] transition-all"></div>
                      <div class="relative w-5 h-5 rounded-full bg-gradient-to-br from-accent/20 to-transparent border border-accent/40 flex items-center justify-center shadow-inner">
                         <CheckCircle2 class="w-3 h-3 text-accent" />
                      </div>
                   </div>
                   <span class="leading-tight">{{ feature }}</span>
                </li>
             </ul>
          </div>

          <!-- Call to Action -->
          <a :href="item.ctaLink" target="_blank" class="w-full relative z-10 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 bg-white/5 text-white hover:bg-accent hover:text-black border border-white/10 hover:border-accent">
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
</style>
