<template>
  <section class="bento-section bg-section-dark" aria-labelledby="problems-title">
    <div class="section-container">
      <div class="bento-head">
        <h2 id="problems-title" class="section-title max-w-[24ch] mx-auto" v-reveal data-delay="0">
          Dónde se escapan clientes y horas todos los meses.
        </h2>
        <p class="section-subtitle max-w-[56ch] mx-auto mt-3 mb-0" v-reveal data-delay="60">
          Atacamos los tres cuellos de botella operativos que frenan a empresas B2B y servicios en Chile.
        </p>
      </div>

      <div class="bento-grid">
        <!-- Tile 1 (7 cols, Deep Navy): Connected Lead Pipeline -->
        <article class="b-tile b-tile--navy b-span-7" v-reveal data-delay="60">
          <h3 class="b-tile__title">Flujo conectado sin fuga de contactos</h3>
          <p class="b-tile__desc">
            Cada formulario y clic a WhatsApp queda medido y respaldado en base de datos antes de disparar alertas por correo, eliminando pérdidas silenciosas.
          </p>
          <div class="mini-pipeline" aria-label="Flujo de respaldo de contactos">
            <span class="mini-node"><Globe class="w-4 h-4" aria-hidden="true" /> Web / WhatsApp</span>
            <ArrowRight class="w-4 h-4 mini-arrow" aria-hidden="true" />
            <span class="mini-node"><Database class="w-4 h-4" aria-hidden="true" /> Respaldo BD</span>
            <ArrowRight class="w-4 h-4 mini-arrow" aria-hidden="true" />
            <span class="mini-node"><BellRing class="w-4 h-4" aria-hidden="true" /> Alerta equipo</span>
          </div>
        </article>

        <!-- Tile 2 (5 cols, White): Lost WhatsApp quotes -->
        <article class="b-tile b-tile--surface b-span-5" v-reveal data-delay="100">
          <MessageSquareWarning class="w-6 h-6 text-accent mb-4" aria-hidden="true" />
          <h3 class="b-tile__title">Cotizaciones enterradas en chats</h3>
          <p class="b-tile__desc m-0">
            Reemplazamos mensajes sueltos por formularios con adjuntos, urgencia y registro centralizado para responder en menos de 24 h.
          </p>
        </article>

        <!-- Tile 3 (5 cols, Ice Tint): Manual Excel/PDF work -->
        <article class="b-tile b-tile--tint b-span-5" v-reveal data-delay="120">
          <Zap class="w-6 h-6 text-accent mb-4" aria-hidden="true" />
          <h3 class="b-tile__title">Horas copiando Excel y PDF</h3>
          <p class="b-tile__desc m-0">
            Automatizamos generación de PDFs, consolidación de leads y avisos internos sobre hosting cPanel sin servidores caros.
          </p>
        </article>

        <!-- Tile 4 (7 cols, White): Mobile speed + CTA -->
        <article class="b-tile b-tile--surface b-span-7 b-tile--action" v-reveal data-delay="140">
          <div>
            <Gauge class="w-6 h-6 text-accent mb-4" aria-hidden="true" />
            <h3 class="b-tile__title">Velocidad móvil y trazabilidad real</h3>
            <p class="b-tile__desc">
              Sitios rápidos con SEO técnico verificado y eventos de conversión reales para saber exactamente qué canal trae clientes.
            </p>
          </div>
          <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary py-3.5 px-6 self-start">
            Auditar mi flujo en 15 minutos
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Globe, Database, BellRing, MessageSquareWarning, Zap, Gauge } from 'lucide-vue-next'
</script>

<style scoped>
.bento-section {
  padding: clamp(4.5rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.bento-head {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.b-tile {
  display: flex;
  flex-direction: column;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
}

.b-tile--surface { background: var(--bg-surface); }
.b-tile--tint { background: var(--bg-elevated); }
.b-tile--navy {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 48px rgba(16, 43, 70, 0.16);
}

.b-tile--action {
  justify-content: space-between;
  gap: 1.25rem;
}

.b-tile__title {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 1.1rem + 0.35vw, 1.45rem);
  font-weight: 700;
  line-height: 1.22;
  color: var(--text-main);
  margin: 0 0 0.65rem;
}

.b-tile__desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
}

.b-tile--navy .b-tile__title { color: #F5F9FD; }
.b-tile--navy .b-tile__desc { color: #B8CFE5; }

.mini-pipeline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(184, 207, 229, 0.2);
}

.mini-node {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border-radius: 0.625rem;
  background: #163653;
  border: 1px solid rgba(157, 203, 245, 0.25);
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  color: #F5F9FD;
}

.mini-node svg,
.mini-arrow {
  color: #9DCBF5;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .b-tile:hover {
    transform: translateY(-2px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .b-span-5 { grid-column: span 5; }
  .b-span-7 { grid-column: span 7; }
}
</style>
