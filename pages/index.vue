<template>
  <div>
    <!-- SEO -->
    <Head>
      <Title>Páginas Web, Tiendas Online y Software a Medida en Chile | SysifosWeb</Title>
      <Meta name="description" content="Especialistas en desarrollo de software, aplicaciones web y soluciones digitales en Chile. Laravel, Vue.js, React y más. Cotiza tu proyecto gratis." />
      <Meta name="keywords" content="desarrollo de software Chile, desarrollo web, aplicaciones web, Laravel, Vue.js, React, desarrollo frontend, desarrollo backend, soluciones digitales" />
    </Head>

    <!-- Hero Section -->
    <Hero
      title="Transformamos tus ideas en soluciones digitales"
      subtitle="Especialistas en desarrollo de software, aplicaciones web y soluciones digitales en Chile. Creamos experiencias digitales que impulsan tu negocio."
      cta-primary-text="Cotizar Proyecto"
      cta-primary-link="/contacto"
      cta-secondary-text="Ver Portfolio"
      cta-secondary-link="/portfolio"
    >
      <template #image>
        <div class="text-8xl animate-bounce">💻</div>
      </template>
    </Hero>

    <!-- Services Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Nuestros Servicios</h2>
          <p class="text-lg text-dark-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="🌐"
            title="Desarrollo Web"
            description="Sitios web modernos, rápidos y optimizados para SEO. Utilizamos las últimas tecnologías como Laravel, Vue.js y React."
            link="/servicios"
          />
          <ServiceCard
            icon="📱"
            title="Aplicaciones Móviles"
            description="Apps nativas e híbridas para iOS y Android. Experiencias móviles que tus usuarios amarán."
            link="/servicios"
          />
          <ServiceCard
            icon="🛒"
            title="E-commerce"
            description="Tiendas online completas con pasarelas de pago, gestión de inventario y análisis de ventas."
            link="/servicios"
          />
          <ServiceCard
            icon="⚙️"
            title="Software a Medida"
            description="Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio."
            link="/servicios"
          />
          <ServiceCard
            icon="☁️"
            title="Cloud & DevOps"
            description="Infraestructura en la nube, CI/CD, y automatización para mantener tus aplicaciones siempre disponibles."
            link="/servicios"
          />
          <ServiceCard
            icon="🎨"
            title="UI/UX Design"
            description="Diseños intuitivos y atractivos que mejoran la experiencia de usuario y aumentan conversiones."
            link="/servicios"
          />
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="section-padding bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Tecnologías que Dominamos</h2>
          <p class="text-lg text-dark-300 max-w-2xl mx-auto">
            Trabajamos con las tecnologías más modernas y demandadas del mercado
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div v-for="tech in technologies" :key="tech.name" class="flex flex-col items-center space-y-3 group">
            <div class="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-4xl group-hover:bg-white/20 transition-all group-hover:scale-110">
              {{ tech.icon }}
            </div>
            <span class="text-sm font-medium text-dark-300 group-hover:text-white transition-colors">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Highlights -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Proyectos Destacados</h2>
          <p class="text-lg text-dark-600 max-w-2xl mx-auto">
            Algunos de nuestros trabajos más recientes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            title="E-commerce de Moda"
            description="Tienda online completa con integración de pagos, gestión de inventario y panel administrativo."
            :tags="['Laravel', 'Vue.js', 'Stripe']"
            link="/portfolio"
            image-emoji="👗"
          />
          <PortfolioCard
            title="App de Delivery"
            description="Aplicación móvil para pedidos de comida con seguimiento en tiempo real y múltiples métodos de pago."
            :tags="['React Native', 'Node.js', 'MongoDB']"
            link="/portfolio"
            image-emoji="🍔"
          />
          <PortfolioCard
            title="Sistema de Gestión"
            description="Software empresarial para gestión de recursos humanos, nómina y control de asistencia."
            :tags="['Laravel', 'MySQL', 'Tailwind']"
            link="/portfolio"
            image-emoji="📊"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="btn-primary">
            Ver Todos los Proyectos
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">¿Listo para comenzar tu proyecto?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Conversemos sobre tu idea y te ayudaremos a convertirla en realidad
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contacto" class="btn bg-white text-primary-600 hover:bg-gray-100">
            Cotizar Proyecto Gratis
          </NuxtLink>
          <NuxtLink to="/nosotros" class="btn border-2 border-white text-white hover:bg-white/10">
            Conocer Más
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const technologies = [
  { name: 'Laravel', icon: '🔴' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
  { name: 'Tailwind', icon: '🎨' }
]
</script>
