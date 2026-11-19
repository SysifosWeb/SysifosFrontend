<script setup>
import { ArrowRight, ArrowUpRight, Server, ShieldCheck, MapPin } from 'lucide-vue-next'
import { ref } from 'vue'

const fareminImage = '/img/projects/faremin-1200.webp'
const tiltStyle = ref({})
const resetTilt = () => { tiltStyle.value = {} }
const followPointer = (event) => {
  if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5))
  const y = Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5))
  tiltStyle.value = { transform: `perspective(1400px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg) translate3d(${x * 4}px, ${y * 3}px, 0)` }
}
</script>

<template>
  <section class="hero-section" aria-labelledby="home-title">
    <div class="site-container hero-content">
      <div class="hero-copy">
        <h1 id="home-title">
          Captación web, flujos comerciales <span>y automatización práctica.</span>
        </h1>
        <p class="hero-description">
          Diseñamos y construimos sitios de conversión, cotizadores B2B, flujos de agenda y automatizaciones para empresas en Coquimbo y todo Chile, sin servidores cloud inflados.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary">
            Solicitar diagnóstico gratuito
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="/servicios" class="btn btn-secondary">
            Ver servicios y valores
          </NuxtLink>
        </div>

        <dl class="hero-proof">
          <div class="hero-proof__item">
            <dt><MapPin class="w-4 h-4 text-accent" aria-hidden="true" /> Región de Coquimbo y remoto Chile</dt>
            <dd>Trato directo con quienes diseñan y programan.</dd>
          </div>
          <div class="hero-proof__item">
            <dt><Server class="w-4 h-4 text-accent" aria-hidden="true" /> Infraestructura frugal</dt>
            <dd>Arquitectura optimizada para hosting cPanel sin costos ocultos.</dd>
          </div>
          <div class="hero-proof__item">
            <dt><ShieldCheck class="w-4 h-4 text-accent" aria-hidden="true" /> Alcance y valores claros</dt>
            <dd>Paquetes desde $200.000 + IVA con respaldo de cada contacto.</dd>
          </div>
        </dl>
      </div>

      <div class="hero-project-motion" @pointermove="followPointer" @pointerleave="resetTilt" @pointercancel="resetTilt">
        <div class="hero-project-tilt" :style="tiltStyle">
          <figure class="hero-project">
            <div class="hero-project__bar">
              <span class="hero-project__kicker">Caso publicado</span>
              <span class="hero-project__meta">Ingeniería B2B · Maestranza</span>
            </div>
            <NuxtLink to="/portfolio" class="hero-project__preview" aria-label="Ver el proyecto Maestranza Faremin en nuestro portfolio">
              <img :src="fareminImage" alt="Sitio web desarrollado para Maestranza Faremin, con su presentación de ingeniería para la industria minera" width="1600" height="911" fetchpriority="high" />
            </NuxtLink>
            <figcaption>
              <div>
                <h2>Maestranza Faremin</h2>
                <p class="hero-project__caption">Sitio corporativo y captación técnica para proveedores mineros.</p>
              </div>
              <NuxtLink to="/portfolio" class="hero-project__link">
                Ver portfolio
                <ArrowUpRight class="w-4 h-4" aria-hidden="true" />
              </NuxtLink>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background: var(--bg-dark);
  padding: clamp(9rem, 11vw, 11.25rem) 0 clamp(3.5rem, 6vw, 5.5rem);
  border-bottom: 1px solid var(--border);
}

.hero-content {
  position: relative;
  display: grid;
  align-items: start;
  gap: clamp(2.5rem, 4.5vw, 4.5rem);
}

.hero-copy {
  position: relative;
  min-width: 0;
  max-width: 40rem;
}

h1 {
  font-family: var(--font-heading);
  margin: 0 0 1.5rem;
  font-size: clamp(2.35rem, 1.5rem + 3vw, 3.85rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  text-wrap: balance;
}

h1 span {
  color: var(--accent);
}

.hero-description {
  font-family: var(--font-family);
  max-width: 58ch;
  margin: 0;
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  text-wrap: pretty;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-proof {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--border);
}

.hero-proof__item dt {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.hero-proof__item dd {
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-secondary);
  margin: 0;
}

.hero-project-motion {
  min-width: 0;
  width: 100%;
}

.hero-project-tilt {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-project {
  position: relative;
  width: 100%;
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(16, 43, 70, 0.12);
}

.hero-project__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  font-size: var(--fs-small);
  background: var(--bg-surface);
}

.hero-project__kicker {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--text-main);
}

.hero-project__meta {
  color: var(--text-secondary);
}

.hero-project__preview {
  display: block;
  border-block: 1px solid var(--border);
  overflow: hidden;
}

.hero-project__preview img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

figcaption {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
}

figcaption h2 {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.2rem;
}

.hero-project__caption {
  font-size: var(--fs-small);
  color: var(--text-secondary);
  margin: 0;
}

.hero-project__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--accent);
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  white-space: nowrap;
}

.hero-project__link:hover {
  text-decoration: underline;
}

@media (min-width: 640px) {
  .hero-proof {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    align-items: center;
  }
  .hero-copy {
    max-width: none;
  }
  .hero-proof {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .hero-proof__item:last-child {
    grid-column: 1 / -1;
  }
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .hero-project__preview:hover img {
    transform: scale(1.02);
  }
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }
  figcaption {
    padding: 1rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-project-tilt {
    transform: none !important;
    transition: none;
  }
}
</style>
