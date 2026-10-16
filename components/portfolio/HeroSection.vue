<script setup>
</script>

<template>
  <section class="portfolio-hero bg-section-dark">
    <div class="section-container relative z-20 text-center flex flex-col items-center">
        <h1 class="portfolio-headline mb-8" v-reveal data-delay="100">
          Ideas que toman <span class="display-accent">forma digital.</span>
        </h1>

        <div class="relative max-w-xl mx-auto" v-reveal data-delay="200">
            <p class="portfolio-subtitle">
                Conoce algunos de los sitios y plataformas que hemos creado para nuestros clientes.
            </p>
        </div>
        
    </div>
  </section>
</template>

<style scoped>
.portfolio-hero {
  border-bottom: 1px solid var(--border);
  padding: clamp(8rem, 14vw, 12rem) 0 clamp(3.5rem, 7vw, 6rem);
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.portfolio-headline {
  max-inline-size: 18ch;
  font-size: var(--fs-page-hero);
  font-weight: var(--fw-hero);
  line-height: var(--lh-hero);
  letter-spacing: var(--ls-hero);
  color: var(--text-main);
  text-wrap: balance;
}

.portfolio-subtitle {
  font-size: var(--fs-lead);
  line-height: var(--lh-lead);
  color: var(--text-secondary);
}
</style>
