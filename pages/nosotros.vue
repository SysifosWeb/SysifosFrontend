<template>
  <div>
    <!-- SEO -->
    <Head>
      <Title>Nosotros - Expertos en Desarrollo de Software | SysifosWeb</Title>
      <Meta name="description" content="Conoce al equipo de SysifosWeb. Somos especialistas en desarrollo de software con años de experiencia creando soluciones digitales innovadoras en Chile." />
    </Head>

    <!-- Hero -->
    <Hero
      title="Sobre Nosotros"
      subtitle="Somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales que transforman negocios."
      :show-cta="false"
      bg-class="bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      <template #image>
        <div class="text-8xl">🚀</div>
      </template>
    </Hero>

    <!-- Mission & Vision -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-6">
            <div class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Nuestra Misión
            </div>
            <h2 class="heading-2">Transformar ideas en realidad digital</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              En SysifosWeb, nuestra misión es ayudar a empresas y emprendedores a alcanzar sus objetivos mediante 
              soluciones tecnológicas innovadoras, eficientes y escalables. Creemos que la tecnología debe ser 
              accesible y estar al servicio del crecimiento de tu negocio.
            </p>
            <p class="text-lg text-dark-600 leading-relaxed">
              Nos especializamos en desarrollo web, aplicaciones móviles y software a medida, utilizando las 
              tecnologías más modernas del mercado para garantizar productos de alta calidad.
            </p>
          </div>

          <div class="space-y-6">
            <div class="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
              Nuestra Visión
            </div>
            <h2 class="heading-2">Ser líderes en innovación tecnológica</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              Aspiramos a ser reconocidos como la empresa líder en desarrollo de software en Chile, 
              destacándonos por nuestra excelencia técnica, compromiso con nuestros clientes y capacidad 
              de innovación constante.
            </p>
            <p class="text-lg text-dark-600 leading-relaxed">
              Queremos ser el socio tecnológico de confianza para empresas que buscan transformarse 
              digitalmente y mantenerse competitivas en un mundo cada vez más conectado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Nuestros Valores</h2>
          <p class="text-lg text-dark-600 max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo diario
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-3xl">
              💡
            </div>
            <h3 class="heading-4">Innovación</h3>
            <p class="text-dark-600">
              Buscamos constantemente nuevas formas de resolver problemas y mejorar procesos.
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-3xl">
              🎯
            </div>
            <h3 class="heading-4">Excelencia</h3>
            <p class="text-dark-600">
              Nos comprometemos a entregar productos de la más alta calidad en cada proyecto.
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-3xl">
              🤝
            </div>
            <h3 class="heading-4">Compromiso</h3>
            <p class="text-dark-600">
              Tu éxito es nuestro éxito. Trabajamos como un equipo para lograr tus objetivos.
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-3xl">
              🔒
            </div>
            <h3 class="heading-4">Transparencia</h3>
            <p class="text-dark-600">
              Comunicación clara y honesta en cada etapa del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">¿Por qué elegirnos?</h2>
          <p class="text-lg text-dark-600 max-w-2xl mx-auto">
            Razones que nos hacen diferentes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="heading-4 mb-3">Desarrollo Ágil</h3>
            <p class="text-dark-600">
              Utilizamos metodologías ágiles para entregas rápidas y flexibles, adaptándonos a tus necesidades.
            </p>
          </div>

          <div class="card">
            <div class="text-4xl mb-4">🛡️</div>
            <h3 class="heading-4 mb-3">Código de Calidad</h3>
            <p class="text-dark-600">
              Escribimos código limpio, documentado y siguiendo las mejores prácticas de la industria.
            </p>
          </div>

          <div class="card">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="heading-4 mb-3">Soporte Continuo</h3>
            <p class="text-dark-600">
              No te dejamos solo después del lanzamiento. Ofrecemos soporte y mantenimiento continuo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">¿Quieres trabajar con nosotros?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel
        </p>
        <NuxtLink to="/contacto" class="btn bg-white text-primary-600 hover:bg-gray-100">
          Contáctanos Ahora
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
