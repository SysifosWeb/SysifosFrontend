<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="blueprint-hero-wrap bg-section-dark">
    <div class="site-container">
      <div class="blueprint-hero">
        <div class="blueprint-hero__content">
          <h1 class="blueprint-hero__title">
            Tecnología con propósito. <span>Un equipo cercano.</span>
          </h1>
          <p class="blueprint-hero__lead">
            Somos un equipo de desarrollo en Coquimbo. Trabajamos contigo para convertir las necesidades de tu negocio en soluciones digitales claras y útiles.
          </p>
        </div>

        <dl class="blueprint-spec-strip">
          <div class="blueprint-spec">
            <dt>Base operativa</dt>
            <dd>Región de Coquimbo, Chile</dd>
          </div>
          <div class="blueprint-spec">
            <dt>Trato directo</dt>
            <dd>Hablas con quienes diseñan y programan</dd>
          </div>
          <div class="blueprint-spec">
            <dt>Especialidad</dt>
            <dd>Captación web, flujos comerciales y automatización</dd>
          </div>
        </dl>
      </div>
    </div>
  </header>
</template>
