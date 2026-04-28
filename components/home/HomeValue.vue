<template>
  <section class="py-24 lg:py-32 bg-[#05070a] relative overflow-hidden">
    
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">
      <div class="text-center mb-24">
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter font-tech mb-6">
          Nuestro Proceso <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Operativo.</span>
        </h2>
        <p class="text-[14px] md:text-xs text-gray-300 uppercase tracking-[0.4em] font-medium max-w-xl mx-auto opacity-70">
          Metodología de ingeniería para despliegues de alta precisión.
        </p>
      </div>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div v-for="(step, index) in steps" :key="index" class="relative group">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 transition-all duration-500 group-hover:neon-border group-hover:bg-accent/10 relative z-10">
                <component :is="step.icon" class="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
                <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#05070a] border border-white/10 flex items-center justify-center text-[14px] font-bold text-accent font-tech">
                  0{{ index + 1 }}
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-white uppercase tracking-widest font-tech mb-4 group-hover:text-accent transition-colors">
                {{ step.title }}
              </h3>
              
              <p class="text-text-muted text-xs leading-relaxed uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity max-w-[220px]">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Search, 
  PenTool, 
  Terminal, 
  CheckCircle 
} from 'lucide-vue-next'

const steps = [
  {
    title: 'Análisis',
    description: 'Entendemos sus necesidades y objetivos para trazar la estrategia perfecta.',
    icon: Search
  },
  {
    title: 'Diseño',
    description: 'Creamos prototipos y arquitecturas que reflejan la identidad de su visión.',
    icon: PenTool
  },
  {
    title: 'Desarrollo',
    description: 'Implementamos soluciones escalables usando protocolos y lenguajes de vanguardia.',
    icon: Terminal
  },
  {
    title: 'Entrega',
    description: 'Despliegue de sistemas con protocolos de seguridad y soporte continuo.',
    icon: CheckCircle
  }
]
</script>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}
</style>
