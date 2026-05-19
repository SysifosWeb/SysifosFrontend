<script setup>
const route = useRoute()
</script>

<template>
  <div class="min-h-screen font-sans bg-section-dark">
    <AppNavbar class="absolute top-0 left-0 w-full z-50"/>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
