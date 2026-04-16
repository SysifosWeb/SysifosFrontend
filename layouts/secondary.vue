<script setup>
const route = useRoute()
</script>

<template>
  <div class="min-h-screen font-sans">
    <div>
      <AppNavbar class="absolute top-0 left-0 w-full z-10"/>
      <AppHeaderSecundary :title="route.meta.title || ''" />
    </div>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
