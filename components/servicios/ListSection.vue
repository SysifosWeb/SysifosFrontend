<script setup>
import { Monitor, Smartphone, LayoutTemplate, Settings, ShieldCheck, Database, Cpu, Globe, MessageCircle } from 'lucide-vue-next'

const services = [
  {
    id: 'SRV_01',
    title: 'Landing Pages',
    description: 'Interfaces de alto impacto optimizadas para la conversión inmediata.',
    longDesc: 'Diseñamos arquitecturas de una sola página con enfoque en User Experience y Performance, integrando herramientas de captura de leads y análisis de comportamiento en tiempo real.',
    icon: Monitor,
    features: ['Diseño Responsive', 'Optimización SEO', 'Integración CRM'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'SRV_02',
    title: 'E-commerce',
    description: 'Ecosistemas transaccionales seguros.',
    longDesc: 'Desarrollamos tiendas online con pasarelas de pago cifradas, gestión automatizada de inventarios y sistemas de logística integrados para escalar sus ventas globales.',
    icon: Smartphone,
    features: ['Pagos Cifrados', 'Stock Automático', 'Multi-Moneda'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 'SRV_03',
    title: 'Software a Medida',
    description: 'Ingeniería para procesos complejos.',
    longDesc: 'Construimos soluciones personalizadas que automatizan flujos de trabajo operativos y optimizan el manejo de grandes volúmenes de datos con precisión milimétrica.',
    icon: Cpu,
    features: ['Arquitectura Limpia', 'API First', 'Escalabilidad'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 'SRV_04',
    title: 'One Page Sites',
    description: 'Navegación fluida en una interfaz.',
    longDesc: 'Sitios integrales concentrados en una sola página, ideales para portafolios o lanzamientos que requieren rapidez, impacto visual y fluidez total.',
    icon: LayoutTemplate,
    features: ['Scroll Infinito', 'Diseño Compacto', 'Carga Ultra-Rápida'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'SRV_05',
    title: 'Plataformas Corporativas',
    description: 'Infraestructura para organizaciones.',
    longDesc: 'Sistemas extensos con gestión de roles, CMS de grado empresarial y optimización para altos volúmenes de tráfico concurrente y seguridad avanzada.',
    icon: Globe,
    features: ['Multi-idioma', 'Panel Admin', 'Seguridad Enterprise'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'SRV_06',
    title: 'Bases de Datos',
    description: 'Gestión de activos de datos.',
    longDesc: 'Diseño y mantenimiento de estructuras de datos relacionales y NoSQL, garantizando integridad, velocidad de consulta y redundancia crítica en cada nodo.',
    icon: Database,
    features: ['Migración Segura', 'Consultas High-Speed', 'Backups'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  }
]

const getWhatsAppLink = (serviceTitle) => {
  const message = encodeURIComponent(`Hola SysifosWeb, me gustaría obtener más información sobre el servicio de ${serviceTitle}.`);
  return `https://wa.me/56949109970?text=${message}`;
}
</script>

<template>
  <section class="relative bg-[#05080a] py-32 overflow-hidden border-b border-white/5">
    <!-- Fondo Decorativo -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div class="absolute top-0 left-1/4 w-[1px] h-full bg-accent"></div>
        <div class="absolute top-0 right-1/4 w-[1px] h-full bg-accent"></div>
        <div class="absolute top-1/3 left-0 w-full h-[1px] bg-accent"></div>
    </div>

    <div class="max-w-[1600px] w-[94%] mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div v-for="service in services" :key="service.id" 
             :class="[service.gridClass, 'group relative bg-[#0a0e17]/80 backdrop-blur-xl border border-white/[0.05] p-8 lg:p-10 flex flex-col transition-all duration-500 hover:border-accent/40 hover:bg-[#0c121e] overflow-hidden shadow-2xl']">
          
          <!-- Efecto de Escaneo al Hover (Corregido para atravesar toda la card) -->
          <div class="absolute top-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_20px_#00f2ff] -translate-y-full group-hover:translate-y-[1000px] transition-all duration-[2.5s] ease-in-out opacity-0 group-hover:opacity-40 pointer-events-none"></div>
          
          <!-- HUD Details -->
          <div class="absolute top-4 right-6 font-mono text-[11px] text-accent/30 group-hover:text-accent transition-colors uppercase">
            [ {{ service.id }} ]
          </div>
          
          <div class="mb-10 relative">
            <!-- Icon Container: Refinado para mayor visibilidad -->
            <div class="w-16 h-16 rounded-none border border-accent/20 bg-accent/5 flex items-center justify-center relative transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                <component :is="service.icon" class="w-8 h-8 text-accent transition-all duration-500 group-hover:scale-110" />
                <div class="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-accent opacity-50 group-hover:opacity-100"></div>
                <div class="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-accent opacity-50 group-hover:opacity-100"></div>
            </div>
          </div>

          <div class="flex-grow">
            <!-- Título: Mantener blanco para contraste pero añadir brillo -->
            <h3 class="text-2xl lg:text-3xl font-bold font-tech text-white uppercase tracking-tighter mb-4 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {{ service.title }}
            </h3>
            <p class="text-accent font-mono text-[13px] uppercase tracking-widest mb-6 transition-opacity duration-500 group-hover:opacity-100">
              {{ service.description }}
            </p>
            <p class="text-gray-400 font-mono text-[14px] leading-relaxed mb-10 group-hover:text-gray-200 transition-colors">
              {{ service.longDesc }}
            </p>
          </div>

          <!-- Technical Specs & WhatsApp Button -->
          <div class="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
             <div class="flex flex-wrap gap-4">
                <div v-for="feature in service.features" :key="feature" 
                     class="flex items-center gap-2 text-[12px] font-mono text-gray-400 group-hover:text-white transition-colors">
                   <span class="w-1 h-1 bg-accent/40 group-hover:bg-accent rounded-full transition-colors"></span>
                   {{ feature }}
                </div>
             </div>
             
             <a :href="getWhatsAppLink(service.title)" 
                target="_blank"
                class="flex items-center gap-2 px-6 py-2.5 border border-accent text-accent font-mono text-[13px] font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_25px_rgba(0,242,255,0.3)] group/wa">
                <MessageCircle class="w-4 h-4 transition-all duration-300 group-hover/wa:scale-110" />
                <span class="transition-colors duration-300">Cotizar</span>
             </a>
          </div>

          <!-- Esquina decorativa -->
          <div class="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-5 group-hover:opacity-20 transition-opacity">
            <svg viewBox="0 0 100 100" class="w-full h-full fill-accent">
                <path d="M 100 0 L 100 100 L 0 100 Z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}
</style>

