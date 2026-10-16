<script setup>
import { PanelsTopLeft, MessageCircle } from 'lucide-vue-next'
import fareminImage from '@/assets/img/Faremin.jpeg'
import { ref } from 'vue'

const tiltStyle = ref({})
const resetTilt = () => { tiltStyle.value = {} }
const followPointer = (event) => {
  if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = Math.max(-.5, Math.min(.5, (event.clientX - bounds.left) / bounds.width - .5))
  const y = Math.max(-.5, Math.min(.5, (event.clientY - bounds.top) / bounds.height - .5))
  tiltStyle.value = { transform: `perspective(1400px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translate3d(${x * 8}px, ${y * 6}px, 0)` }
}

</script>

<template>
  <section class="hero-section" aria-labelledby="home-title">
    <div class="site-container hero-content">
      <div class="hero-copy">
        <p class="hero-eyebrow"><span aria-hidden="true"></span>Diseño y desarrollo para tu empresa</p>
        <h1 id="home-title">Tu próximo paso digital,<br class="hidden sm:block" /> <span>con un equipo cercano.</span></h1>
        <p class="hero-description">Páginas web, tiendas online y software a medida. Definimos el alcance contigo y te acompañamos desde la idea hasta el lanzamiento.</p>
        <div class="hero-actions">
          <a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20cotizar%20mi%20proyecto%20web%2Fsoftware" target="_blank" rel="noopener" class="btn btn-primary">
            Hablemos de tu proyecto <span aria-hidden="true">↗</span>
          </a>
          <NuxtLink to="/portfolio" class="btn btn-secondary">Ver nuestros proyectos <span aria-hidden="true">↓</span></NuxtLink>
        </div>
        <div class="hero-detail hero-detail--design" aria-hidden="true"><PanelsTopLeft /><span>Diseño a medida</span></div>
        <div class="hero-detail hero-detail--team" aria-hidden="true"><MessageCircle /><span>Contacto directo</span></div>
      </div>

      <div class="hero-project-motion" @pointermove="followPointer" @pointerleave="resetTilt" @pointercancel="resetTilt">
      <div class="hero-project-tilt" :style="tiltStyle">
      <figure class="hero-project">
        <div class="hero-project__bar">
          <div class="hero-project__dots" aria-hidden="true"><i></i><i></i><i></i></div>
          <span>Una muestra de nuestro trabajo</span>
          <span class="hero-project__type">Desarrollo web</span>
        </div>
        <NuxtLink to="/portfolio" class="hero-project__preview" aria-label="Ver el proyecto Maestranza Faremin en nuestro portfolio">
          <img :src="fareminImage" alt="Sitio web desarrollado para Maestranza Faremin, con su presentación de ingeniería para la industria minera" width="1600" height="911" fetchpriority="high" />
        </NuxtLink>
        <figcaption>
          <div><span class="hero-project__label">Proyecto destacado</span><h2>Maestranza Faremin</h2></div>
          <NuxtLink to="/portfolio" class="hero-project__link">Conoce nuestro trabajo <span aria-hidden="true">↗</span></NuxtLink>
        </figcaption>
      </figure>
      </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-project-tilt { transition: transform .25s ease-out; }
