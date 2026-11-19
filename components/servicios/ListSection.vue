<script setup>
import { ArrowRight, CheckCircle2, LayoutTemplate, TrendingUp, Workflow, Zap, ShoppingBag, ShieldCheck, Cpu } from 'lucide-vue-next'
</script>

<template>
  <section id="paquetes" class="bento-catalog bg-section-dark">
    <div class="section-container">
      <div class="bento-grid">

        <!-- Row 1 Left (7 cols): Hero Recommended Package in Deep Navy -->
        <article class="bento-tile bento-tile--navy bento-span-7" v-reveal data-delay="0">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <TrendingUp class="w-5 h-5 bento-icon-sky shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Sistema de Captación Web</h2>
            </div>
            <span class="bento-badge-sky">Entrada recomendada</span>
          </div>

          <div class="bento-price-row">
            <span class="bento-price tabular-nums">$350.000</span>
            <span class="bento-price-meta">Desde · CLP neto + IVA</span>
          </div>

          <p class="bento-desc">
            Sitio orientado a conversión con respaldo automático en base de datos para no perder ningún contacto aunque falle el servidor de correo.
          </p>

          <ul class="bento-features bento-features--2col">
            <li><CheckCircle2 class="w-4 h-4 bento-icon-sky shrink-0" aria-hidden="true" /><span>Estructura comercial y SEO técnico base.</span></li>
            <li><CheckCircle2 class="w-4 h-4 bento-icon-sky shrink-0" aria-hidden="true" /><span>Respaldo automático de cada lead en panel.</span></li>
            <li><CheckCircle2 class="w-4 h-4 bento-icon-sky shrink-0" aria-hidden="true" /><span>Medición real de formularios y WhatsApp.</span></li>
            <li><CheckCircle2 class="w-4 h-4 bento-icon-sky shrink-0" aria-hidden="true" /><span>Alerta inmediata por correo al equipo.</span></li>
          </ul>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=captacion-web" class="btn bento-btn-sky py-3.5 px-6">
              Solicitar Captación Web
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 1 Right (5 cols): Landing Express -->
        <article class="bento-tile bento-tile--surface bento-span-5" v-reveal data-delay="60">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <LayoutTemplate class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Landing Express</h2>
            </div>
            <span class="bento-tag">1 página</span>
          </div>

          <div class="bento-price-row">
            <span class="bento-price tabular-nums">$200.000</span>
            <span class="bento-price-meta">Desde · CLP neto + IVA</span>
          </div>

          <p class="bento-desc">
            Presencia rápida sobre plantilla propia para validar una oferta concreta sin sobrecostos.
          </p>

          <ul class="bento-features">
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Textos y fotos entregados por el cliente.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Carga rápida móvil en hosting cPanel.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Formulario + enlace directo a WhatsApp.</span></li>
          </ul>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=landing-express" class="btn btn-secondary w-full justify-center py-3.5">
              Solicitar Landing Express
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 2 Left (6 cols): Web + Flujo Comercial / Agenda -->
        <article class="bento-tile bento-tile--surface bento-span-6" v-reveal data-delay="90">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <Workflow class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Web + Flujo Comercial / Agenda</h2>
            </div>
            <span class="bento-tag">B2B · Clínicas</span>
          </div>

          <div class="bento-price-row">
            <span class="bento-price tabular-nums">$590.000 – $650.000</span>
            <span class="bento-price-meta">CLP neto + IVA</span>
          </div>

          <p class="bento-desc">
            Pensado para maestranzas y proveedores B2B que reciben planos técnicos, o clínicas que ordenan solicitudes de hora.
          </p>

          <ul class="bento-features">
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Maestranzas/B2B: cotizador técnico con adjuntos y urgencia.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Clínicas/Servicios: especialidades + flujo de solicitud de hora.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Panel de estados y pruebas end-to-end antes de publicar.</span></li>
          </ul>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=web-flujo-comercial" class="btn btn-primary py-3.5 px-6">
              Cotizar Web + Flujo
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 2 Right (6 cols): Automatización e Integraciones -->
        <article class="bento-tile bento-tile--tint bento-span-6" v-reveal data-delay="120">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <Zap class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Automatización e Integraciones</h2>
            </div>
            <span class="bento-tag">cPanel-ready</span>
          </div>

          <div class="bento-price-row">
            <span class="bento-price tabular-nums">Desde $450.000</span>
            <span class="bento-price-meta">CLP neto + IVA · 1 flujo acotado</span>
          </div>

          <p class="bento-desc">
            Conecta formularios, WhatsApp, correos y planillas sin pagar servidores cloud caros en dólares.
          </p>

          <ul class="bento-features">
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Cotizaciones PDF automáticas, alertas o consolidación de leads.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Colas persistentes y trazabilidad sobre hosting estándar.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Integraciones múltiples o APIs complejas: $900.000+ según alcance.</span></li>
          </ul>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=automatizacion-flujo" class="btn btn-secondary py-3.5 px-6">
              Evaluar Automatización
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 3 Left (5 cols): E-commerce Estándar -->
        <article class="bento-tile bento-tile--surface bento-span-5" v-reveal data-delay="140">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <ShoppingBag class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">E-commerce Estándar</h2>
            </div>
            <span class="bento-tag">Pagos Chile</span>
          </div>

          <div class="bento-price-row">
            <span class="bento-price tabular-nums">Desde $650.000</span>
            <span class="bento-price-meta">CLP neto + IVA</span>
          </div>

          <p class="bento-desc">
            Tienda online lista para cobrar con Webpay, Flow o MercadoPago y administración simple de catálogo y pedidos.
          </p>

          <ul class="bento-features">
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Catálogo autoadministrable y carrito móvil.</span></li>
            <li><CheckCircle2 class="w-4 h-4 text-accent shrink-0" aria-hidden="true" /><span>Integraciones ERP/SII se cotizan aparte.</span></li>
          </ul>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=ecommerce-estandar" class="btn btn-secondary w-full justify-center py-3.5">
              Cotizar Tienda Online
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 3 Right (7 cols): Plan Continuidad & Soporte (2 tiers side-by-side) -->
        <article class="bento-tile bento-tile--tint bento-span-7" v-reveal data-delay="160">
          <div class="bento-tile__top">
            <div class="bento-tile__title-wrap">
              <ShieldCheck class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Plan Continuidad &amp; Soporte Mensual</h2>
            </div>
            <span class="bento-tag">MRR</span>
          </div>

          <p class="bento-desc">
            Mantén tu sitio, correos y formularios monitoreados sin caídas ni sorpresas técnicas mes a mes.
          </p>

          <div class="continuity-split">
            <div class="continuity-tier">
              <div class="continuity-tier__head">
                <h3>Plan Base</h3>
                <span class="tabular-nums">$49.000/mes + IVA</span>
              </div>
              <p>Hosting cPanel optimizado, SSL, respaldos automáticos, monitoreo de formularios y 1 h mensual de ajustes.</p>
            </div>
            <div class="continuity-tier">
              <div class="continuity-tier__head">
                <h3>Plan Crecimiento</h3>
                <span class="tabular-nums">$89.000/mes + IVA</span>
              </div>
              <p>Todo lo del Plan Base + reporte mensual de contactos/conversiones y 2 a 3 horas mensuales de mejoras.</p>
            </div>
          </div>

          <div class="bento-footer">
            <NuxtLink to="/contacto?plan=continuidad-mensual" class="btn btn-primary py-3.5 px-6">
              Activar Continuidad
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>

        <!-- Row 4 (12 cols): Software a medida & Piloto Control de Asistencia -->
        <article class="bento-tile bento-tile--navy bento-span-12 bento-tile--horizontal" v-reveal data-delay="180">
          <div class="bento-horizontal__copy">
            <div class="bento-tile__title-wrap mb-2">
              <Cpu class="w-5 h-5 bento-icon-sky shrink-0" aria-hidden="true" />
              <h2 class="bento-tile__title">Software a medida y Piloto Control de Asistencia</h2>
            </div>
            <p class="bento-desc m-0">
              Si necesitas portales internos, integraciones con sistemas propios o evaluar un piloto de control de asistencia y turnos en terreno, definimos alcance, plazos y presupuesto tras una reunión de diagnóstico.
            </p>
          </div>
          <NuxtLink to="/contacto?plan=software-a-medida" class="btn bento-btn-sky shrink-0 py-3.5 px-6">
            Solicitar Diagnóstico
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.bento-catalog {
  padding: 0 0 clamp(4.5rem, 8vw, 6.5rem);
  border-bottom: 1px solid var(--border);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.bento-tile {
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
}

.bento-tile--surface {
  background: var(--bg-surface);
}

.bento-tile--tint {
  background: var(--bg-elevated);
}

.bento-tile--navy {
  background: #102B46;
  border-color: #244A70;
  color: #F5F9FD;
  box-shadow: 0 20px 48px rgba(16, 43, 70, 0.16);
}

.bento-tile__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.bento-tile__title-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.bento-tile__title {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 1.1rem + 0.35vw, 1.45rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
  margin: 0;
}

.bento-tag {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--accent);
}

