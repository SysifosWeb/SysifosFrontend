<script setup>
import { TerminalSquare, Database, Smartphone } from 'lucide-vue-next'
import karen from '@/assets/img/Karen.png'
import osman from '@/assets/img/Osman.png'
</script>

<template>
  <section class="py-12 md:py-16 relative bg-section-dark overflow-hidden">

    <!-- Ambient -->
    <div class="ambient-orb ambient-orb--cyan"></div>

    <div class="relative z-10 w-[90%] max-w-7xl mx-auto flex flex-col gap-20">

      <!-- Editorial Header — asymmetric, not centered-generic -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
        <div class="equipo-header__left">
          <p class="overline-label" v-reveal data-delay="0">El equipo</p>
          <h2 class="equipo-headline" v-reveal data-delay="100">
            Las mentes<br />
            <em>detrás del código.</em>
          </h2>
        </div>
        <div class="equipo-header__right">
          <p class="equipo-descriptor" v-reveal data-delay="200">
            Dos especialistas, un estándar de ingeniería. Construimos software que escala, resiste y evoluciona con tu
            negocio.
          </p>
        </div>
      </div>

      <!-- Team Roster - Cinematic Editorial Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto items-start">

        <!-- KAREN -->
        <div class="roster-card group md:mt-14" v-reveal data-delay="150">
          <img :src="karen" alt="Karen Godoy" class="roster-photo" loading="lazy" />
          <div class="roster-overlay"></div>

          <div class="roster-info">
            <div class="roster-role">
              <Database class="roster-role__icon roster-role__icon--purple" />
              <span class="roster-role__text roster-role__text--purple">DBA &amp; Frontend</span>
            </div>
            <h3 class="roster-name">Karen Godoy</h3>
            <p class="roster-bio">
              Control estructural enfocado en optimización de bases de datos relacionales con eficiencia visual
              ininterrumpida.
            </p>
          </div>
          <div class="roster-accent-line roster-accent-line--purple"></div>
        </div>

        <!-- OSMAN -->
        <div class="roster-card group" v-reveal data-delay="300">
          <img :src="osman" alt="Osman Ahumada" class="roster-photo" loading="lazy" />
          <div class="roster-overlay"></div>

          <div class="roster-info">
            <div class="roster-role">
              <Smartphone class="roster-role__icon" />
              <span class="roster-role__text">Web &amp; Mobile Dev</span>
            </div>
            <h3 class="roster-name">Osman Ahumada</h3>
            <p class="roster-bio">
              Especialista arquitectónico en ecosistemas híbridos Flutter. Gestión fluida en compilación cross-platform.
            </p>
          </div>
          <div class="roster-accent-line roster-accent-line--cyan"></div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Ambient ────────────────────────────────── */
.ambient-orb {
  position: absolute;
  pointer-events: none;
}

.ambient-orb--cyan {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #38BDF8 0%, transparent 70%);
  opacity: 0.08;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ── Editorial Header ───────────────────────── */
.equipo-header__right {
  padding-bottom: 0.5rem;
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

.equipo-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin: 0;
}

.equipo-headline em {
  font-style: normal;
  background: linear-gradient(95deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.equipo-descriptor {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 38ch;
}

/* ── Cinematic Roster Card ──────────────────── */
.roster-card {
  position: relative;
  height: 480px;
  /* Tall editorial portrait */
  background: #0d1526;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* GPU compositing */
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.roster-card:hover {
  transform: translateZ(0) translateY(-6px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.15);
}

/* ── Top accent line ────────────────────────── */
.roster-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 20;
}

.roster-card:hover .roster-accent-line {
  opacity: 1;
}

.roster-accent-line--cyan {
  background: linear-gradient(to right, transparent, #38BDF8, transparent);
}

.roster-accent-line--purple {
  background: linear-gradient(to right, transparent, #818CF8, transparent);
}

/* ── Cinematic Photo ────────────────────────── */
.roster-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  /* Cinematic color grade: cool, high contrast, low saturation */
  filter: sepia(0.2) hue-rotate(190deg) saturate(0.4) brightness(0.7) contrast(1.15);
  will-change: transform, filter;
  /* Ken Burns effect: ultra-slow scale */
  transition: filter 1s ease, transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
}

.roster-card:hover .roster-photo {
  /* Recovers some warmth and brightness on hover */
  filter: sepia(0.1) hue-rotate(190deg) saturate(0.6) brightness(0.9) contrast(1.1);
  transform: scale(1.08);
}

/* ── Deep Gradient Overlay ──────────────────── */
.roster-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(11, 18, 34, 0.98) 0%,
      rgba(11, 18, 34, 0.8) 25%,
      rgba(11, 18, 34, 0.2) 60%,
      transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* ── Info Block (Overlaid) ──────────────────── */
.roster-info {
  position: relative;
  z-index: 10;
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.roster-role {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.roster-role__icon {
  width: 14px;
  height: 14px;
  color: #38BDF8;
  flex-shrink: 0;
}

.roster-role__icon--purple {
  color: #818CF8;
}

.roster-role__text {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #38BDF8;
}

.roster-role__text--purple {
  color: #818CF8;
}

.roster-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  /* Larger, more editorial */
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-main);
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  /* Helps legibility over images */
}

.roster-bio {
  font-size: 0.82rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
}
</style>
