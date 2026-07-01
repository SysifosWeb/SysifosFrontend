<template>
  <section class="testimonials-section relative overflow-hidden bg-section-dark">

    <!-- Ambient single orb — restrained -->
    <div class="ambient-orb"></div>

    <div class="section-container">

      <!-- ═══ HEADER ═══ -->
      <div class="section-header">
        <div>
          <p class="overline-label" v-reveal data-delay="0">Clientes</p>
          <h2 class="section-headline" v-reveal data-delay="100">
            Empresas que crecieron<br />
            <em>con nuestra tecnología.</em>
          </h2>
        </div>
        <!-- Social proof strip -->
        <div class="proof-strip" v-reveal data-delay="200">
          <div class="proof-stars">
            <svg v-for="s in 5" :key="s" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="proof-label">5.0 · 98% clientes satisfechos</p>
        </div>
      </div>

      <!-- ═══ BENTO GRID ═══ -->
      <!-- Asymmetric: featured card takes 2/3, two smaller cards stack on the right -->
      <div class="bento-grid">

        <!-- FEATURED CARD — left, large -->
        <article class="bento-card bento-card--featured group" v-reveal data-delay="0">
          <!-- Accent top line on hover -->
          <div class="card-accent-line card-accent-line--cyan" aria-hidden="true"></div>

          <!-- Large quote mark -->
          <span class="quote-mark" aria-hidden="true">“</span>

          <!-- Quote text — bigger on featured -->
          <blockquote class="quote-text quote-text--lg">
            <p>{{ testimonials[0].text }}</p>
          </blockquote>

          <!-- Metric — large number display, featured treatment -->
          <div class="metric-block metric-block--featured">
            <span class="metric-number metric-number--cyan">{{ testimonials[0].metric }}</span>
            <span class="metric-label">{{ testimonials[0].metricLabel }}</span>
          </div>

          <!-- Author -->
          <footer class="author-row">
            <div class="author-avatar" :style="{ background: testimonials[0].avatarBg }" aria-hidden="true">
              {{ testimonials[0].initials }}
            </div>
            <cite>
              <p class="author-name">{{ testimonials[0].name }}</p>
              <p class="author-company">{{ testimonials[0].company }}</p>
            </cite>
          </footer>
        </article>

        <!-- RIGHT COLUMN — two stacked cards -->
        <div class="bento-col-right">

          <!-- Card 2 -->
          <article class="bento-card group" v-reveal data-delay="150">
            <div class="card-accent-line card-accent-line--purple" aria-hidden="true"></div>
            <span class="quote-mark quote-mark--sm" aria-hidden="true">“</span>
            <blockquote class="quote-text">
              <p>{{ testimonials[1].text }}</p>
            </blockquote>
            <div class="metric-block">
              <span class="metric-number metric-number--purple">{{ testimonials[1].metric }}</span>
              <span class="metric-label">{{ testimonials[1].metricLabel }}</span>
            </div>
            <footer class="author-row">
              <div class="author-avatar" :style="{ background: testimonials[1].avatarBg }" aria-hidden="true">
                {{ testimonials[1].initials }}
              </div>
              <cite>
                <p class="author-name">{{ testimonials[1].name }}</p>
                <p class="author-company">{{ testimonials[1].company }}</p>
              </cite>
            </footer>
          </article>

          <!-- Card 3 -->
          <article class="bento-card group" v-reveal data-delay="300">
            <div class="card-accent-line card-accent-line--cyan" aria-hidden="true"></div>
            <span class="quote-mark quote-mark--sm" aria-hidden="true">“</span>
            <blockquote class="quote-text">
              <p>{{ testimonials[2].text }}</p>
            </blockquote>
            <div class="metric-block">
              <span class="metric-number metric-number--cyan">{{ testimonials[2].metric }}</span>
              <span class="metric-label">{{ testimonials[2].metricLabel }}</span>
            </div>
            <footer class="author-row">
              <div class="author-avatar" :style="{ background: testimonials[2].avatarBg }" aria-hidden="true">
                {{ testimonials[2].initials }}
              </div>
              <cite>
                <p class="author-name">{{ testimonials[2].name }}</p>
                <p class="author-company">{{ testimonials[2].company }}</p>
              </cite>
            </footer>
          </article>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'María Rodríguez',
    initials: 'MR',
    company: 'Gerente General · Tech Solutions Corp',
    text: 'Antes tenía una web que no me traía nada. Desde que trabajamos con SysifosWeb, nuestras consultas online se triplicaron. El equipo entendió exactamente lo que necesitaba y lo ejecutaron con precisión.',
    metric: '3×',
    metricLabel: 'consultas online en 3 meses',
    avatarBg: 'linear-gradient(135deg, #38BDF8, #6366F1)'
  },
  {
    name: 'Carlos López',
    initials: 'CL',
    company: 'Founder · Innovatech',
    text: 'Lanzamos nuestra tienda online en tiempo récord. Nuestras ventas crecieron un 40% en el primer trimestre.',
    metric: '+40%',
    metricLabel: 'en ventas el primer trimestre',
    avatarBg: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
  },
  {
    name: 'Ana Silva',
    initials: 'AS',
    company: 'Directora de Operaciones · Global Systems',
    text: 'El sistema que desarrollaron nos ahorró horas de trabajo manual cada semana. Ahora el equipo se enfoca en lo que realmente importa.',
    metric: '12h',
    metricLabel: 'ahorradas por semana',
    avatarBg: 'linear-gradient(135deg, #34D399, #38BDF8)'
  }
]
</script>

