<script setup>
import { ShieldCheck, Zap, Activity } from 'lucide-vue-next'

const stats = [
    { label: 'PROYECTOS_DESPLEGADOS', value: '24', icon: Zap },
    { label: 'NODOS_ACTIVOS_24/7', value: '100%', icon: Activity },
    { label: 'CLIENTES_CERTIFICADOS', value: '15+', icon: ShieldCheck }
]
</script>

<template>
  <section class="relative bg-[#05080a] pt-10 pb-20 overflow-hidden border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div v-for="stat in stats" :key="stat.label" class="relative group p-1 bg-gradient-to-br from-white/10 to-transparent">
          <div class="bg-[#0a0e17] p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 group-hover:bg-[#0c121e]">
            
            <!-- Icon Background Glow -->
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-accent opacity-0 group-hover:opacity-10 blur-3xl transition-opacity"></div>
            
            <component :is="stat.icon" class="w-8 h-8 text-accent mb-6 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110" />
            
            <div class="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {{ stat.value }}
            </div>
            
            <div class="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] group-hover:text-accent transition-colors">
                {{ stat.label }}
            </div>

            <!-- Scanning Line -->
            <div class="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
