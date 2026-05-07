<script setup>
import { ShieldCheck, Zap, Activity } from 'lucide-vue-next'

const stats = [
    { label: 'Proyectos Entregados', value: '24', icon: Zap },
    { label: 'Disponibilidad Activa', value: '100%', icon: Activity },
    { label: 'Clientes Satisfechos', value: '15+', icon: ShieldCheck }
]
</script>

<template>
  <section class="relative bg-section-surface py-20 lg:py-28 overflow-hidden border-b border-white/5">
    
    <div class="section-glow-cyan glow-bottom-right"></div>

    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div v-for="stat in stats" :key="stat.label" class="card-border bg-section-dark p-10 flex flex-col items-center text-center relative group transition-colors hover:border-accent/30">
          
          <div class="w-16 h-16 rounded-xl bg-section-surface border border-white/10 flex items-center justify-center mb-6 transition-all group-hover:bg-accent/10 group-hover:border-accent/30">
            <component :is="stat.icon" class="w-8 h-8 text-accent opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
          </div>
          
          <div class="text-4xl md:text-5xl font-bold text-white mb-3">
              {{ stat.value }}
          </div>
          
          <div class="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-white transition-colors">
              {{ stat.label }}
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
  max-width: 1200px;
  margin: 0 auto;
}

.glow-bottom-right {
  width: 400px;
  height: 400px;
  bottom: -100px;
  right: -100px;
}
</style>
