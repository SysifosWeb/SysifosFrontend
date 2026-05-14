<script setup>
import { TrendingUp, ArrowRight } from 'lucide-vue-next'
import fareminImg from '@/assets/img/Faremin.jpeg';
import stahlformImg from '@/assets/img/StahlForm.jpeg';
import ansarImg from '@/assets/img/Ansar.jpeg';

const projects = [
    {
        id: '01',
        title: 'Maestranza Faremin',
        description: 'Plataforma B2B para industria metalmecánica de alta precisión.',
        problem: 'Operaciones dependientes de procesos manuales, dificultad para exhibir capacidad técnica a clientes internacionales y cuellos de botella en la adquisición de clientes corporativos.',
        solution: 'Desarrollamos una plataforma de gestión operativa y exhibición técnica, implementando un catálogo dinámico con renderizado de activos y optimización extrema de carga LCP.',
        result: 'Posicionamiento instantáneo como líder tecnológico en su sector, abriendo nuevas líneas de negocio internacionales gracias a una infraestructura digital escalable.',
        stats: [
            { label: 'Uptime Operacional', value: '99.9%' },
            { label: 'Tiempo de Carga', value: '0.8s' },
            { label: 'Activos Digitalizados', value: '200+' }
        ],
        image: fareminImg,
        link: '#',
        stack: ['Vue.js', 'Laravel', 'PostgreSQL', 'Performance-First'],
    },
    {
        id: '02',
        title: 'StahlForm',
        description: 'Infraestructura web de alta conversión para manufactura.',
        problem: 'Falta de presencia digital alineada con la calidad de sus servicios premium de manufactura, resultando en una baja tasa de captura de leads calificados.',
        solution: 'Diseñamos y construimos una landing page estratégica, utilizando una arquitectura estática moderna para garantizar métricas perfectas de Core Web Vitals.',
        result: 'Incremento exponencial en la captación de prospectos B2B y posicionamiento premium en canales digitales, dominando la percepción frente a su competencia directa.',
        stats: [
            { label: 'Score Web Vitals', value: '100/100' },
            { label: 'Optimización SEO', value: 'Perfecta' },
            { label: 'Aumento en Conversión', value: '25%' }
        ],
        image: stahlformImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Vite', 'SEO Optimized'],
    },
    {
        id: '03',
        title: 'Ansar Automotriz',
        description: 'Plataforma digital integral para gestión y venta automotriz.',
        problem: 'Canales de venta digitales fragmentados y falta de una plataforma centralizada que brindara una experiencia de usuario premium al nivel de su inventario.',
        solution: 'Arquitecturamos un ecosistema completo con integración de catálogo en tiempo real, utilizando una aproximación API-First con notificaciones dinámicas.',
        result: 'Modernización del flujo de ventas y cotizaciones, reduciendo dramáticamente la fricción en la compra y elevando el estándar digital en su mercado.',
        stats: [
            { label: 'Tasa de Disponibilidad', value: 'Alta' },
            { label: 'Arquitectura', value: 'API-First' },
            { label: 'Performance', value: '95/100' }
        ],
        image: ansarImg,
        link: '#',
        stack: ['Nuxt 3', 'Tailwind', 'Firebase', 'Secure Platform'],
    }
]
</script>

