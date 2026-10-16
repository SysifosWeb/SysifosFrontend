<template>
  <section class="storytelling-break relative bg-section-dark overflow-hidden flex items-center justify-center">
    
    <div class="section-container relative z-10 w-[88%] max-w-[1200px] mx-auto text-center py-12 md:py-20">
      
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

.story-headline {
  font-size: var(--fs-h1);
  font-weight: var(--fw-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  color: var(--text-main);
  margin: 0;
}

/* Massive typography for key emotional anchors */
.story-headline--oversized {
  font-size: var(--fs-hero);
  max-width: 24ch;
  margin-inline: auto;
  text-wrap: balance;
  letter-spacing: var(--ls-hero);
  line-height: var(--lh-hero);
}

/* Dynamic styling for v-html content */
:deep(.story-headline em) {
  font-style: normal;
  color: var(--accent);
}
:deep(.story-headline .accent-gradient) {
  font-style: normal;
  color: var(--accent);
}
:deep(.story-headline .accent-metallic) {
  font-style: normal;
  color: var(--accent);
}

.story-subheadline {
  font-size: var(--fs-body);
  letter-spacing: 0.05em;
  color: var(--text-muted);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
</style>
