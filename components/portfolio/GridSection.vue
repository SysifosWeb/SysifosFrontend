<script setup>
import { TrendingUp, ArrowRight } from 'lucide-vue-next'
import fareminImg from '@/assets/img/Faremin.jpeg';
import stahlformImg from '@/assets/img/StahlForm.jpeg';
import ansarImg from '@/assets/img/Ansar.jpeg';

const projects = [
    {
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
    <div v-for="(project, index) in projects" :key="project.title"
         class="relative py-12 lg:py-16 overflow-hidden">

      <div class="section-container relative z-10">
        
        <!-- Encabezado de Proyecto -->
        <div class="mb-10 lg:mb-12 flex flex-col items-start relative">
            <h2 class="project-title mb-4" v-reveal data-delay="100">
              {{ project.title }}
            </h2>
            <p class="project-description" v-reveal data-delay="200">{{ project.description }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center" :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''">
            
            <!-- PANEL DE ANÁLISIS -->
            <div class="lg:col-span-5 flex flex-col gap-8" :class="index % 2 !== 0 ? 'lg:order-2' : ''">
                
                <!-- Storytelling -->
                <div class="space-y-8">
                    <!-- Problema -->
                    <div v-reveal data-delay="200">
                        <h3 class="project-label">El desafío</h3>
                        <p class="project-copy">{{ project.problem }}</p>
                    </div>

                    <!-- Solución -->
                    <div v-reveal data-delay="300">
                        <h3 class="project-label">Nuestra solución</h3>
                        <p class="project-copy">{{ project.solution }}</p>
                    </div>

                    <!-- Resultado -->
                    <div v-reveal data-delay="400">
                        <h3 class="project-label project-label--accent flex items-center gap-2">
                            <TrendingUp class="w-4 h-4" /> Impacto de Negocio
                        </h3>
                        <p class="project-copy project-copy--strong">{{ project.result }}</p>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" v-reveal data-delay="500">
                    <div v-for="stat in project.stats" :key="stat.label" class="project-stat">
                        <div class="text-3xl font-black text-content mb-2 tracking-tight">{{ stat.value }}</div>
                        <div class="text-small text-subdued leading-snug">{{ stat.label }}</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="mt-6" v-reveal data-delay="600">
                    <a :href="project.link" target="_blank" class="cta-primary-btn w-full sm:w-auto justify-center">
                        Explorar caso completo <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <!-- PROYECCIÓN VISUAL -->
            <div class="lg:col-span-7 relative group" :class="index % 2 !== 0 ? 'lg:order-1' : ''" v-reveal data-delay="400">
                
                <!-- Main Visual -->
                <div class="impulso-closing project-visual relative overflow-hidden aspect-[4/3] bg-panel isolate">
                    <div class="project-visual__scrim"></div>
                    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                    
                    <!-- Stack Floating inside image -->
                    <div class="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2 z-20 pointer-events-none">
                        <span v-for="(tech, i) in project.stack" :key="tech" 
                              class="project-stack"
                              :class="i === project.stack.length - 1 ? 'project-stack--accent' : ''">
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
        <div class="impulso-closing portfolio-cta bg-section-dark p-12 lg:p-20 text-center">
            <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="section-title portfolio-cta__title mb-6">Construyamos tu plataforma.</h2>
                <p class="text-lead text-subdued mb-10">Deja de competir por precio y empieza a competir por innovación. Diseñamos ecosistemas digitales que transforman marcas y multiplican conversiones.</p>
                
                <NuxtLink to="/contacto" class="cta-primary-btn">
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

.project-title {
  font-size: var(--fs-h1);
  font-weight: var(--fw-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  color: var(--text-main);
}

.project-description { font-size: var(--fs-lead); color: var(--text-secondary); max-width: 42rem; }
.project-label { font-size: var(--fs-small); font-weight: var(--fw-semibold); color: var(--text-main); margin-bottom: 0.75rem; }
.project-label--accent { color: var(--accent); }
.project-copy { color: var(--text-secondary); line-height: var(--lh-body); }
.project-copy--strong { color: var(--text-main); font-weight: var(--fw-medium); }
.project-stat { background: var(--bg-surface); border-radius: var(--radius-md); padding: 1.25rem; }
.project-visual { border-radius: var(--radius-lg); }
.project-visual__scrim { position: absolute; inset: 45% 0 0; z-index: 1; pointer-events: none; background: rgba(16, 43, 70, 0.72); }
.project-stack { padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); background: var(--bg-surface); color: var(--text-main); font-size: var(--fs-small); font-weight: var(--fw-medium); }
.project-stack--accent { background: var(--accent); color: var(--button-text); }
.portfolio-cta { border-radius: var(--radius-lg); }
.portfolio-cta__title { max-inline-size: 22ch; margin-inline: auto; }
</style>
