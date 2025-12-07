<template>
  <div class="card group hover:-translate-y-2">
    <div class="flex flex-col h-full">
      <!-- Icon -->
      <div class="mb-4">
        <div class="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center text-white text-2xl">
          <slot name="icon">
            {{ icon }}
          </slot>
        </div>
      </div>

      <!-- Content -->
      <h3 class="heading-4 mb-3">{{ title }}</h3>
      <p class="text-dark-600 mb-4 flex-grow">{{ description }}</p>

      <!-- Link -->
      <NuxtLink 
        v-if="link" 
        :to="link" 
        class="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
      >
        Saber más
        <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '💻'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  }
})
</script>