@media (prefers-reduced-motion: reduce) { .hero-project-tilt { transform: none !important; transition: none; } }
.hero-section { position: relative; overflow: hidden; background: var(--bg-dark); padding: clamp(10rem, 12vw, 12rem) 0 var(--section-py-sm); }
.hero-section::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at 50% 48%, rgba(157,203,245,0.18), transparent 65%); }
.hero-content { position: relative; }
.hero-copy { position: relative; text-align: center; max-width: 64rem; margin: 0 auto; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 0.625rem; padding: 0.5rem 0.875rem; border: 1px solid var(--border); background: var(--bg-surface); border-radius: 999px; font-size: var(--fs-small); color: var(--text-secondary); }
.hero-eyebrow span { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
h1 { margin: 1.5rem auto; font-family: var(--font-heading); font-size: var(--fs-page-hero); font-weight: 700; line-height: 1.14; letter-spacing: -0.045em; color: var(--text-main); text-wrap: balance; }
h1 span { color: var(--accent); }
.hero-description { max-width: 39rem; margin: 0 auto; font-size: var(--fs-lead); line-height: 1.55; color: var(--text-secondary); text-wrap: pretty; }
.hero-actions { display: flex; align-items: center; justify-content: center; gap: 0.875rem; flex-wrap: wrap; margin-top: 2rem; }
.hero-detail { position: absolute; display: flex; align-items: center; gap: 0.625rem; padding: 0.875rem; border-radius: var(--radius-lg); border: 1px solid rgba(29,95,166,0.12); background: #EDF3FA; color: #1D5FA6; box-shadow: 0 8px 24px rgba(16,43,70,0.04); font-size: var(--fs-small); pointer-events: none; }
.hero-detail svg { width: 1.5rem; height: 1.5rem; stroke-width: 1.5; }
.hero-detail--design { --tile-angle: -6deg; left: -6.5rem; top: 8rem; transform: rotate(-6deg); }
.hero-detail--team { --tile-angle: 6deg; right: -6rem; top: 11rem; transform: rotate(6deg); }
.hero-project { position: relative; max-width: 66rem; margin: 3.5rem auto 0; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-surface); overflow: hidden; box-shadow: 0 20px 55px rgba(16,43,70,0.1); }
.hero-project__bar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.875rem 1.25rem; font-size: var(--fs-small); color: var(--text-secondary); background: var(--bg-surface); }
.hero-project__dots { display: flex; gap: 5px; }
.hero-project__dots i { display: block; width: 7px; height: 7px; border-radius: 50%; background: #9DCBF5; }
.hero-project__type { color: var(--accent); }
.hero-project__preview { display: block; border-block: 1px solid var(--border); }
.hero-project__preview img { display: block; width: 100%; height: auto; }
figcaption { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1.25rem 1.5rem; }
.hero-project__label { color: var(--text-secondary); font-size: var(--fs-small); }
figcaption h2 { font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0.25rem; }
.hero-project__link { color: var(--accent); font-size: var(--fs-body); font-weight: 600; }
.hero-project__link:hover { text-decoration: underline; }
@media (max-width: 1200px) { .hero-detail { display: none; } }
@media (max-width: 640px) {
  .hero-section { padding-top: 9rem; }
  .hero-eyebrow { font-size: 0.875rem; }
  .hero-description { font-size: 1.125rem; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .btn { width: 100%; }
  .hero-project { margin-top: 2.5rem; }
  .hero-project__bar { padding: 0.75rem; gap: 0.5rem; font-size: 0.8125rem; }
  .hero-project__type { display: none; }
  figcaption { padding: 1rem; }
}

/* Entrada escalonada: el contenido conserva su posición final sin JS adicional. */
@media (prefers-reduced-motion: no-preference) {
  .hero-eyebrow { animation: hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both; }
  h1 { animation: hero-enter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both; }
  .hero-description { animation: hero-enter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both; }
  .hero-actions { animation: hero-enter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.46s both; }
  .hero-section::before { animation: hero-light-drift 16s ease-in-out infinite alternate; }
  .hero-detail--design { animation: hero-tile-enter 1s ease-out 0.65s both, hero-tile-float 7s ease-in-out 1.65s infinite; }
  .hero-detail--team { animation: hero-tile-enter 1s ease-out 0.85s both, hero-tile-float 8s ease-in-out 1.85s infinite reverse; }
  .hero-project {
    transform-origin: center top;
    animation: hero-project-enter 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
  }
  .hero-project__preview img { transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .hero-actions .btn span { display: inline-block; transition: transform 0.25s ease; }
  .hero-actions .btn:hover span { transform: translate(2px, -2px); }
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .hero-project__preview:hover img { transform: scale(1.018); }
}
@keyframes hero-project-enter {
  from { opacity: 0; transform: perspective(1200px) translateY(48px) rotateX(6deg) scale(0.97); }
  to { opacity: 1; transform: perspective(1200px) translateY(0) rotateX(0) scale(1); }
}
@keyframes hero-enter {
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hero-tile-enter {
  from { opacity: 0; transform: translateY(20px) scale(0.92) rotate(var(--tile-angle)); }
  to { opacity: 1; transform: translateY(0) scale(1) rotate(var(--tile-angle)); }
}
@keyframes hero-tile-float {
  0%, 100% { transform: translateY(0) rotate(var(--tile-angle)); }
  50% { transform: translateY(-12px) rotate(calc(var(--tile-angle) + 2deg)); }
}
@keyframes hero-light-drift {
  from { transform: translate(-2%, -2%) scale(1); opacity: 0.7; }
  to { transform: translate(2%, 2%) scale(1.12); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-project { opacity: 1; transform: none; animation: none; transition: none; }
}
</style>
