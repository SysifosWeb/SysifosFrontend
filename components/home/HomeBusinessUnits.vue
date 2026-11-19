<template>
  <section id="servicios" class="services-section bg-section-dark" aria-labelledby="home-services-title">
    <div class="section-container">
      <div class="services-header">
        <h2 id="home-services-title" class="section-title max-w-[24ch] mx-auto" v-reveal data-delay="0">
          Soluciones diseñadas para captar y ahorrar trabajo.
        </h2>
        <p class="section-subtitle max-w-[54ch] mx-auto mt-3 mb-0" v-reveal data-delay="60">
          Paquetes con alcance cerrado, valores en CLP netos + IVA y respaldo en base de datos.
        </p>
      </div>

      <div class="services-bento">
        <!-- Wide 7-col featured Bento module -->
        <article class="service-panel service-panel--featured span-7" v-reveal data-delay="60">
          <div class="service-panel__top">
            <TrendingUp class="w-6 h-6 service-panel__icon" aria-hidden="true" />
            <span class="service-panel__price tabular-nums">Desde $350.000 + IVA</span>
          </div>
          <h3 class="service-panel__title">Sistema de Captación Web</h3>
          <p class="service-panel__desc">
            Sitio enfocado en conversión con respaldo automático de cada contacto en base de datos para no perder leads aunque falle el correo.
          </p>
          <ul class="service-panel__list service-panel__list--2col">
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>Panel de registros y alerta al equipo</span></li>
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>Medición de formularios y WhatsApp</span></li>
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>SEO técnico y velocidad móvil</span></li>
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>Entrada recomendada para PYMEs</span></li>
          </ul>
          <div class="service-panel__footer">
            <NuxtLink to="/contacto?plan=captacion-web" class="service-panel__cta">
              Solicitar Captación Web
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Compact 5-col Bento module -->
        <article class="service-panel span-5" v-reveal data-delay="100">
          <div class="service-panel__top">
            <Workflow class="w-6 h-6 service-panel__icon" aria-hidden="true" />
            <span class="service-panel__price tabular-nums">$590k – $650k + IVA</span>
          </div>
          <h3 class="service-panel__title">Web + Flujo Comercial / Agenda</h3>
          <p class="service-panel__desc">
            Cotizador técnico con adjuntos para maestranzas/B2B o solicitud de hora para clínicas y servicios.
          </p>
          <ul class="service-panel__list">
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>Seguimiento ordenado en panel</span></li>
            <li><CheckCircle2 class="w-4 h-4 service-panel__check shrink-0" aria-hidden="true" /><span>Pruebas end-to-end antes de publicar</span></li>
          </ul>
          <div class="service-panel__footer">
            <NuxtLink to="/contacto?plan=web-flujo-comercial" class="service-panel__cta">
              Cotizar Web + Flujo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Full-width 12-col Horizontal Bento Strip -->
        <article class="service-panel service-panel--tint span-12 service-panel--row" v-reveal data-delay="140">
          <div class="service-row__copy">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <Zap class="w-5 h-5 text-accent" aria-hidden="true" />
              <h3 class="service-panel__title m-0">Automatización e Integraciones</h3>
              <span class="service-panel__price tabular-nums">Desde $450.000 + IVA</span>
            </div>
            <p class="service-panel__desc m-0 max-w-[64ch]">
              Conectamos formularios, WhatsApp, correos y planillas (PDF de cotización, alertas o consolidación) sobre cPanel sin servidores caros. También ofrecemos Landing Express ($200k), E-commerce ($650k) y Continuidad mensual ($49k–$89k).
            </p>
          </div>
          <div class="service-row__actions">
            <NuxtLink to="/servicios" class="btn btn-primary py-3.5 px-6 whitespace-nowrap">
              Ver los 6 módulos y valores
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, CheckCircle2, TrendingUp, Workflow, Zap } from 'lucide-vue-next'
</script>

<style scoped>
.services-section {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.services-bento {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.service-panel {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-panel--tint {
  background: var(--bg-elevated);
}

.service-panel--featured {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 48px rgba(16, 43, 70, 0.16);
}

.service-panel--featured .service-panel__title { color: #F5F9FD; }
.service-panel--featured .service-panel__desc,
.service-panel--featured .service-panel__list li { color: #B8CFE5; }
.service-panel--featured .service-panel__icon,
.service-panel--featured .service-panel__price,
.service-panel--featured .service-panel__check,
.service-panel--featured .service-panel__cta { color: #9DCBF5; }
.service-panel--featured .service-panel__footer { border-top-color: rgba(184, 207, 229, 0.2); }

.service-panel__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.service-panel__icon,
.service-panel__price,
.service-panel__check,
.service-panel__cta {
  color: var(--accent);
}

.service-panel__price {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 800;
}

.service-panel__title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 1.15rem + 0.35vw, 1.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
  margin: 0 0 0.7rem;
}

.service-panel__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.4rem;
}

.service-panel__list {
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
  flex: 1;
}

.service-panel__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

.service-panel__check {
  margin-top: 0.15rem;
}

.service-panel__footer {
  padding-top: 1.2rem;
  border-top: 1px solid var(--border);
}

.service-panel__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
}

.service-panel__cta:hover {
  text-decoration: underline;
}

.service-panel--row {
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .service-panel:hover {
    transform: translateY(-2px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 768px) {
  .service-panel__list--2col {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .services-bento {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .span-5 { grid-column: span 5; }
  .span-7 { grid-column: span 7; }
  .span-12 { grid-column: span 12; }
  .service-panel--row {
    flex-direction: row;
    align-items: center;
  }
}
</style>