<style scoped>
/* ── Section ────────────────────────────────── */
.testimonials-section {
  padding: 7rem 0 8rem;
}

.ambient-orb {
  position: absolute;
  width: 700px;
  height: 700px;
  top: 50%;
  right: -150px;
  transform: translateY(-50%);
  background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 9999px;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* ── Header ─────────────────────────────────── */
.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .section-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3rem;
  }
}

.overline-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
  display: block;
}

.section-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin: 0;
}

.section-headline em {
  font-style: normal;
  background: linear-gradient(95deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Social proof strip */
.proof-strip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex-shrink: 0;
  padding-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .proof-strip {
    align-items: flex-end;
  }
}

.proof-stars {
  display: flex;
  gap: 3px;
}

.proof-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* ── Bento Grid ─────────────────────────────── */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1.5fr 1fr;
    /* Featured takes more space */
    align-items: start;
  }
}

.bento-col-right {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) and (max-width: 1023px) {
  .bento-col-right {
    grid-template-columns: 1fr 1fr;
  }
}

/* ── Bento Card ─────────────────────────────── */
.bento-card {
  position: relative;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  transition: border-color 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.bento-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
}

/* Featured card — extra padding and taller */
.bento-card--featured {
  padding: 2.75rem;
  justify-content: space-between;
}

/* Accent line (appears on hover) */
.card-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.bento-card:hover .card-accent-line {
  opacity: 1;
}

.card-accent-line--cyan {
  background: linear-gradient(to right, transparent, rgba(56, 189, 248, 0.6), transparent);
}

.card-accent-line--purple {
  background: linear-gradient(to right, transparent, rgba(129, 140, 248, 0.6), transparent);
}

/* ── Quote Mark ─────────────────────────────── */
.quote-mark {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 4rem;
  line-height: 0.5;
  color: rgba(56, 189, 248, 0.15);
  display: block;
  user-select: none;
  flex-shrink: 0;
}

.quote-mark--sm {
  font-size: 2.5rem;
}

/* ── Quote Text ─────────────────────────────── */
.quote-text {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-secondary);
  flex: 1;
}

.quote-text--lg {
  font-size: 1.05rem;
  line-height: 1.75;
}

/* ── Metric Block ───────────────────────────── */
/* Replaces the green result badge with a large number display */
.metric-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.metric-block--featured {
  padding: 1.5rem 0;
}

.metric-number {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
}

.metric-number--cyan {
  color: #38BDF8;
}

.metric-number--purple {
  color: #818CF8;
}

.metric-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* ── Author Row ─────────────────────────────── */
.author-row {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  flex-shrink: 0;
}

.author-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  letter-spacing: 0.05em;
}

.author-name {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.author-company {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}
</style>
