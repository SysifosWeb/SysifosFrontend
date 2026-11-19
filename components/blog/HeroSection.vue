<script setup>
</script>

<template>
  <section class="blog-hero bg-section-dark pt-32 pb-12 lg:pt-44 lg:pb-16 border-b border-line">
    <div class="section-container">
      <div class="max-w-[46rem]">
        <h1 class="blog-hero__title" v-reveal data-delay="0">
          Guías prácticas de software, captación <span class="display-accent">y automatización.</span>
        </h1>

        <p class="blog-hero__subtitle" v-reveal data-delay="80">
          Artículos técnicos y comerciales para empresas en Chile que buscan ordenar sus procesos, mejorar su web y elegir tecnología sin sobredimensionar costos.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.blog-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3.2vw, 3.85rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  margin: 0 0 1.25rem;
  text-wrap: balance;
}

.blog-hero__subtitle {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 58ch;
  margin: 0;
}
</style>
