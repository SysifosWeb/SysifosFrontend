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
    </div>
  </section>
</template>
