<template>
  <div>
    <!-- SEO -->
    <Head>
      <Title>Portfolio - Proyectos Realizados | SysifosWeb</Title>
      <Meta name="description" content="Explora nuestro portfolio de proyectos de desarrollo web, aplicaciones móviles y software a medida. Casos de éxito y soluciones digitales innovadoras." />
    </Head>

    <!-- Hero -->
    <Hero
      title="Nuestro Portfolio"
      subtitle="Proyectos que demuestran nuestra experiencia y compromiso con la excelencia"
      cta-primary-text="Iniciar Proyecto"
      cta-primary-link="/contacto"
      bg-class="bg-gradient-to-br from-secondary-50 to-white"
    >
      <template #image>
        <div class="text-8xl">🎨</div>
      </template>
    </Hero>

    <!-- Portfolio Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            title="E-commerce de Moda Sustentable"
            description="Tienda online completa con catálogo de productos, carrito de compras, integración con Webpay y panel administrativo para gestión de inventario y pedidos."
            :tags="['Laravel', 'Vue.js', 'Tailwind', 'MySQL']"
            link="#"
            image-emoji="👗"
          />

          <PortfolioCard
            title="App de Delivery de Comida"
            description="Aplicación móvil para iOS y Android con seguimiento en tiempo real, múltiples métodos de pago y sistema de calificaciones para restaurantes."
            :tags="['React Native', 'Node.js', 'MongoDB', 'Socket.io']"
            link="#"
            image-emoji="🍔"
          />

          <PortfolioCard
            title="Sistema de Gestión Hospitalaria"
            description="Software empresarial para gestión de pacientes, citas médicas, historiales clínicos y facturación. Incluye módulos para diferentes roles de usuario."
            :tags="['Laravel', 'MySQL', 'Bootstrap', 'Chart.js']"
            link="#"
            image-emoji="🏥"
          />

          <PortfolioCard
            title="Plataforma de Cursos Online"
            description="LMS (Learning Management System) con streaming de video, evaluaciones interactivas, certificados digitales y panel de progreso para estudiantes."
            :tags="['Nuxt.js', 'Laravel', 'PostgreSQL', 'AWS']"
            link="#"
            image-emoji="📚"
          />

          <PortfolioCard
            title="CRM para Inmobiliaria"
            description="Sistema de gestión de clientes, propiedades y ventas. Incluye portal público para búsqueda de propiedades y sistema de citas virtuales."
            :tags="['React', 'Node.js', 'MongoDB', 'Google Maps API']"
            link="#"
            image-emoji="🏠"
          />

          <PortfolioCard
            title="App de Fitness y Nutrición"
            description="Aplicación móvil para seguimiento de ejercicios, planes nutricionales personalizados, contador de calorías y comunidad de usuarios."
            :tags="['Flutter', 'Firebase', 'Node.js', 'TensorFlow']"
            link="#"
            image-emoji="💪"
          />

          <PortfolioCard
            title="Portal de Noticias Digital"
            description="Sitio web de noticias con CMS personalizado, categorías, etiquetas, comentarios, newsletter y optimización SEO avanzada."
            :tags="['Next.js', 'Strapi', 'PostgreSQL', 'Redis']"
            link="#"
            image-emoji="📰"
          />

          <PortfolioCard
            title="Sistema de Reservas Hoteleras"
            description="Plataforma de reservas online con disponibilidad en tiempo real, pagos seguros, gestión de habitaciones y reportes de ocupación."
            :tags="['Vue.js', 'Laravel', 'MySQL', 'Stripe']"
            link="#"
            image-emoji="🏨"
          />

          <PortfolioCard
            title="Marketplace de Servicios"
            description="Plataforma que conecta profesionales con clientes. Sistema de perfiles, cotizaciones, chat en tiempo real y sistema de reputación."
            :tags="['React', 'Django', 'PostgreSQL', 'WebSockets']"
            link="#"
            image-emoji="🔧"
          />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">50+</div>
            <div class="text-dark-300">Proyectos Completados</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">40+</div>
            <div class="text-dark-300">Clientes Satisfechos</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">5+</div>
            <div class="text-dark-300">Años de Experiencia</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">100%</div>
            <div class="text-dark-300">Compromiso</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">¿Tu proyecto será el próximo?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Conversemos sobre tu idea y hagámosla realidad juntos
        </p>
        <NuxtLink to="/contacto" class="btn bg-white text-primary-600 hover:bg-gray-100">
          Comenzar Ahora
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
