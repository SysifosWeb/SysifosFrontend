<template>
  <section id="servicios" class="relative py-16 lg:py-24 bg-[#050810] overflow-hidden">
    <CircuitBackground />
    
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">
      
      <!-- Background Complementario (Diferente al Header) -->
      <div class="absolute inset-0 pointer-events-none -z-10 opacity-10">
         <svg viewBox="0 0 800 600" class="w-full h-full transform scale-150 rotate-12">
            <g class="circuit-anim">
               <path v-for="n in 8" :key="'c-'+n" 
                     :d="generateCircuitPath(n)" 
                     fill="none" 
                     stroke="#00f2ff" 
                     stroke-width="0.5" 
                     class="circuit-line" />
            </g>
         </svg>
      </div>

      <!-- Header Seccion -->
      <div class="text-center mb-24">
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter font-tech mb-6">
          Nuestros <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Servicios.</span>
        </h2>
        <p class="text-[14px] md:text-xs text-gray-300 uppercase tracking-[0.4em] font-medium max-w-xl mx-auto opacity-70">
          Módulos de ingeniería digital diseñados para escalar.
        </p>
      </div>

      <!-- Grid de Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="(service, index) in services" :key="index" 
             class="group relative p-12 bg-[#0b101d]/60 backdrop-blur-sm border border-white/[0.03] rounded-3xl transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,242,255,0.05)]">
          
          <!-- Icono Diagrama -->
          <div class="mb-12">
             <component :is="service.icon" class="w-10 h-10 text-accent opacity-80" stroke-width="1" />
          </div>

          <h3 class="text-xl font-bold text-white mb-6 font-tech uppercase tracking-wide">
            {{ service.title }}
          </h3>

          <p class="text-xs text-gray-300 leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
            {{ service.description }}
          </p>

          <ul class="space-y-3 mb-12">
            <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-center gap-3 text-[15px] text-gray-300 uppercase tracking-widest font-tech">
              <span class="w-1 h-1 rounded-full bg-accent opacity-40"></span>
              {{ feature }}
            </li>
          </ul>

          <div class="pt-8 border-t border-white/[0.05]">
            <NuxtLink :to="'/contacto'" class="inline-flex items-center gap-2 text-[15px] font-bold text-accent uppercase tracking-widest hover:text-white transition-colors group/btn">
              <span>Solicitar Cotización</span>
              <div class="w-4 h-[1px] bg-accent group-hover/btn:w-8 transition-all"></div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Boton Final (Estilo Header) -->
      <div class="mt-24 text-center">
        <NuxtLink to="/servicios" class="group relative inline-block px-12 py-5 bg-white/5 border border-accent/30 text-white font-bold uppercase tracking-[0.3em] text-[14px] overflow-hidden transition-all hover:bg-accent hover:text-[#0a0e17] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] font-tech">
          <span class="relative z-10">Ver Todos Nuestros Servicios</span>
          <div class="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </NuxtLink>
      </div>
    </div>

  </section>
</template>

<script setup>
import { 
  Zap,
  ShoppingCart,
  Layout
} from 'lucide-vue-next'

const services = [
  {
    title: 'Landing de Conversión',
    description: 'Arquitecturas de una sola página optimizadas para maximizar el ratio de captura de leads y conversión inmediata.',
    icon: Zap,
    features: ['Optimización Conversiva', 'Integración CRM/API', 'Estructura SEO Base']
  },
  {
    title: 'E-Commerce Modular',
    description: 'Desarrollo de ecosistemas transaccionales con pasarelas de pago blindadas y gestión automatizada de activos.',
    icon: ShoppingCart,
    features: ['Payment Gateways', 'Stock Tracking', 'Logística Integrada']
  },
  {
    title: 'Ecosistema Corporativo',
    description: 'Infraestructura web para organizaciones que requieren una presencia sólida, administrable y escalable globalmente.',
    icon: Layout,
    features: ['CMS Customizado', 'Core Responsive', 'Escalabilidad Multi-Nodo']
  }
]

const generateCircuitPath = (n) => {
  const yBase = 100 + (n * 60);
  let path = `M 0 ${yBase} `;
  path += `L ${100 + n * 20} ${yBase} `;
  path += `L ${150 + n * 20} ${yBase - 50} `;
  path += `L ${400 + n * 10} ${yBase - 50} `;
  path += `L ${450 + n * 10} ${yBase} `;
  path += `L 800 ${yBase} `;
  return path;
}
</script>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}

.circuit-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: circuit-draw 15s linear infinite;
  opacity: 0.3;
}

@keyframes circuit-draw {
  0% { stroke-dashoffset: 1000; opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

.circuit-anim {
  animation: circuit-float 30s ease-in-out infinite;
}

@keyframes circuit-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
}
</style>
