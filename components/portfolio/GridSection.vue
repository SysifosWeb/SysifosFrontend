<script setup>
import { ExternalLink, Database, Cpu } from 'lucide-vue-next'
import fareminImg from '@/assets/img/Faremin.jpeg';
import stahlformImg from '@/assets/img/StahlForm.jpeg';
import carmotorsImg from "@/assets/img/CarMotor's.png";

const projects = [
    {
        id: '01',
        title: 'Maestranza Faremin',
        description: 'Plataforma de gestión operativa y exhibición técnica para servicios metalmecánicos de alta precisión.',
        engineering: 'Sistema de catálogo dinámico con renderizado de activos industriales y optimización de carga LCP.',
        stats: [
            { label: 'Uptime', value: '99.9%' },
            { label: 'Load Time', value: '0.8s' },
            { label: 'Activos', value: '200+' }
        ],
        image: fareminImg,
        link: '#',
        stack: ['Vue.js', 'Laravel', 'PostgreSQL'],
    },
    {
        id: '02',
        title: 'StahlForm',
        description: 'Landing page de alta conversión optimizada para el sector de manufactura industrial de precisión.',
        engineering: 'Interfaz minimalista con carga perezosa de activos pesados y optimización estricta de Core Web Vitals.',
        stats: [
            { label: 'LCP Score', value: '0.9s' },
            { label: 'SEO', value: '100%' },
            { label: 'Conversión', value: '25%' }
        ],
        image: stahlformImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Vite'],
    },
    {
        id: '03',
        title: 'Carmotor\'s',
        description: 'Ecosistema de venta automotriz con integración de pasarelas de pago y gestión de flotas.',
        engineering: 'Integración API-First con proveedores externos y sistema de notificaciones push en tiempo real.',
        stats: [
            { label: 'Seguridad', value: 'SSL+' },
            { label: 'Pagos', value: 'API' },
            { label: 'SEO Score', value: '95' }
        ],
        image: carmotorsImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Firebase'],
    }
]
</script>

<template>
  <section class="bg-section-dark pb-20">
    <div v-for="(project, index) in projects" :key="project.id" 
         class="relative py-20 lg:py-28 overflow-hidden border-b border-white/5 last:border-b-0">
      
      <div class="section-container relative z-10">
        
        <!-- Encabezado de Proyecto -->
        <div class="mb-12 lg:mb-16 flex flex-col items-start relative">
            <div class="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="w-6 h-[1px] bg-muted/50"></span>
                PROYECTO {{ project.id }}
            </div>
            <h2 class="section-title text-4xl md:text-5xl lg:text-6xl">
              {{ project.title.split(' ')[0] }} <span class="text-purple">{{ project.title.split(' ').slice(1).join(' ') }}</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch" :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''">
            
            <!-- PANEL DE ANÁLISIS (Izquierda o Derecha dependiendo de index) -->
            <div class="lg:col-span-5 flex flex-col gap-6" :class="index % 2 !== 0 ? 'lg:order-2' : ''">
                
                <!-- Desafío Module -->
                <div class="card-border bg-section-surface p-8 flex flex-col group transition-colors hover:border-purple/20">
                    <h3 class="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 text-muted">
                        <Database class="w-4 h-4 text-purple" /> DESAFÍO TÉCNICO
                    </h3>
                    <p class="card-text text-sm leading-relaxed">
                        {{ project.description }}
                    </p>
                </div>

                <!-- Solución Module -->
                <div class="card-border bg-section-surface p-8 flex flex-col group transition-colors hover:border-purple/20">
                    <h3 class="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 text-muted">
                        <Cpu class="w-4 h-4 text-purple" /> SOLUCIÓN INGENIERÍA
                    </h3>
                    <p class="card-text text-sm leading-relaxed">
                        {{ project.engineering }}
                    </p>
                </div>

                <!-- Stats Matrix -->
                <div class="grid grid-cols-3 gap-4 mt-2">
                    <div v-for="stat in project.stats" :key="stat.label" class="card-border bg-section-surface p-5 flex flex-col items-center justify-center text-center">
                        <div class="text-2xl font-bold text-white mb-1">{{ stat.value.replace('%', '').replace('+', '') }}<span class="text-purple">{{ stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : '' }}</span></div>
                        <div class="text-[10px] font-semibold text-muted uppercase tracking-wider">{{ stat.label }}</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="mt-4">
                    <a :href="project.link" target="_blank" class="cta-ghost w-full justify-center py-4 border border-white/10 hover:border-white/20">
                        Ver Detalles <ExternalLink class="w-4 h-4" />
                    </a>
                </div>
            </div>

            <!-- PROYECCIÓN VISUAL (Derecha o Izquierda dependiendo de index) -->
            <div class="lg:col-span-7 relative group flex flex-col" :class="index % 2 !== 0 ? 'lg:order-1' : ''">
                
                <!-- Main Visual -->
                <div class="relative overflow-hidden h-full min-h-[400px] rounded-2xl border border-white/10 shadow-xl bg-section-surface">
                    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    
                    <!-- Gradient Overlay Bottom -->
                    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/40 to-transparent opacity-90"></div>

                    <!-- Tech Stack Floating inside image -->
                    <div class="absolute bottom-6 flex flex-wrap gap-2 z-30" :class="index % 2 !== 0 ? 'right-6' : 'left-6'">
                        <span v-for="(tech, i) in project.stack" :key="tech" 
                              class="px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-colors"
                              :class="i === 0 ? 'bg-purple text-white' : 'bg-[#0a0e17] text-white border border-white/10'">
                            {{ tech }}
                        </span>
                    </div>
                </div>
                
            </div>
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
</style>