.bento-badge-sky {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 700;
  color: #9DCBF5;
}

.bento-icon-sky {
  color: #9DCBF5;
}

.bento-price-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.85rem;
  margin-bottom: 0.85rem;
}

.bento-price {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 1.35rem + 0.75vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--text-main);
}

.bento-price-meta {
  font-size: var(--fs-small);
  font-weight: 600;
  color: var(--accent);
}

.bento-desc {
  font-size: var(--fs-body);
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0 0 1.35rem;
}

.bento-features {
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
  flex: 1;
}

.bento-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: var(--fs-small);
  line-height: 1.45;
  color: var(--text-main);
}

.bento-features li svg {
  margin-top: 0.15rem;
}

.bento-footer {
  margin-top: auto;
}

/* Navy overrides */
.bento-tile--navy .bento-tile__title,
.bento-tile--navy .bento-price {
  color: #F5F9FD;
}
.bento-tile--navy .bento-desc,
.bento-tile--navy .bento-features li {
  color: #B8CFE5;
}
.bento-tile--navy .bento-price-meta {
  color: #9DCBF5;
}
.bento-btn-sky {
  background: #9DCBF5;
  color: #102B46;
  border: 1px solid #9DCBF5;
  font-weight: 700;
}
.bento-btn-sky:hover {
  background: #F5F9FD;
  border-color: #F5F9FD;
  color: #102B46;
}

/* Continuity split inside 7-col tile */
.continuity-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.75rem;
  flex: 1;
}

.continuity-tier {
  padding-top: 0.9rem;
  border-top: 1px solid var(--border);
}

.continuity-tier__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
  margin-bottom: 0.35rem;
}

.continuity-tier__head h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

.continuity-tier__head span {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 800;
  color: var(--accent);
}

.continuity-tier p {
  font-size: var(--fs-small);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.bento-tile--horizontal {
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}

.bento-horizontal__copy {
  max-width: 60ch;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .bento-tile:hover {
    transform: translateY(-2px);
    border-color: var(--border-accent);
  }
}

@media (min-width: 768px) {
  .bento-features--2col,
  .continuity-split {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .bento-span-5 { grid-column: span 5; }
  .bento-span-6 { grid-column: span 6; }
  .bento-span-7 { grid-column: span 7; }
  .bento-span-12 { grid-column: span 12; }
  .bento-tile--horizontal {
    flex-direction: row;
    align-items: center;
  }
}
</style>
