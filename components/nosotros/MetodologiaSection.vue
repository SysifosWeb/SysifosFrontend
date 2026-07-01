<script setup>
import { Box, Radio, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="metodologia-section relative overflow-hidden">
    
    <!-- Ambient -->
    <div class="ambient-orb ambient-orb--indigo"></div>

    <div class="section-container">
      
      <!-- ═══ SECTION HEADER ═══ -->
      <!-- Left-aligned, not centered — breaks symmetry for rhythm -->
      <div class="metodologia-header">
        <div>
          <p class="overline-label" v-reveal data-delay="0">Cómo trabajamos</p>
          <h2 class="metodologia-headline" v-reveal data-delay="100">
            Operativa<br/>
            <em>estandarizada.</em>
          </h2>
        </div>
        <p class="metodologia-descriptor" v-reveal data-delay="200">
          Ejecución eficiente mediante protocolos ágiles. Precisión funcional, tiempos predecibles y código que sobrevive a la escala.
        </p>
      </div>

      <!-- ═══ MAIN CONTENT ═══ -->
      <div class="metodologia-grid">

        <!-- LEFT: Process Steps — as a vertical timeline, not icon blocks -->
        <div class="process-col">
          <p class="col-label">Protocolos de Desarrollo</p>

          <div class="process-steps">

            <div class="process-step" v-reveal data-delay="0">
              <div class="step-connector">
                <span class="step-node step-node--cyan"></span>
                <span class="step-line"></span>
              </div>
              <div class="step-body">
                <h4 class="step-title">Scrum Framework</h4>
                <p class="step-text">Sprints de 2 semanas con métricas de entrega incrementales y ventanas de feedback continuo.</p>
              </div>
            </div>

            <div class="process-step" v-reveal data-delay="150">
              <div class="step-connector">
                <span class="step-node step-node--purple"></span>
                <span class="step-line"></span>
              </div>
              <div class="step-body">
                <h4 class="step-title">Sincronización Continua</h4>
                <p class="step-text">Alineación estratégica mediante stand-ups diarios, demostraciones de avance y comunicación transparente.</p>
              </div>
            </div>

            <div class="process-step process-step--last" v-reveal data-delay="300">
              <div class="step-connector">
                <span class="step-node step-node--cyan"></span>
              </div>
              <div class="step-body">
                <h4 class="step-title">QA &amp; Estabilidad</h4>
                <p class="step-text">Testing unitario, code reviews estrictos y clean-code para garantizar arquitecturas sólidas en producción.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT: Tech Stack — as a lean table, not cards -->
        <div class="stack-col">
          <p class="col-label">Stack Tecnológico</p>

          <div class="stack-table">
            
            <div class="stack-row" v-reveal data-delay="0">
              <div class="stack-row__layer">
                <span class="stack-row__label">Frontend</span>
                <span class="stack-row__sublabel">Interfaces de alto rendimiento</span>
              </div>
              <span class="stack-row__tech stack-row__tech--cyan">Vue.js / Nuxt / React</span>
            </div>

            <div class="stack-row" v-reveal data-delay="100">
              <div class="stack-row__layer">
                <span class="stack-row__label">Backend</span>
                <span class="stack-row__sublabel">Lógica y bases de datos</span>
              </div>
              <span class="stack-row__tech stack-row__tech--purple">Laravel / Node.js</span>
            </div>

            <div class="stack-row" v-reveal data-delay="200">
              <div class="stack-row__layer">
                <span class="stack-row__label">Mobile</span>
                <span class="stack-row__sublabel">Desarrollo multiplataforma</span>
              </div>
              <span class="stack-row__tech stack-row__tech--cyan">Flutter / React Native</span>
            </div>

            <!-- Bottom note — signals maturity -->
            <p class="stack-note" v-reveal data-delay="300">
              Seleccionamos la tecnología óptima para cada contexto. Sin dogma, con criterio.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Section ────────────────────────────────── */
.metodologia-section {
  padding: 4rem 0 4rem;
  background: var(--bg-dark);
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

/* ── Ambient ────────────────────────────────── */
.ambient-orb {
  position: absolute;
  pointer-events: none;
}
.ambient-orb--indigo {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #6366F1 0%, transparent 70%);
  opacity: 0.1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ── Section Header ─────────────────────────── */
/* Two-column: headline left, descriptor right */
.metodologia-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: end;
}
@media (min-width: 768px) {
  .metodologia-header {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.overline-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  display: block;
}

.metodologia-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin: 0;
}
.metodologia-headline em {
  font-style: normal;
  background: linear-gradient(95deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.metodologia-descriptor {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-secondary);
  max-width: 40ch;
  align-self: end;
  padding-bottom: 0.5rem;
}

/* ── Main Grid ──────────────────────────────── */
.metodologia-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (min-width: 1024px) {
  .metodologia-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
}

/* ── Column Label ───────────────────────────── */
.col-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* ── Process Timeline ───────────────────────── */
.process-steps {
  display: flex;
  flex-direction: column;
}

.process-step {
  display: flex;
  gap: 1.5rem;
}

.step-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 3px;
}

.step-node {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.step-node--cyan   { background: #38BDF8; box-shadow: 0 0 8px rgba(56,189,248,0.4); }
.step-node--purple { background: #818CF8; box-shadow: 0 0 8px rgba(129,140,248,0.4); }

.step-line {
  width: 1px;
  flex: 1;
  min-height: 3rem;
  background: rgba(255,255,255,0.08);
  margin-top: 8px;
}

.step-body {
  padding-bottom: 3rem;
}
.process-step--last .step-body {
  padding-bottom: 0;
}

.step-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.step-text {
  font-size: 0.825rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* ── Stack Table ────────────────────────────── */
.stack-table {
  display: flex;
  flex-direction: column;
}

.stack-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: background 0.2s ease;
}
.stack-row:first-child {
  border-top: 1px solid rgba(255,255,255,0.06);
}

.stack-row__layer {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stack-row__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.stack-row__sublabel {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

.stack-row__tech {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.stack-row__tech--cyan   { color: #38BDF8; }
.stack-row__tech--purple { color: #818CF8; }

.stack-note {
  margin-top: 1.75rem;
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--text-muted);
  font-style: italic;
}
</style>
