<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="secondary-header-container bg-section-dark">
    <div class="site-container">
      <div class="max-w-[48rem]">
        <h1 class="about-headline">
          Tecnología con propósito. <span class="display-accent">Un equipo cercano.</span>
        </h1>
        <p class="about-description">
          Somos un equipo de desarrollo en Coquimbo. Trabajamos contigo para convertir las necesidades de tu negocio en soluciones digitales claras y útiles.
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.secondary-header-container {
  border-bottom: 1px solid var(--border);
  padding: clamp(8rem, 12vw, 11rem) 0 clamp(3.5rem, 6vw, 5rem);
}

.about-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3.2vw, 3.85rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  max-width: 22ch;
  text-wrap: balance;
  margin: 0 0 1.25rem;
}

.about-description {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 58ch;
  margin: 0;
}
</style>
