<script setup>
</script>

<template>
  <section class="contact-hero bg-section-dark pt-36 pb-12 lg:pt-44 lg:pb-16 border-b border-line">
    <div class="section-container">
      <div class="max-w-[46rem]">
        <h1 class="contact-hero__title" v-reveal data-delay="0">
          Hablemos de tu <span class="display-accent">próximo proyecto.</span>
        </h1>

        <p class="contact-hero__subtitle" v-reveal data-delay="80">
          Cuéntanos qué quieres mejorar en captación, cotizaciones o automatización. Te respondemos en menos de 24 horas hábiles con un diagnóstico honesto y alcance claro.
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

.contact-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 1.4rem + 3.2vw, 3.85rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--text-main);
  margin: 0 0 1.25rem;
  text-wrap: balance;
}

.contact-hero__subtitle {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--text-secondary);
  max-width: 58ch;
  margin: 0;
}
</style>
