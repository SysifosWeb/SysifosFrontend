<template>
  <section id="tecnologias" class="trust-section bg-section-dark" aria-labelledby="home-tech-title">
    <div class="section-container">
      <div class="trust-layout">
        <div class="trust-copy" v-reveal data-delay="0">
          <h2 id="home-tech-title" class="trust-title">
            Stack probado en <span class="text-accent">producción real.</span>
          </h2>
          <p class="trust-desc">
            Elegimos herramientas estables, rápidas y mantenibles a largo plazo para que tu sistema funcione sin dependencias frágiles.
          </p>
        </div>

        <div class="tech-carousel" v-reveal data-delay="120">
          <div class="flex flex-nowrap w-max animate-slow-marquee">
            <div v-for="set in 2" :key="'set-' + set" class="flex flex-nowrap" :aria-hidden="set === 2 ? true : undefined">
              <div v-for="(tech, index) in technologies" :key="index + '-' + set" class="tech-item">
                <img :src="tech.logo" :alt="set === 1 ? tech.fullName : ''"
                  class="tech-logo" width="96" height="56" decoding="async" loading="lazy" />
                <span class="tech-name" aria-hidden="true">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: 'Nuxt', fullName: 'Nuxt.js', logo: '/img/tech/nuxt.svg' },
  { name: 'Vue', fullName: 'Vue.js', logo: '/img/tech/Vue.js.webp' },
  { name: 'React', fullName: 'React', logo: '/img/tech/React.webp' },
  { name: 'Node.js', fullName: 'Node.js', logo: '/img/tech/Node.js.webp' },
  { name: 'TypeScript', fullName: 'TypeScript', logo: '/img/tech/typescript.svg' },
  { name: 'Tailwind', fullName: 'Tailwind CSS', logo: '/img/tech/tailwind.svg' },
  { name: 'Laravel', fullName: 'Laravel', logo: '/img/tech/Laravel.webp' },
  { name: 'AWS', fullName: 'Amazon Web Services', logo: '/img/tech/aws.svg' }
]
</script>

<style scoped>
.trust-section {
  padding: clamp(3.5rem, 6vw, 5rem) 0;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.trust-layout {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.trust-copy {
  max-width: 24rem;
}

.trust-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 1.3rem + 0.8vw, 2rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--text-main);
  margin: 0 0 0.75rem;
}

.trust-desc {
  font-size: var(--fs-small);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

.tech-carousel {
  position: relative;
  width: 100%;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  padding: 1.25rem 0;
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
}

.tech-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 148px;
}

.tech-logo {
  height: 2.75rem;
  width: auto;
  max-width: 88px;
  object-fit: contain;
  opacity: 0.85;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tech-item:hover .tech-logo {
  opacity: 1;
  transform: translateY(-2px);
}

.tech-name {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--text-secondary);
}

@keyframes slow-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slow-marquee {
  animation: slow-marquee 32s linear infinite;
}

.tech-carousel:hover .animate-slow-marquee,
.tech-carousel:focus-within .animate-slow-marquee {
  animation-play-state: paused;
}

@media (min-width: 1024px) {
  .trust-layout {
    flex-direction: row;
    align-items: center;
    gap: 3.5rem;
  }
  .trust-copy {
    width: 340px;
    flex-shrink: 0;
  }
  .tech-item {
    width: 180px;
  }
  .tech-logo {
    height: 3.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-carousel {
    overflow-x: auto;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .animate-slow-marquee {
    animation: none;
  }
}
</style>
