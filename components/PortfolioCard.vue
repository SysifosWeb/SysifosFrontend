<template>
  <div class="card group overflow-hidden hover:-translate-y-2">
    <!-- Image -->
    <div class="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
      <slot name="image">
        <div class="w-full h-full flex items-center justify-center text-6xl">
          {{ imageEmoji }}
        </div>
      </slot>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <h3 class="heading-4">{{ title }}</h3>
      <p class="text-dark-600 text-sm">{{ description }}</p>

      <!-- Link -->
      <NuxtLink 
        v-if="link" 
        :to="link" 
        class="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
      >
        Ver proyecto
        <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    default: ''
  },
  imageEmoji: {
    type: String,
    default: '🎨'
  }
})
</script>
