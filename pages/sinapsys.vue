<script setup>
import { ref } from 'vue'
import { Globe, BriefcaseBusiness, Instagram, Linkedin, ArrowUpRight, MessageCircle, MapPin, ArrowRight } from 'lucide-vue-next'

definePageMeta({ layout: false })

const introActive = ref(true)

const links = [
  { title: 'Nuestro sitio web', desc: 'Conoce cómo podemos ayudarte.', url: 'https://sysifosweb.cl/', icon: Globe, label: 'Explorar' },
  { title: 'Portafolio', desc: 'Descubre los proyectos que hemos creado.', url: 'https://sysifosweb.cl/portfolio', icon: BriefcaseBusiness, label: 'Ver proyectos' },
  { title: 'Instagram', desc: 'Ideas, novedades y nuestro día a día.', url: 'https://www.instagram.com/sysifosweb_/', icon: Instagram, label: 'Síguenos' },
  { title: 'LinkedIn', desc: 'Conecta con nuestro equipo.', url: 'https://www.linkedin.com/company/sysifos-web', icon: Linkedin, label: 'Conectemos' },
]

const { setMeta, setSchema } = useSEO()
setMeta({
  title: 'Sinapsys · Conecta con SysifosWeb',
  description: 'Conoce nuestros proyectos, explora nuestras redes y conversemos sobre tu próxima página web o software a medida. SysifosWeb, Coquimbo, Chile.',
  keywords: 'enlaces sysifosweb, contacto sysifos, redes sociales sysifosweb',
  image: '/img/og-sinapsys.jpg'
})
setSchema({ type: 'WebPage', data: { name: 'Sinapsys — Enlaces de SysifosWeb', description: 'Sitio web, proyectos, redes sociales y contacto de SysifosWeb.' } })
</script>

