<script setup>
useHead({
  script: [
    { src: '/site-theme.js' },
    { src: '/navigation-scroll.js', defer: true },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <HomePrivacy />
  </div>
</template>
