<script setup>
import { Monitor, Smartphone, LayoutTemplate, Settings, ShieldCheck, Database, Cpu, Globe, MessageCircle } from 'lucide-vue-next'

const services = [
  {
    id: '01',
    title: 'Landing Pages',
    description: 'Interfaces de alto impacto',
    longDesc: 'Diseñamos arquitecturas de una sola página con enfoque en User Experience y Performance, integrando herramientas de captura de leads.',
    icon: Monitor,
    features: ['Diseño Responsive', 'Optimización SEO'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: '02',
    title: 'E-commerce',
    description: 'Ecosistemas transaccionales',
    longDesc: 'Desarrollamos tiendas online con pasarelas de pago cifradas, gestión automatizada de inventarios y sistemas de logística integrados.',
    icon: Smartphone,
    features: ['Pagos Cifrados', 'Stock Automático'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: '03',
    title: 'Software a Medida',
    description: 'Ingeniería para procesos',
    longDesc: 'Construimos soluciones personalizadas que automatizan flujos de trabajo operativos y optimizan el manejo de grandes volúmenes de datos.',
    icon: Cpu,
    features: ['Arquitectura Limpia', 'API First'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: '04',
    title: 'One Page Sites',
    description: 'Navegación fluida',
    longDesc: 'Sitios integrales concentrados en una sola página, ideales para portafolios o lanzamientos que requieren rapidez e impacto visual.',
    icon: LayoutTemplate,
    features: ['Scroll Infinito', 'Carga Rápida'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: '05',
    title: 'Plataformas Web',
    description: 'Infraestructura corporativa',
    longDesc: 'Sistemas extensos con gestión de roles, CMS de grado empresarial y optimización para altos volúmenes de tráfico concurrente.',
    icon: Globe,
    features: ['Multi-idioma', 'Panel Admin'],
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: '06',
    title: 'Bases de Datos',
    description: 'Gestión de activos',
    longDesc: 'Diseño y mantenimiento de estructuras de datos relacionales y NoSQL, garantizando integridad y velocidad de consulta.',
    icon: Database,
    features: ['Migración Segura', 'Consultas High-Speed'],
    gridClass: 'lg:col-span-2 lg:row-span-1'
  }
]

const getWhatsAppLink = (serviceTitle) => {
  const message = encodeURIComponent(`Hola SysifosWeb, me gustaría obtener más información sobre el servicio de ${serviceTitle}.`);
  return `https://wa.me/56949109970?text=${message}`;
}
</script>

<template>
  <section class="relative bg-section-surface py-20 lg:py-28 overflow-hidden">
    
    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div v-for="service in services" :key="service.id" 
             :class="[service.gridClass, 'service-card card-border group relative bg-section-dark flex flex-col transition-all duration-300 hover:shadow-2xl']">
          
          <div class="absolute top-6 right-6 font-semibold text-xs text-muted">
            [{{ service.id }}]
          </div>
          
          <div class="mb-8">
            <div class="w-12 h-12 rounded-xl border border-white/10 bg-section-surface flex items-center justify-center transition-colors group-hover:border-accent/30 group-hover:bg-accent/5">
                <component :is="service.icon" class="w-6 h-6 text-accent" />
            </div>
          </div>

          <div class="flex-grow">
            <h3 class="card-title text-xl mb-2">{{ service.title }}</h3>
            <p class="text-xs font-semibold uppercase tracking-wider text-accent mb-4">{{ service.description }}</p>
            <p class="card-text text-sm mb-8 line-clamp-3">{{ service.longDesc }}</p>
          </div>

          <div class="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
             <div class="flex flex-wrap gap-3">
                <div v-for="feature in service.features" :key="feature" 
                     class="text-xs text-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                   {{ feature }}
                </div>
             </div>
             
             <a :href="getWhatsAppLink(service.title)" target="_blank" class="cta-ghost text-xs py-2 px-4 whitespace-nowrap group/wa">
                <MessageCircle class="w-3.5 h-3.5 group-hover/wa:scale-110 transition-transform" />
                Cotizar
             </a>
          </div>
          
          <!-- Hover glow -->
          <div class="card-hover-glow"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;
}

.service-card {
  padding: 2rem;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.2);
}
</style>
