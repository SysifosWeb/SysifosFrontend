<script setup>
import team from "@/assets/img/saas_product_visual.png";
</script>

<template>
  <section class="historia-section relative bg-section-dark overflow-hidden">
    
    <!-- Ambient light — restrained, not cyberpunk -->
    <div class="ambient-orb ambient-orb--indigo"></div>
    <div class="ambient-orb ambient-orb--cyan"></div>

    <div class="section-container">
      
      <!-- ═══ NARRATIVE SPLIT ═══ -->
      <div class="narrative-split">
        
        <!-- Left: Editorial copy -->
        <div class="narrative-copy">
          <!-- Overline -->
          <p class="overline-label" v-reveal data-delay="0">Fundada en 2024 · Coquimbo, Chile</p>

          <h2 class="narrative-headline" v-reveal data-delay="100">
            Arquitectura que<br/>
            <em>resiste la escala.</em>
          </h2>

          <div class="narrative-body" v-reveal data-delay="200">
            <p>
              SysifosWeb nace con una convicción: la tecnología de vanguardia no debería ser un privilegio de las grandes corporaciones. La democratizamos.
            </p>
            <p>
              Inspirados en el mito de Sísifo — perseverancia, precisión, esfuerzo sostenido — convertimos cada desafío técnico en una solución de alto rendimiento con impacto medible en tu negocio.
            </p>
          </div>

          <!-- Founding stat -->
          <div class="founding-stat" v-reveal data-delay="300">
            <span class="stat-number">2024</span>
            <span class="stat-divider"></span>
            <span class="stat-label">Año de fundación</span>
          </div>
        </div>

        <!-- Right: Image with editorial frame -->
        <div class="narrative-visual" v-reveal data-delay="200">
          <div class="visual-frame">
            <img :src="team" alt="SysifosWeb — Arquitecto de nodo" class="visual-img" loading="lazy" />
            <!-- Overlay caption -->
            <div class="visual-caption">
              <span class="caption-dot"></span>
              <span>Node Architecture · v2.4</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ MANIFESTO STRIP ═══ -->
      <!-- Replaces the repetitive 3-card grid with a horizontal editorial strip -->
      <div class="manifesto-strip">
        
        <div class="manifesto-item" v-reveal data-delay="0">
          <span class="manifesto-index">01</span>
          <div class="manifesto-divider"></div>
          <div class="manifesto-content">
            <h3 class="manifesto-heading">Misión</h3>
            <p class="manifesto-text">Empoderar corporaciones mediante arquitecturas robustas que aceleren su crecimiento y maximicen su competitividad global.</p>
          </div>
        </div>

        <div class="manifesto-item" v-reveal data-delay="150">
          <span class="manifesto-index manifesto-index--purple">02</span>
          <div class="manifesto-divider manifesto-divider--purple"></div>
          <div class="manifesto-content">
            <h3 class="manifesto-heading">Visión</h3>
            <p class="manifesto-text">Ser el referente de desarrollo de software más confiable de la región, distinguidos por excelencia técnica inquebrantable.</p>
          </div>
        </div>

        <div class="manifesto-item" v-reveal data-delay="300">
          <span class="manifesto-index">03</span>
          <div class="manifesto-divider"></div>
          <div class="manifesto-content">
            <h3 class="manifesto-heading">Valores</h3>
            <p class="manifesto-text">Innovación pragmática, calidad sistemática, transparencia operacional. La ingeniería sólida construye futuros sustentables.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Layout Shell ─────────────────────────── */
.historia-section {
  padding: 4rem 0 3rem;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* ── Ambient Orbs (restrained) ────────────── */
.ambient-orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(120px);
}
.ambient-orb--indigo {
  width: 480px;
  height: 480px;
  background: #6366F1;
  opacity: 0.05;
  top: -80px;
  left: -120px;
}
.ambient-orb--cyan {
  width: 360px;
  height: 360px;
  background: #38BDF8;
  opacity: 0.04;
  top: 40%;
  right: -100px;
}

/* ── Narrative Split ──────────────────────── */
.narrative-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .narrative-split {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
}

/* ── Editorial Copy ───────────────────────── */
.narrative-copy {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.overline-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

.narrative-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 2rem;
}
.narrative-headline em {
  font-style: normal;
  background: linear-gradient(95deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.narrative-body {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-left: 1.25rem;
  border-left: 1px solid rgba(56, 189, 248, 0.2);
  margin-bottom: 2.5rem;
}
.narrative-body p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.founding-stat {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.stat-number {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text-main);
}
.stat-divider {
  width: 32px;
  height: 1px;
  background: var(--border);
}
.stat-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ── Visual Frame ─────────────────────────── */
.narrative-visual {
  position: relative;
}
.visual-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04),
    0 40px 80px rgba(0,0,0,0.5);
}
.visual-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: brightness(0.88) contrast(1.04);
  transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.narrative-visual:hover .visual-img {
  filter: brightness(0.96) contrast(1.02);
  transform: scale(1.02);
}
.visual-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 1.5rem 1.25rem;
  background: linear-gradient(to top, rgba(11,18,34,0.95) 0%, transparent 100%);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}
.caption-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.7;
}

/* ── Manifesto Strip ──────────────────────── */
/* Horizontal editorial strip instead of rigid 3-card grid */
.manifesto-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.06);
}
@media (min-width: 768px) {
  .manifesto-strip {
    grid-template-columns: repeat(3, 1fr);
  }
}

.manifesto-item {
  padding: 2.5rem 2rem 2.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: background 0.3s ease;
}
.manifesto-item:hover {
  background: rgba(255,255,255,0.015);
}
@media (min-width: 768px) {
  .manifesto-item {
    padding: 3rem 2.5rem 3rem 0;
    border-bottom: none;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .manifesto-item:last-child {
    border-right: none;
    padding-right: 0;
  }
  .manifesto-item:not(:first-child) {
    padding-left: 2.5rem;
  }
}

.manifesto-index {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 1rem;
  opacity: 0.7;
}
.manifesto-index--purple { color: #818CF8; }

.manifesto-divider {
  width: 24px;
  height: 1px;
  background: var(--accent);
  opacity: 0.3;
  margin-bottom: 1.25rem;
}
.manifesto-divider--purple { background: #818CF8; }

.manifesto-heading {
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-main);
  margin-bottom: 0.75rem;
}

.manifesto-text {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
}
</style>
