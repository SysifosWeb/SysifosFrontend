<template>
  <section class="py-24 lg:py-32 bg-[#050810] overflow-hidden relative">
    <!-- Fondo de Conectividad (Network Plexus) -->
    <NetworkBackground />
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">

      <!-- Header Seccion -->
      <div class="text-center mb-24">
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter font-tech mb-6">
          Lo que Dicen de <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Nosotros.</span>
        </h2>
        <p class="text-[14px] md:text-xs text-gray-300 uppercase tracking-[0.4em] font-medium max-w-xl mx-auto opacity-70">
          Validación técnica de nuestros protocolos de implementación.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" 
             class="group p-12 bg-[#0b101d]/60 backdrop-blur-sm rounded-3xl border border-white/[0.03] transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,242,255,0.05)]">
          
          <!-- Estrellas de Valoración Agrandadas -->
          <div class="mb-10 flex gap-1.5">
             <div v-for="s in 5" :key="s" class="w-5 h-5 text-accent/40 group-hover:text-accent transition-all duration-500 transform group-hover:scale-110">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
             </div>
          </div>

          <p class="text-gray-300 text-[15px] italic font-light leading-relaxed mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
            "{{ testimonial.text }}"
          </p>

          <div class="flex items-center gap-5 pt-10 border-t border-white/[0.05]">
             <div class="w-10 h-10 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent font-bold font-tech text-[14px] tracking-widest uppercase">
                {{ testimonial.initials }}
             </div>
             <div>
                <h4 class="text-white font-bold text-[14px] uppercase tracking-widest font-tech">{{ testimonial.name }}</h4>
                <p class="text-[8px] text-gray-300 uppercase tracking-[0.2em] mt-1">{{ testimonial.company }}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Maria Rodriguez',
    initials: 'MR',
    company: 'Tech Solutions Corp',
    text: 'SysifosWeb transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas.'
  },
  {
    name: 'Carlos Lopez',
    initials: 'CL',
    company: 'Innovatech Ltda',
    text: 'La aplicación móvil que desarrollaron aumentó nuestras ventas en un 40%. Excelente trabajo y comunicación constante.'
  },
  {
    name: 'Ana Silva',
    initials: 'AS',
    company: 'Global Systems',
    text: 'El sistema ERP personalizado revolucionó nuestra gestión interna. Ahora todo es más eficiente y tenemos un control total de los procesos.'
  }
]
</script>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}

.network-group {
  animation: net-float 40s ease-in-out infinite;
}

@keyframes net-float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-30px, 20px) rotate(2deg); }
}

.node-point {
  animation: pulse-node 4s ease-in-out infinite alternate;
}

@keyframes pulse-node {
  from { opacity: 0.2; r: 1; }
  to { opacity: 0.6; r: 2.5; }
}

.node-link {
  opacity: 0.1;
  animation: fade-link 6s ease-in-out infinite alternate;
}

@keyframes fade-link {
  from { opacity: 0.05; }
  to { opacity: 0.2; }
}
</style>
