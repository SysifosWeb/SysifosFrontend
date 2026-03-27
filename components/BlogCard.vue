<template>
  <article class="card group hover:-translate-y-2">
    <!-- Featured Image -->
    <div class="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
      <slot name="image">
        <div class="w-full h-full flex items-center justify-center text-6xl">
          📝
        </div>
      </slot>
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <!-- Meta -->
      <div class="flex items-center gap-3 text-sm text-dark-500">
        <time v-if="date" :datetime="date">{{ formattedDate }}</time>
        <span v-if="category" class="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
          {{ category }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="heading-4 line-clamp-2">{{ title }}</h3>

      <!-- Excerpt -->
      <p class="text-dark-600 text-sm line-clamp-3">{{ excerpt }}</p>

      <!-- Read More -->
      <NuxtLink 
        :to="link" 
        class="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
      >
        Leer más
        <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  }
})

const formattedDate = computed(() => {
  if (!props.date) return ''
  const date = new Date(props.date)
  return date.toLocaleDateString('es-CL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>
