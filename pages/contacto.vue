<template>
  <div>
    <Head>
      <Title>Contacto - Cotiza tu Proyecto | SysifosWeb</Title>
      <Meta name="description" content="Contáctanos para cotizar tu proyecto de desarrollo web o software. Estamos listos para ayudarte." />
    </Head>

    <Hero
      title="Contáctanos"
      subtitle="Estamos listos para ayudarte a hacer realidad tu proyecto"
      :show-cta="false"
      bg-class="bg-gradient-to-br from-primary-50 to-white"
    >
      <template #image>
        <div class="text-8xl">📧</div>
      </template>
    </Hero>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div>
              <h2 class="heading-3 mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="heading-3 mb-6">Información de Contacto</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-dark-900 mb-1">Email</h3>
                    <a href="mailto:contacto@sysifosweb.cl" class="text-primary-600 hover:text-primary-700">
                      contacto@sysifosweb.cl
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-dark-900 mb-1">Teléfono</h3>
                    <a href="tel:+56912345678" class="text-primary-600 hover:text-primary-700">
                      +56 9 1234 5678
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-dark-900 mb-1">Ubicación</h3>
                    <p class="text-dark-600">Santiago, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-gradient-to-br from-primary-50 to-secondary-50">
              <h3 class="heading-4 mb-4">Horario de Atención</h3>
              <div class="space-y-2 text-dark-700">
                <p><span class="font-medium">Lunes - Viernes:</span> 9:00 - 18:00</p>
                <p><span class="font-medium">Sábado:</span> 10:00 - 14:00</p>
                <p><span class="font-medium">Domingo:</span> Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
