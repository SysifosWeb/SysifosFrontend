<template>
  <section class="relative py-16 lg:py-20 overflow-hidden bg-section-dark">

    <!-- Glow cyan top-right -->
    <div class="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none" style="background: var(--accent); opacity: 0.07; filter: blur(130px);"></div>
    <div class="relative z-10 w-[88%] max-w-[1340px] mx-auto">

      <!-- Header de sección -->
      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-lg">
          <div class="eyebrow-badge mx-auto mb-6">
            <span class="eyebrow-badge__dot"></span>
            <span class="eyebrow-badge__text">Testimonios</span>
          </div>
          <h2 class="section-title text-3xl md:text-4xl">
            Empresas que confiaron<br class="hidden md:block"/> en nosotros y crecieron.
          </h2>
        </div>
        <!-- Rating global -->
        <div class="flex flex-col items-start md:items-end gap-1 shrink-0">
          <div class="flex items-center gap-1">
            <svg v-for="s in 5" :key="s" class="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-xs text-muted">5.0 · 98% clientes satisfechos</p>
        </div>
      </div>

      <!-- Grid de testimonios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="(t, index) in testimonials" :key="index"
             class="testimonial-card relative flex flex-col p-8 rounded-2xl bg-section-dark"
             style="border: 1px solid rgba(255,255,255,0.07);">

          <!-- Comillas decorativas -->
          <div class="text-5xl font-serif leading-none mb-5 select-none"
               style="color: rgba(56,189,248,0.2); font-family: Georgia, serif; line-height: 1;">"</div>

          <!-- Texto del testimonio -->
          <p class="text-[0.95rem] leading-[1.75] mb-8 flex-1" style="color: var(--text-secondary);">
            {{ t.text }}
          </p>

          <!-- Resultado destacado -->
          <div class="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-6"
               style="background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.15);">
            <svg class="w-3.5 h-3.5 shrink-0" style="color: #34D399;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="text-xs font-semibold" style="color: #34D399;">{{ t.result }}</span>
          </div>

          <!-- Autor -->
          <div class="flex items-center gap-3 pt-5" style="border-top: 1px solid rgba(255,255,255,0.06);">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                 :style="{ background: t.avatarBg, color: '#fff' }">
              {{ t.initials }}
            </div>
            <div>
              <p class="text-sm font-semibold leading-none mb-0.5" style="color: var(--text-main);">{{ t.name }}</p>
              <p class="text-xs" style="color: var(--text-muted);">{{ t.company }}</p>
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
    name: 'María Rodríguez',
    initials: 'MR',
    company: 'Gerente General · Tech Solutions Corp',
    text: 'Antes tenía una web que no me traía nada. Desde que trabajamos con SysifosWeb, nuestras consultas online se triplicaron. El equipo entendió exactamente lo que necesitaba.',
    result: 'Consultas online triplicadas en 3 meses',
    avatarBg: 'linear-gradient(135deg, #38BDF8, #6366F1)'
  },
  {
    name: 'Carlos López',
    initials: 'CL',
    company: 'Founder · Innovatech',
    text: 'Lanzamos nuestra tienda online en tiempo récord. La plataforma es fácil de manejar y nuestras ventas crecieron un 40% en el primer trimestre.',
    result: '+40% en ventas en el primer trimestre',
    avatarBg: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
  },
  {
    name: 'Ana Silva',
    initials: 'AS',
    company: 'Directora de Operaciones · Global Systems',
    text: 'El sistema que desarrollaron nos ahorró horas de trabajo manual cada semana. Ahora nuestro equipo se enfoca en lo que realmente importa.',
    result: 'Ahorro de 12+ horas de trabajo semanal',
    avatarBg: 'linear-gradient(135deg, #34D399, #38BDF8)'
  }
]
</script>

<style scoped>
.testimonial-card {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.12) !important;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}
</style>
