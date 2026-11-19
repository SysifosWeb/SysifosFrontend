<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="bento-hero">
    <div class="bento-hero__inner">
      <h1 class="bento-hero__title" v-reveal data-delay="0">
        Captación web, automatización <span>y&nbsp;software práctico.</span>
      </h1>
      <p class="bento-hero__lead" v-reveal data-delay="60">
        Módulos con alcance cerrado, valores públicos en CLP netos + IVA e infraestructura frugal para hosting cPanel.
      </p>
      <div class="bento-hero__actions" v-reveal data-delay="100">
        <NuxtLink to="/contacto?plan=captacion-web" class="btn btn-primary px-7 py-3.5">
          Solicitar diagnóstico gratuito
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
        <a href="#paquetes" class="btn btn-secondary px-7 py-3.5">
          Explorar módulos
        </a>
      </div>
    </div>
  </section>
</template>
