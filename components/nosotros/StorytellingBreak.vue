<template>
  <section class="storytelling-break relative bg-section-dark overflow-hidden flex items-center justify-center">
    
    <!-- Ambient glow for atmospheric breaks -->
    <div v-if="glow === 'cyan'" class="ambient-orb ambient-orb--cyan"></div>
    <div v-if="glow === 'purple'" class="ambient-orb ambient-orb--purple"></div>
    <div v-if="glow === 'indigo'" class="ambient-orb ambient-orb--indigo"></div>
    <div class="section-container relative z-10 w-[88%] max-w-[1200px] mx-auto text-center py-12 md:py-20">
      
      <!-- Micro-typography overline -->
      <p v-if="overline" class="story-overline" v-reveal data-delay="0">{{ overline }}</p>
      
      <!-- Massive cinematic statement -->
      <h2 class="story-headline" :class="{'story-headline--oversized': oversized}" v-reveal data-delay="100">
        <span v-html="headline"></span>
      </h2>
      
      <!-- Small supporting text -->
      <p v-if="subheadline" class="story-subheadline mt-8" v-reveal data-delay="300">{{ subheadline }}</p>

    </div>
  </section>
</template>

<script setup>
defineProps({
  overline: {
    type: String,
    default: ''
  },
  headline: {
    type: String,
    required: true
  },
  subheadline: {
    type: String,
    default: ''
  },
  glow: {
    type: String,
    default: 'none' // 'cyan', 'purple', 'indigo', 'none'
  },
  oversized: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.storytelling-break {
  /* No separation borders */
}

.ambient-orb {
  position: absolute;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  pointer-events: none;
}
.ambient-orb--cyan { background: radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 60%); }
.ambient-orb--purple { background: radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 60%); }
.ambient-orb--indigo { background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%); }

.story-overline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.story-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin: 0;
}

/* Massive typography for key emotional anchors */
.story-headline--oversized {
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
}

/* Dynamic styling for v-html content */
:deep(.story-headline em) {
  font-style: normal;
  color: var(--text-secondary); /* Softer secondary part of the statement */
}
:deep(.story-headline .accent-gradient) {
  font-style: normal;
  background: linear-gradient(110deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
:deep(.story-headline .accent-metallic) {
  font-style: normal;
  background: linear-gradient(110deg, #9ca3af 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.story-subheadline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
</style>
