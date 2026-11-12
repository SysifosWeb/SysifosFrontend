<script setup>
import { Moon, Sun } from 'lucide-vue-next'
</script>

<template>
  <button type="button" class="site-theme-toggle" data-site-theme-toggle>
    <span class="site-theme-toggle__dark">
      <Moon :size="20" aria-hidden="true" />
      <span class="sr-only">Activar modo oscuro</span>
    </span>
    <span class="site-theme-toggle__light">
      <Sun :size="20" aria-hidden="true" />
      <span class="sr-only">Activar modo claro</span>
    </span>
  </button>
</template>
