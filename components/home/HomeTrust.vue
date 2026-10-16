<template>
  <section id="tecnologias" class="py-16 overflow-hidden relative bg-section-dark">
    <!-- Glow purple sutil -->
    <div class="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 pointer-events-none"
      style="background: radial-gradient(circle, var(--purple) 0%, transparent 70%); opacity: 0.1;" aria-hidden="true">
    </div>
    <div class="w-[88%] max-w-[1340px] mx-auto relative z-20">
      <div class="flex flex-col lg:flex-row items-center gap-12">

        <!-- Bloque de Texto Izquierda -->
        <div class="w-full lg:w-[380px] shrink-0 mb-12 lg:mb-0">
          <p class="section-eyebrow section-eyebrow--purple mb-4" v-reveal data-delay="0">Stack tecnológico</p>
          <div class="flex flex-col leading-tight" v-reveal data-delay="100">
            <span class="text-3xl lg:text-4xl font-bold"
              style="color: var(--text-main); letter-spacing: -0.025em; font-family: var(--font-heading);">Tecnología
              de</span>
            <span class="text-3xl lg:text-4xl font-bold"
              style="color: var(--accent); letter-spacing: -0.025em; font-family: var(--font-heading);">vanguardia.</span>
            <p class="mt-4 text-sm leading-relaxed max-w-[280px]" style="color: var(--text-secondary);">Construimos con
              las herramientas que usan las mejores empresas del mundo.</p>
          </div>
        </div>

        <!-- Carrusel Infinito -->
        <div class="tech-carousel relative w-full min-w-0 flex-1 overflow-hidden py-20" v-reveal data-delay="200">
          <div class="flex flex-nowrap w-max animate-slow-marquee hover:[animation-play-state:paused]">
            <!-- Dos sets idénticos son suficientes para un desplazamiento del -50% -->
            <div v-for="set in 2" :key="'set-' + set" class="flex flex-nowrap" :aria-hidden="set === 2 ? true : undefined">
              <div v-for="(tech, index) in technologies" :key="index + '-' + set"
                class="tech-item relative shrink-0 flex flex-col items-center justify-center w-[160px] lg:w-[240px] transition-all duration-300">

                <img :src="tech.logo" :alt="set === 1 ? tech.fullName : ''"
                  class="tech-logo h-12 lg:h-16 w-auto max-w-[100px] object-contain" width="100" height="64"
                  decoding="async" />

                <div
                  class="tech-name absolute -bottom-9 left-1/2 -translate-x-1/2 text-[14px] font-bold text-content tracking-[0.12em] text-center whitespace-nowrap uppercase"
                  aria-hidden="true">
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </div>

          <!-- Degradados laterales -->
          <div class="absolute inset-y-0 right-0 w-32 to-transparent z-10 pointer-events-none"
            style="background: linear-gradient(to left, var(--bg-dark), transparent);" aria-hidden="true"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: 'NUXT', fullName: 'Nuxt.js', logo: '/img/tech/nuxt.svg' },
  { name: 'VUE', fullName: 'Vue.js', logo: '/img/tech/Vue.js.png' },
  { name: 'REACT', fullName: 'React', logo: '/img/tech/React.png' },
  { name: 'NODE', fullName: 'Node.js', logo: '/img/tech/Node.js.png' },
  { name: 'TYPESCRIPT', fullName: 'TypeScript', logo: '/img/tech/typescript.svg' },
  { name: 'TAILWIND', fullName: 'Tailwind CSS', logo: '/img/tech/tailwind.svg' },
  { name: 'LARAVEL', fullName: 'Laravel', logo: '/img/tech/Laravel.png' },
  { name: 'AWS', fullName: 'Amazon Web Services', logo: '/img/tech/aws.svg' }
]
</script>

<style scoped>
@keyframes slow-marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-slow-marquee {
  animation: slow-marquee 30s linear infinite;
}

.tech-logo { filter: brightness(0.7) saturate(1.1); opacity: 1; }
.tech-carousel:hover .animate-slow-marquee,
.tech-carousel:focus-within .animate-slow-marquee { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .tech-carousel { overflow-x: auto; }
  .animate-slow-marquee { animation: none; }
}
</style>
