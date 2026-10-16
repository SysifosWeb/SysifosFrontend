<script setup>
import { Box, Radio, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="metodologia-section relative overflow-hidden">
    
    <div class="section-container">
      
      <!-- ═══ SECTION HEADER ═══ -->
      <!-- Left-aligned, not centered — breaks symmetry for rhythm -->
      <div class="metodologia-header">
        <div>
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
  background: var(--bg-surface);
  opacity: 0;
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

.metodologia-headline {
  font-size: var(--fs-h1);
  font-weight: var(--fw-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  color: var(--text-main);
  margin: 0;
}
.metodologia-headline em {
  font-style: normal;
  color: var(--accent);
}

.metodologia-descriptor {
  font-size: var(--fs-body);
  line-height: var(--lh-body);
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
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--accent);
  margin-bottom: 2rem;
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
.step-node--cyan, .step-node--purple { background: var(--accent); }

.step-line {
  width: 2px;
  flex: 1;
  min-height: 3rem;
  background: var(--bg-elevated);
  margin-top: 8px;
}

.step-body {
  padding-bottom: 3rem;
}
.process-step--last .step-body {
  padding-bottom: 0;
}

.step-title {
  font-size: var(--fs-h3);
  line-height: var(--lh-h3);
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.step-text {
  font-size: var(--fs-body);
  line-height: var(--lh-body);
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
  background: var(--bg-surface);
  border-radius: var(--radius-sm);
  padding-inline: 1rem;
  margin-bottom: 0.5rem;
}

.stack-row__layer {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stack-row__label {
  font-size: var(--fs-body);
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.stack-row__sublabel {
  font-size: var(--fs-small);
  line-height: var(--lh-small);
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

.stack-row__tech {
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: 600;
  letter-spacing: var(--ls-body);
  white-space: normal;
  overflow-wrap: anywhere;
}
.stack-row__tech--cyan   { color: var(--accent); }
.stack-row__tech--purple { color: var(--accent); }

.stack-note {
  margin-top: 1.75rem;
  font-size: var(--fs-small);
  line-height: 1.6;
  color: var(--text-muted);
  font-style: italic;
}

@media (max-width: 640px) {
  .stack-row { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
}

.stack-row {
  border: 1px solid var(--border);
  transition: opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1), translate 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.step-title { transition: color 0.25s ease; }
.step-node { transition: transform 0.25s ease; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .stack-row:hover { translate: 0 -3px; border-color: var(--border-accent); box-shadow: 0 8px 20px rgba(16,43,70,0.06); }
  .process-step:hover .step-title { color: var(--accent); }
  .process-step:hover .step-node { transform: scale(1.25); }
}
</style>
