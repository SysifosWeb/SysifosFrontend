<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="bold-hero">
    <div class="bold-hero__inner">
      <h1 class="bold-hero__title">
        Tecnología con propósito. <span>Un equipo cercano.</span>
      </h1>
      <p class="bold-hero__lead">
        Somos un equipo de desarrollo en Coquimbo. Trabajamos contigo para convertir las necesidades de tu negocio en soluciones digitales claras y útiles.
      </p>

      <dl class="bold-hero__metrics">
        <div class="bold-metric">
          <dt>Coquimbo</dt>
          <dd>Base operativa en Chile con trabajo remoto nacional</dd>
        </div>
        <div class="bold-metric">
          <dt>Trato directo</dt>
          <dd>Hablas directamente con quienes diseñan y programan</dd>
        </div>
        <div class="bold-metric">
          <dt>Foco práctico</dt>
          <dd>Captación web, flujos comerciales y automatización</dd>
        </div>
      </dl>
    </div>
  </header>
</template>
