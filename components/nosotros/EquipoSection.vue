<script setup>
import { TerminalSquare, Database, Smartphone } from 'lucide-vue-next'
import karen from '@/assets/img/Karen.png'
import osman from '@/assets/img/Osman.png'
</script>

<template>
  <section class="py-12 md:py-16 relative bg-section-dark overflow-hidden">

    <div class="relative z-10 w-[90%] max-w-7xl mx-auto flex flex-col gap-20">

      <!-- Editorial Header — asymmetric, not centered-generic -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
        <div class="equipo-header__left">
          <h2 class="equipo-headline" v-reveal data-delay="100">
            El equipo que<br />
            <em>hace que suceda.</em>
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
        <div class="roster-card impulso-closing group md:mt-14" v-reveal data-delay="150">
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
        <div class="roster-card impulso-closing group" v-reveal data-delay="300">
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
  background: var(--bg-surface);
  opacity: 0;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ── Editorial Header ───────────────────────── */
.equipo-header__right {
  padding-bottom: 0.5rem;
}

.equipo-headline {
  font-size: var(--fs-h1);
  font-weight: var(--fw-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  color: var(--text-main);
  margin: 0;
}

.equipo-headline em {
  font-style: normal;
  color: var(--accent);
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
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* GPU compositing */
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.roster-card:hover {
  transform: translateZ(0) translateY(-6px);
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
  background: var(--accent);
}

.roster-accent-line--purple {
  background: var(--accent);
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
  background: rgba(16, 43, 70, 0.42);
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
  color: var(--accent);
  flex-shrink: 0;
}

.roster-role__icon--purple {
  color: var(--accent);
}

.roster-role__text {
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--accent);
}

.roster-role__text--purple {
  color: var(--accent);
}

.roster-name {
  font-size: var(--fs-h3);
  font-weight: var(--fw-h3);
  letter-spacing: var(--ls-h3);
  color: var(--text-main);
  line-height: 1.1;
}

.roster-bio {
  font-size: var(--fs-small);
  line-height: var(--lh-body);
  color: rgba(var(--neutral-rgb), 0.7);
  margin-top: 0.25rem;
}
</style>
