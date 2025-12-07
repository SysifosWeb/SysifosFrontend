<template>
  <section :class="['relative overflow-hidden', bgClass]">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6 animate-slide-up">
          <h1 v-if="title" :class="['heading-1', titleClass]">
            {{ title }}
          </h1>
          <p v-if="subtitle" :class="['text-lg md:text-xl text-dark-600', subtitleClass]">
            {{ subtitle }}
          </p>
          <div v-if="showCta" class="flex flex-wrap gap-4">
            <NuxtLink :to="ctaPrimaryLink" class="btn-primary">
              {{ ctaPrimaryText }}
            </NuxtLink>
            <NuxtLink v-if="ctaSecondaryText" :to="ctaSecondaryLink" class="btn-outline">
              {{ ctaSecondaryText }}
            </NuxtLink>
          </div>
        </div>

        <!-- Image/Visual -->
        <div v-if="showImage" class="relative animate-fade-in">
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
            <div class="w-full h-full rounded-xl bg-white flex items-center justify-center">
              <slot name="image">
                <div class="text-6xl">🚀</div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 -z-10 opacity-10">
      <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-primary-600" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#hero-pattern)" />
      </svg>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  subtitleClass: {
    type: String,
    default: ''
  },
  bgClass: {
    type: String,
    default: 'bg-gradient-to-br from-gray-50 to-white'
  },
  showCta: {
    type: Boolean,
    default: true
  },
  ctaPrimaryText: {
    type: String,
    default: 'Comenzar'
  },
  ctaPrimaryLink: {
    type: String,
    default: '/contacto'
  },
  ctaSecondaryText: {
    type: String,
    default: ''
  },
  ctaSecondaryLink: {
    type: String,
    default: '#'
  },
  showImage: {
    type: Boolean,
    default: true
  }
})
</script>