<template>
  <section class="bg-section-dark pb-20">
    <div v-for="(project, index) in projects" :key="project.id" 
         class="relative py-10 lg:py-12 overflow-hidden group/section">
      
      <!-- Subtle background gradient per project -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      <div class="section-container relative z-10">
        
        <!-- Encabezado de Proyecto -->
        <div class="mb-10 lg:mb-12 flex flex-col items-start relative">
            <div class="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent" v-reveal data-delay="0">
                <span class="w-8 h-[1px] bg-accent/50"></span>
                CASO DE ESTUDIO {{ project.id }}
            </div>
            <h2 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4" v-reveal data-delay="100">
              {{ project.title.split(' ')[0] }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{{ project.title.split(' ').slice(1).join(' ') }}</span>
            </h2>
            <p class="text-xl text-white/50 font-medium max-w-2xl" v-reveal data-delay="200">{{ project.description }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center" :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''">
            
            <!-- PANEL DE ANÁLISIS -->
            <div class="lg:col-span-5 flex flex-col gap-8" :class="index % 2 !== 0 ? 'lg:order-2' : ''">
                
                <!-- Storytelling -->
                <div class="space-y-8">
                    <!-- Problema -->
                    <div v-reveal data-delay="200">
                        <h3 class="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">El Desafío</h3>
                        <p class="text-white/80 leading-relaxed font-medium">{{ project.problem }}</p>
                    </div>

                    <!-- Solución -->
                    <div v-reveal data-delay="300">
                        <h3 class="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">Nuestra Solución</h3>
                        <p class="text-white/80 leading-relaxed font-medium">{{ project.solution }}</p>
                    </div>

                    <!-- Resultado -->
                    <div v-reveal data-delay="400">
                        <h3 class="text-sm font-bold uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
                            <TrendingUp class="w-4 h-4" /> Impacto de Negocio
                        </h3>
                        <p class="text-white leading-relaxed font-semibold">{{ project.result }}</p>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" v-reveal data-delay="500">
                    <div v-for="stat in project.stats" :key="stat.label" class="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col justify-center transition-all hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1">
                        <div class="text-3xl font-black text-white mb-2 tracking-tight">{{ stat.value }}</div>
                        <div class="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-snug">{{ stat.label }}</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="mt-6" v-reveal data-delay="600">
                    <a :href="project.link" target="_blank" class="inline-flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 group hover:shadow-[0_0_30px_rgba(var(--color-accent),0.3)] w-full sm:w-auto">
                        Explorar caso completo <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <!-- PROYECCIÓN VISUAL -->
            <div class="lg:col-span-7 relative group" :class="index % 2 !== 0 ? 'lg:order-1' : ''" v-reveal data-delay="400">
                
                <!-- Ambient Glow behind image -->
                <div class="absolute inset-0 bg-accent/20 blur-[80px] rounded-full transform scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <!-- Main Visual -->
                <div class="relative overflow-hidden aspect-[4/3] rounded-[2rem] border border-white/10 shadow-2xl bg-[#0a0e17] transform transition-transform duration-700 group-hover:-translate-y-2 isolate" style="-webkit-mask-image: -webkit-radial-gradient(white, black);">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none rounded-[2rem]"></div>
                    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" loading="lazy" />
                    
                    <!-- Stack Floating inside image -->
                    <div class="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2 z-20 pointer-events-none">
                        <span v-for="(tech, i) in project.stack" :key="tech" 
                              class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition-colors"
                              :class="i === project.stack.length - 1 ? 'bg-accent/20 text-accent border-accent/30' : 'bg-white/10 text-white/90 border-white/10'">
                            {{ tech }}
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>

    <!-- CTA Final Section -->
    <div class="section-container relative z-10 mt-20" v-reveal data-delay="200">
        <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-12 lg:p-20 text-center backdrop-blur-sm transition-colors hover:border-white/20">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-accent/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
            
            <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Construyamos tu próxima <br class="hidden md:block" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">plataforma digital.</span></h2>
                <p class="text-lg md:text-xl text-white/60 font-medium mb-10">Deja de competir por precio y empieza a competir por innovación. Diseñamos ecosistemas digitales que transforman marcas y multiplican conversiones.</p>
                
                <NuxtLink to="/contacto" class="inline-flex items-center justify-center gap-3 bg-accent text-white font-bold py-5 px-10 rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--color-accent),0.4)] hover:-translate-y-1">
                    Iniciar Proyecto
                    <ArrowRight class="w-5 h-5" />
                </NuxtLink>
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
