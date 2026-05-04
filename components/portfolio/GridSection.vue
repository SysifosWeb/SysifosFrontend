<script setup>
import { ExternalLink, Database, Cpu, Globe } from 'lucide-vue-next'
import ansarImg from '@/assets/img/Ansar.jpeg';
import fareminImg from '@/assets/img/Faremin.jpeg';
import stahlformImg from '@/assets/img/StahlForm.jpeg';
import carmotorsImg from "@/assets/img/CarMotor's.png";
import webImage from '@/assets/img/web.webp';

const projects = [
    {
        id: 'PRJ_01',
        title: 'Ansar Automotriz',
        subtitle: 'Automotriz.',
        description: 'Sincronización masiva de inventario en tiempo real con motor de tasación algorítmico integrado.',
        engineering: 'Arquitectura Cloud-Native con balanceo de carga dinámico y CMS Headless optimizado.',
        stats: [
            { label: 'Perf_Score', value: '98%' },
            { label: 'Nodes_Sync', value: '50+' },
            { label: 'Conv_Rate', value: '30%' }
        ],
        image: ansarImg,
        link: 'https://ansarautomotriz.com/',
        stack: ['Laravel', 'Vue.js', 'MySQL'],
        bitrate: '4500kbps'
    },
    {
        id: 'PRJ_02',
        title: 'Maestranza Faremin',
        subtitle: 'Industrial.',
        description: 'Plataforma de gestión operativa y exhibición técnica para servicios metalmecánicos de alta precisión.',
        engineering: 'Sistema de catálogo dinámico con renderizado de activos industriales y optimización de carga LCP.',
        stats: [
            { label: 'Uptime', value: '99.9%' },
            { label: 'Load_Time', value: '0.8s' },
            { label: 'Assets', value: '200+' }
        ],
        image: fareminImg,
        link: '#',
        stack: ['VUE.JS', 'LARAVEL', 'POSTGRES'],
        bitrate: '3800kbps'
    },
    {
        id: 'PRJ_03',
        title: 'StahlForm',
        subtitle: 'Industrial Design.',
        description: 'Landing page de alta conversión optimizada para el sector de manufactura industrial de precisión.',
        engineering: 'Interfaz minimalista con carga perezosa de activos pesados y optimización de Core Web Vitals.',
        stats: [
            { label: 'LCP_Score', value: '0.9s' },
            { label: 'SEO', value: '100%' },
            { label: 'Conversion', value: '25%' }
        ],
        image: stahlformImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Vite'],
        bitrate: '3200kbps'
    },
    {
        id: 'PRJ_04',
        title: 'Carmotor\'s',
        subtitle: 'Digital Store.',
        description: 'Ecosistema de venta automotriz con integración de pasarelas de pago y gestión de flotas.',
        engineering: 'Integración API-First con proveedores externos y sistema de notificaciones push en tiempo real.',
        stats: [
            { label: 'Security', value: 'SSL+' },
            { label: 'Payments', value: 'API' },
            { label: 'SEO_Score', value: '95' }
        ],
        image: carmotorsImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Firebase'],
        bitrate: '5200kbps'
    }
]
</script>

<template>
  <section class="bg-[#05080a] pb-10">
    <div v-for="(project, index) in projects" :key="project.id" 
         class="relative py-24 lg:py-32 overflow-hidden border-b border-white/5">
      
      <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">
        
        <!-- Encabezado de Proyecto -->
        <div class="mb-16 lg:mb-24 flex flex-col items-start relative">
            <div class="flex items-center gap-3 mb-4 font-mono text-accent text-[10px] lg:text-sm tracking-[0.3em]">
                <span class="w-8 h-[1px] bg-accent"></span>
                CASE_STUDY // {{ project.id }}
            </div>
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              {{ project.title.split(' ')[0] }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">{{ project.title.split(' ').slice(1).join(' ') }}</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch" :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''">
            <!-- PANEL DE ANÁLISIS -->
            <div class="lg:col-span-5 flex flex-col space-y-6 lg:space-y-8" :class="index % 2 !== 0 ? 'lg:order-2' : ''">
                
                <!-- Desafío Module -->
                <div class="relative p-6 lg:p-8 bg-[#0a0e17]/40 border border-white/5 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500">
                    <h3 class="text-accent font-mono text-[9px] lg:text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Database class="w-4 h-4" /> 01_DESAFÍO_TÉCNICO
                    </h3>
                    <p class="text-gray-400 font-mono text-sm leading-relaxed">
                        {{ project.description }}
                    </p>
                </div>

                <!-- Solución Module -->
                <div class="relative p-6 lg:p-8 bg-[#0a0e17]/40 border border-white/5 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500">
                    <h3 class="text-accent font-mono text-[9px] lg:text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Cpu class="w-4 h-4" /> 02_SOLUCIÓN_INGENIERÍA
                    </h3>
                    <p class="text-gray-400 font-mono text-sm leading-relaxed">
                        {{ project.engineering }}
                    </p>
                </div>

                <!-- Stats Matrix -->
                <div class="grid grid-cols-3 gap-1 bg-[#0a0e17]/80 border border-white/5 p-1">
                    <div v-for="stat in project.stats" :key="stat.label" class="bg-[#05080a] p-4 lg:p-6 text-center">
                        <div class="text-xl lg:text-2xl font-bold text-white mb-1">{{ stat.value.replace('%', '').replace('+', '') }}<span class="text-accent">{{ stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : '' }}</span></div>
                        <div class="text-[8px] lg:text-[9px] font-mono text-gray-500 uppercase tracking-widest">{{ stat.label }}</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <a :href="project.link" target="_blank" class="flex items-center justify-center gap-4 py-4 bg-accent text-black border border-accent font-mono text-[12px] uppercase tracking-[0.4em] hover:bg-transparent hover:text-accent transition-all duration-300 group/btn">
                    EXPLORAR_DESPLIEGUE <ExternalLink class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </div>

            <!-- PROYECCIÓN VISUAL -->
            <div class="lg:col-span-7 relative group" :class="index % 2 !== 0 ? 'lg:order-1' : ''">
                <!-- HUD Overlays -->
                <div class="absolute inset-0 z-20 pointer-events-none border border-accent/10 group-hover:border-accent/40 transition-colors">
                    <div class="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent/30"></div>
                    <div class="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/30"></div>
                    <div class="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent/30"></div>
                    <div class="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent/30"></div>
                    
                    <div class="absolute top-0 left-0 w-full h-[1px] bg-accent/30 shadow-[0_0_15px_#00f2ff] animate-[scan_5s_linear_infinite]"></div>
                    
                    <div class="absolute top-8 left-8 font-mono text-[8px] text-accent/40 uppercase leading-relaxed">
                        Stream_Live: OK<br/>FPS: 60.0<br/>BITRATE: {{ project.bitrate }}
                    </div>
                </div>

                <!-- Main Visual -->
                <div class="relative overflow-hidden h-full min-h-[350px] lg:min-h-[500px] bg-[#0a0e17] border border-white/5">
                    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000" loading="lazy" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent opacity-60"></div>
                </div>

                <!-- Tech Stack Floating -->
                <div class="absolute -bottom-3 flex gap-2 z-30" :class="index % 2 !== 0 ? 'right-4' : 'left-4'">
                    <span v-for="tech in project.stack" :key="tech" 
                          class="px-3 py-1 bg-[#0a0e17] text-accent border border-accent/20 font-mono text-[9px] uppercase tracking-widest">
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(500px); opacity: 0; }
}

@media (min-width: 1024px) {
    @keyframes scan {
        0% { transform: translateY(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(600px); opacity: 0; }
    }
}
</style>
