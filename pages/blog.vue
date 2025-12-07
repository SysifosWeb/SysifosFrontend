<template>
  <div>
    <Head>
      <Title>Blog - Artículos sobre Desarrollo Web | SysifosWeb</Title>
      <Meta name="description" content="Lee nuestros artículos sobre desarrollo web, programación y tecnología." />
    </Head>

    <Hero
      title="Blog"
      subtitle="Artículos, tutoriales y novedades sobre desarrollo web y tecnología"
      :show-cta="false"
      bg-class="bg-gradient-to-br from-primary-50 to-white"
    >
      <template #image>
        <div class="text-8xl">📝</div>
      </template>
    </Hero>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="Guía Completa de Laravel 11"
            excerpt="Descubre todas las nuevas características de Laravel 11."
            date="2024-12-01"
            category="Laravel"
            link="#"
          />
          <BlogCard
            title="Vue.js 3 vs React"
            excerpt="Comparativa detallada entre Vue.js 3 y React."
            date="2024-11-28"
            category="Frontend"
            link="#"
          />
          <BlogCard
            title="Optimización SEO para Nuxt 3"
            excerpt="Mejores prácticas para optimizar el SEO de tu aplicación Nuxt 3."
            date="2024-11-25"
            category="SEO"
            link="#"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
