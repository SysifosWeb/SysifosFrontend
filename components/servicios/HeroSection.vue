<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="bold-hero">
    <div class="bold-hero__inner">
      <h1 class="bold-hero__title" v-reveal data-delay="0">
        Captación web, automatización <span>y&nbsp;software práctico.</span>
      </h1>
      <p class="bold-hero__lead" v-reveal data-delay="70">
        Infraestructura digital que ordena tus cotizaciones, evita que se pierdan clientes y automatiza trabajo manual sin costos inflados de servidores.
      </p>

      <div class="bold-hero__actions" v-reveal data-delay="120">
        <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary px-8 py-4">
          Solicitar diagnóstico gratuito
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
        <a href="#paquetes" class="btn btn-secondary px-8 py-4">
          Ver paquetes y valores
        </a>
      </div>

      <dl class="bold-hero__metrics" v-reveal data-delay="160">
        <div class="bold-metric">
          <dt>$200k + IVA</dt>
          <dd>Entrada acotada con valores públicos y alcance cerrado</dd>
        </div>
        <div class="bold-metric">
          <dt>2–4 semanas</dt>
          <dd>Entregas visibles y probadas antes de publicar</dd>
        </div>
        <div class="bold-metric">
          <dt>cPanel</dt>
          <dd>Arquitectura frugal sin cuentas cloud caras cada mes</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
