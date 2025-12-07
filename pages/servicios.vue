<template>
  <div>
    <!-- SEO -->
    <Head>
      <Title>Servicios de Desarrollo Web y Software | SysifosWeb</Title>
      <Meta name="description" content="Descubre nuestros servicios de desarrollo web, aplicaciones móviles, e-commerce y software a medida. Soluciones tecnológicas completas en Chile." />
    </Head>

    <!-- Hero -->
    <Hero
      title="Nuestros Servicios"
      subtitle="Soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel"
      cta-primary-text="Solicitar Cotización"
      cta-primary-link="/contacto"
      bg-class="bg-gradient-to-br from-primary-50 to-white"
    >
      <template #image>
        <div class="text-8xl">⚙️</div>
      </template>
    </Hero>

    <!-- Main Services -->
    <section class="section-padding bg-white">
      <div class="container-custom space-y-24">
        <!-- Web Development -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="text-6xl">🌐</div>
            <h2 class="heading-2">Desarrollo Web</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              Creamos sitios web modernos, rápidos y optimizados para SEO que convierten visitantes en clientes. 
              Utilizamos las últimas tecnologías como Laravel, Vue.js, React y Nuxt para garantizar aplicaciones 
              web de alto rendimiento.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Sitios web corporativos y landing pages</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Aplicaciones web progresivas (PWA)</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Sistemas de gestión de contenidos (CMS)</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Optimización SEO y performance</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div class="text-9xl">💻</div>
          </div>
        </div>

        <!-- Mobile Apps -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-first">
            <div class="text-9xl">📱</div>
          </div>
          <div class="space-y-6">
            <div class="text-6xl">📱</div>
            <h2 class="heading-2">Aplicaciones Móviles</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android que ofrecen experiencias 
              excepcionales a tus usuarios. Desde apps de productividad hasta plataformas de e-commerce móvil.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Apps nativas iOS y Android</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Apps híbridas con React Native</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Integración con APIs y servicios backend</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Publicación en App Store y Google Play</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- E-commerce -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="text-6xl">🛒</div>
            <h2 class="heading-2">E-commerce</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              Construimos tiendas online completas y escalables que maximizan tus ventas. Integración con 
              pasarelas de pago, gestión de inventario, análisis de ventas y mucho más.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Tiendas online personalizadas</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Integración con Webpay, Mercado Pago, Stripe</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Panel administrativo completo</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Optimización de conversiones</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div class="text-9xl">🛍️</div>
          </div>
        </div>

        <!-- Custom Software -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-first">
            <div class="text-9xl">⚙️</div>
          </div>
          <div class="space-y-6">
            <div class="text-6xl">💼</div>
            <h2 class="heading-2">Software a Medida</h2>
            <p class="text-lg text-dark-600 leading-relaxed">
              Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a los procesos 
              y necesidades específicas de tu empresa. Desde ERPs hasta sistemas de gestión especializados.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Sistemas de gestión empresarial (ERP)</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">CRM y sistemas de ventas</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Automatización de procesos</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-dark-700">Integración con sistemas existentes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Nuestro Proceso</h2>
          <p class="text-lg text-dark-600 max-w-2xl mx-auto">
            Metodología ágil para resultados excepcionales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 class="heading-4">Análisis</h3>
            <p class="text-dark-600">
              Entendemos tus necesidades y objetivos de negocio
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 class="heading-4">Diseño</h3>
            <p class="text-dark-600">
              Creamos prototipos y diseños que cumplen tus expectativas
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 class="heading-4">Desarrollo</h3>
            <p class="text-dark-600">
              Construimos tu solución con las mejores tecnologías
            </p>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <h3 class="heading-4">Lanzamiento</h3>
            <p class="text-dark-600">
              Desplegamos y brindamos soporte continuo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">¿Listo para comenzar?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Cotiza tu proyecto gratis y recibe una propuesta personalizada
        </p>
        <NuxtLink to="/contacto" class="btn bg-white text-primary-600 hover:bg-gray-100">
          Solicitar Cotización
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
