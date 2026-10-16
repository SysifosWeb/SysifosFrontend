<script setup>
const stats = [
    { label: 'Proyectos entregados', value: '24' },
    { label: 'Disponibilidad activa', value: '100%' },
    { label: 'Clientes satisfechos', value: '15+' }
]
</script>

<template>
  <section class="relative bg-section-dark py-12 lg:py-16 overflow-hidden">
    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div v-for="(stat, index) in stats" :key="stat.label" class="portfolio-stat" v-reveal :data-delay="index * 150">
          <div class="text-4xl md:text-5xl font-bold text-content mb-3">
              {{ stat.value }}
          </div>
          
          <div class="text-small font-medium text-muted">
              {{ stat.label }}
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.portfolio-stat { background: var(--bg-surface); border-radius: var(--radius-md); padding: clamp(2rem, 5vw, 3rem); display: flex; flex-direction: column; align-items: center; text-align: center; }
</style>