<template>
  <div class="sinapsys impulso-hybrid" :class="{ 'sinapsys--intro': introActive }">
    <BrandIntro v-if="introActive" @complete="introActive = false" />
    <div class="sinapsys-container" :inert="introActive" :aria-hidden="introActive ? 'true' : undefined">
      <header class="sinapsys-header">
        <a href="https://sysifosweb.cl/" aria-label="Ir al sitio de SysifosWeb" class="sinapsys-brand"><BrandLogo /></a>
        <span class="sinapsys-label"><span aria-hidden="true"></span> Sinapsys · Conecta con nosotros</span>
      </header>

      <main class="sinapsys-main">
        <section class="sinapsys-intro" aria-labelledby="sinapsys-title">
          <p class="sinapsys-eyebrow">Diseño y desarrollo con propósito</p>
          <h1 id="sinapsys-title">Tu próximo paso digital{{ ' ' }}<span>empieza aquí.</span></h1>
          <p class="sinapsys-description">Páginas web y software a medida, con un equipo cercano.</p>
          <a class="sinapsys-whatsapp" href="https://wa.me/56985021549?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20digital." target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> Hablemos de tu proyecto <ArrowUpRight class="sinapsys-cta-arrow" aria-hidden="true" />
          </a>
          <p class="sinapsys-contact-note">Conversemos directamente por WhatsApp.</p>
          <img class="sinapsys-watermark" src="/img/brand/mark.svg" alt="" aria-hidden="true" />
        </section>

        <section class="sinapsys-links" aria-labelledby="sinapsys-links-title">
          <div class="sinapsys-links-heading">
            <p class="sinapsys-eyebrow">Explora y conecta</p>
            <h2 id="sinapsys-links-title">Todo SysifosWeb, <span>más cerca.</span></h2>
          </div>
          <a v-for="(item, index) in links" :key="item.title" :href="item.url" target="_blank" rel="noopener noreferrer" class="sinapsys-link" :style="{ '--entrance-delay': `${.24 + index * .07}s` }">
            <span class="sinapsys-link-icon"><component :is="item.icon" aria-hidden="true" /></span>
            <span class="sinapsys-link-copy"><span class="sinapsys-link-title">{{ item.title }}</span><span class="sinapsys-link-description">{{ item.desc }}</span></span>
            <span class="sinapsys-link-action">{{ item.label }} <ArrowUpRight aria-hidden="true" /></span>
          </a>
          <a href="https://sysifosweb.cl/servicios" class="sinapsys-services-link">¿Qué podemos construir para ti? <ArrowRight aria-hidden="true" /></a>
        </section>
      </main>

      <footer class="sinapsys-footer">
        <p>Código que impulsa. Soluciones que transforman.</p>
        <span><MapPin aria-hidden="true" /> Coquimbo, Chile</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.sinapsys { min-height: 100svh; background: #F7F8FB; color: #102B46; font-family: var(--font-family); padding: clamp(1.25rem, 4vw, 3rem) 0; background-image: radial-gradient(ellipse at 10% 0%, rgba(157,203,245,.23), transparent 55%); }
.sinapsys-container { width: min(1120px, 90%); margin-inline: auto; }
.sinapsys-header { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; padding-bottom: 2rem; border-bottom: 1px solid #D9E3EF; }
.sinapsys-brand { display: block; width: clamp(180px, 21vw, 240px); flex-shrink: 0; }
.sinapsys-brand :deep(.brand-logo) { display: block; width: 100%; }
.sinapsys-label { display: inline-flex; align-items: center; gap: .5rem; color: #52677F; font-size: var(--fs-small); }
.sinapsys-label > span { width: 6px; height: 6px; border-radius: 50%; background: #1D5FA6; }
.sinapsys-main { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; margin-block: clamp(2rem, 5vw, 4rem); }
.sinapsys-intro { position: relative; isolation: isolate; overflow: hidden; background: #102B46; color: #F7F8FB; border-radius: 24px; padding: clamp(1.75rem, 4vw, 3rem); box-shadow: 0 20px 50px rgba(16,43,70,.1); }
.sinapsys-eyebrow { font-size: var(--fs-small); letter-spacing: .12em; text-transform: uppercase; font-weight: 600; color: #1D5FA6; margin-bottom: 1rem; }
.sinapsys-intro .sinapsys-eyebrow { color: #9DCBF5; }
h1 { font-size: clamp(2.25rem, 3.5vw, 3.25rem); font-weight: 800; line-height: 1.12; letter-spacing: -.045em; text-wrap: balance; }
h1 > span { display: block; color: #9DCBF5; }
.sinapsys-description { font-size: var(--fs-lead); line-height: 1.55; margin-top: 1.5rem; color: #D1E0F0; }
.sinapsys-whatsapp { display: flex; align-items: center; justify-content: center; gap: .65rem; border-radius: 12px; padding: 1rem; font-weight: 700; font-size: var(--fs-body); background: #9DCBF5; color: #102B46; margin-top: 1.75rem; transition: background-color .25s ease, box-shadow .25s ease, transform .2s ease; }
.sinapsys-whatsapp svg { width: 20px; height: 20px; flex-shrink: 0; }
.sinapsys-whatsapp:hover { background: #25D366; box-shadow: 0 8px 24px rgba(37,211,102,.14); }
.sinapsys-contact-note { margin-top: .875rem; font-size: var(--fs-small); text-align: center; color: #B8CFE5; }
.sinapsys-watermark { position: absolute; width: 330px; right: -100px; top: -30px; opacity: .09; transform: rotate(-12deg); z-index: -1; pointer-events: none; }
h2 { font-size: var(--fs-h2); line-height: var(--lh-h2); font-weight: 800; letter-spacing: -.035em; text-wrap: balance; margin-bottom: 1.5rem; }
h2 > span { color: #1D5FA6; }
.sinapsys-link { display: flex; align-items: center; gap: 1rem; padding: 1.25rem; background: #FFF; border: 1px solid #D9E3EF; border-radius: 16px; margin-top: .875rem; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.sinapsys-link-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #EDF3FA; border-radius: 12px; color: #1D5FA6; flex-shrink: 0; }
.sinapsys-link-icon svg { width: 23px; height: 23px; }
.sinapsys-link-copy { flex: 1; min-width: 0; }
.sinapsys-link-title { display: block; font-family: var(--font-heading); font-weight: 700; font-size: 18px; }
.sinapsys-link-description { display: block; margin-top: .25rem; color: #52677F; font-size: var(--fs-body); line-height: 1.45; }
.sinapsys-link-action { display: flex; align-items: center; gap: .35rem; font-size: var(--fs-small); font-weight: 600; color: #1D5FA6; }
.sinapsys-link-action svg, .sinapsys-services-link svg { width: 18px; height: 18px; flex-shrink: 0; }
.sinapsys-services-link { display: flex; align-items: center; gap: .5rem; margin-top: 1.5rem; color: #1D5FA6; font-size: var(--fs-body); font-weight: 600; }
.sinapsys-services-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.sinapsys-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid #D9E3EF; padding-top: 1.5rem; color: #52677F; font-size: var(--fs-small); }
.sinapsys-footer > span { display: flex; align-items: center; gap: .5rem; }
.sinapsys-footer svg { width: 16px; height: 16px; }
a:focus-visible { outline: 3px solid #1D5FA6; outline-offset: 5px; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .sinapsys-link:hover, .sinapsys-link:focus-visible { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(16,43,70,.07); border-color: #9DCBF5; }
  .sinapsys-cta-arrow, .sinapsys-link-action svg { transition: transform .25s ease; }
  .sinapsys-link:hover .sinapsys-link-action svg { transform: translate(2px, -2px); }
  .sinapsys-whatsapp:hover .sinapsys-cta-arrow { transform: translate(2px, -2px); }
}
@media (max-width: 900px) {
  .sinapsys-main { grid-template-columns: 1fr; max-width: 620px; margin-inline: auto; }
  .sinapsys-header { flex-direction: column; gap: .65rem; padding-bottom: 1.25rem; }
  .sinapsys-main { gap: 1.5rem; margin-block: 1.5rem 2rem; }
  .sinapsys-intro { padding: 1.5rem; }
  .sinapsys-intro .sinapsys-eyebrow { display: none; }
  h1 { font-size: clamp(1.875rem, 5vw, 2.5rem); }
  .sinapsys-description { font-size: var(--fs-body); line-height: 1.5; margin-top: .875rem; }
  .sinapsys-whatsapp { margin-top: 1.25rem; padding: .875rem .75rem; }
  .sinapsys-contact-note { margin-top: .65rem; }
  .sinapsys-links-heading .sinapsys-eyebrow { display: none; }
  h2 { font-size: 1.375rem; line-height: 1.3; margin-bottom: 1rem; }
  .sinapsys-link { margin-top: .75rem; }
  .sinapsys-link-description { font-size: var(--fs-small); }

}
@media (max-width: 480px) {
  .sinapsys-link { gap: .75rem; padding: 1rem; }
  .sinapsys-link-action { font-size: 0; }
  .sinapsys-link-title { font-size: 18px; }
  .sinapsys-footer { justify-content: center; text-align: center; }
  .sinapsys-whatsapp { padding-inline: .75rem; }
}

@media (prefers-reduced-motion: no-preference) {
  .sinapsys-header { animation: sinapsys-enter .4s ease-out both; }
  .sinapsys-intro { animation: sinapsys-enter .45s ease-out .08s both; }
  .sinapsys-links-heading { animation: sinapsys-enter .4s ease-out .16s both; }
  .sinapsys-link { animation: sinapsys-enter .38s ease-out var(--entrance-delay) both; }
  .sinapsys-watermark { animation: sinapsys-impulse 10s ease-in-out infinite; }
  .sinapsys-link:active, .sinapsys-whatsapp:active { transform: scale(.985); }
}
.sinapsys--intro :is(.sinapsys-header, .sinapsys-intro, .sinapsys-links-heading, .sinapsys-link, .sinapsys-watermark) { animation-play-state: paused; }
@keyframes sinapsys-enter {
  from { opacity: 0; translate: 0 12px; }
  to { opacity: 1; translate: 0 0; }
}
@keyframes sinapsys-impulse {
  0%, 100% { transform: translate(0, 0) rotate(-12deg); }
  50% { transform: translate(-12px, 10px) rotate(-9deg); }
}
</style>
