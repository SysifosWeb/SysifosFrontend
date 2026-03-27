<script setup>
  import pc from "@/assets/img/pc.png";
  import iphone from "@/assets/img/iphone.png";
  import building from "@/assets/img/building.png";
  import analysis from "@/assets/img/analysis.png";
  import design from "@/assets/img/design.png";
  import development from "@/assets/img/development.png";
  import delivery from "@/assets/img/delivery.png";

  const { gtag } = useGtag()
// Ejecutar cuando alguien ve la página
onMounted(() => {
  gtag('event', 'conversion', {
    'send_to': 'AW-17809723983/Xs8DCL2-sNIbEM-kq6xc',
    'value': 1.0,
    'currency': 'CLP'
  })
})
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Servicios de Desarrollo Web, E-commerce y Software a Medida',
  description: 'Servicios profesionales de desarrollo web, tiendas online, landing pages, WordPress, software a medida y mantenimiento web en Chile. Laravel, Vue.js, React, Flutter. Cotiza gratis.',
  keywords: 'servicios desarrollo web, servicios desarrollo software, landing pages chile',
  image: '/img/og-servicios.jpg'
})

setSchema({
  type: 'Service',
  data: {
    name: 'Servicios de Desarrollo Web y Software',
    description: 'Desarrollo de páginas web, tiendas online, aplicaciones móviles y software a medida',
    serviceType: 'Desarrollo de Software'
  }
})
</script>
<template>
  <div>

    <!-- Hero -->
    <Hero
      title="Nuestros Servicios"
      description="Soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel"      
    >     
    </Hero>

      <!-- Servicios Principales -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

            <div class="bg-white rounded-xl p-8 shadow-md transition-all duration-300 flex flex-col h-full
                        hover:shadow-xl hover:shadow-blue-500/50 border-t-4 border-blue-500">

                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 p-2 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <img :src="pc" alt="Landing Page" class="w-8 h-8 text-blue-600">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Landing Page que convierte visitantes en clientes</h3>
                </div>

                <p class="text-gray-600 mb-6 mt-2">
                    Creamos páginas web modernas y optimizadas para captar clientes y generar contacto directo.
                </p>

                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        1–5 secciones
                    </li>
                     <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Diseño básico
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Formulario de contacto
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Integración con WhatsApp/Correo
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        SEO inicial
                    </li>
                </ul>

                <!-- <div class="text-sm text-gray-500 mb-4">
                    <strong>Tecnologías:</strong> React, Vue.js, Laravel, Node.js, TypeScript
                </div> -->
                <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20Landing%20pages"
                target="_blank"
                class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 mt-auto text-center">
                    Solicitar Cotización
                </a>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-md transition-all duration-300 flex flex-col h-full
                        hover:shadow-xl hover:shadow-orange-500/50 border-t-4 border-orange-500">

                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 p-2 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <img :src="iphone" alt="E-commerce" class="w-8 h-8 text-orange-600">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Tu tienda online lista para vender hoy</h3>
                </div>

                <p class="text-gray-600 mb-6 mt-2">
                    Desarrollamos tiendas online completas con pasarela de pago segura, carga inicial de productos y envío integrado.
                </p>

                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Tienda online
                    </li>
                     <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Pasarela de pago
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Integración de envíos
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Carga inicial de productos (hasta 20)
                    </li>

                    </ul>

                <!-- <div class="text-sm text-gray-500 mb-4">
                    <strong>Tecnologías:</strong> React Native, Flutter, Swift, Kotlin
                </div> -->
                    <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20Tienda%20online%20"
                    target="_blank"
                    class="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 mt-auto text-center">
                        Solicitar Cotización
                    </a>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-md transition-all duration-300 flex flex-col h-full
                        hover:shadow-xl hover:shadow-green-500/50 border-t-4 border-green-500">

                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 p-2 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <img :src="building" alt="Sitio WordPress" class="w-8 h-8 text-green-600">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Página web profesional fácil de administrar</h3>
                </div>

                <p class="text-gray-600 mb-6 mt-2">
                    Sitios WordPress personalizados, adaptables y fáciles de gestionar, con plugins esenciales y capacitación incluida.
                </p>

                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Plantilla personalizada
                    </li>
                      <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Plugins esenciales
                    </li>
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        SEO básico
                    </li>

                    </ul>

                <!-- <div class="text-sm text-gray-500 mb-4">
                    <strong>Tecnologías:</strong> WordPress, Elementor, WooCommerce
                </div> -->
                <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20página%20wordpress"
                target="_blank"
                class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 mt-auto text-center">
                    Solicitar Cotización
                </a>
            </div>
            <!--Software a medida-->
            <div class="bg-white rounded-xl p-8 shadow-md transition-all duration-300 flex flex-col h-full
                        hover:shadow-xl hover:shadow-purple-500/50 border-t-4 border-purple-500 lg:col-start-1 lg:col-end-2">

                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 p-2 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <img :src="design" alt="Software a Medida" class="w-8 h-8 text-purple-600">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Soluciones digitales a medida para tu empresa</h3>
                </div>

                <p class="text-gray-600 mb-6 mt-2">
                    Optimizamos procesos internos con soluciones personalizadas que facilitan la gestión y la toma de decisiones.
                </p>

                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Gestión de datos
                    </li>
                     <li class="flex items-center text-gray-700">
                       <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                        Automatización de procesos
                    </li>
                    <li class="flex items-center text-gray-700">
                       <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                        Reportes y analíticas
                    </li>
                    </ul>

                <!-- <div class="text-sm text-gray-500 mb-4">
                    <strong>Tecnologías:</strong> PHP, Laravel, MySQL, Node.js, Vue.js
                </div> -->
                <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20soluciones%20digitales%20a%20medida"
                target="_blank"
                class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200 mt-auto text-center">
                    Solicitar Cotización
                </a>
            </div>
            <!--Mantenimiento-->
            <div class="bg-white rounded-xl p-8 shadow-md transition-all duration-300 flex flex-col h-full
                        hover:shadow-xl hover:shadow-amber-500/50 border-t-4 border-amber-500 lg:col-start-2 lg:col-end-3">

                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 p-2 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <img :src="delivery" alt="Mantenimiento Web" class="w-8 h-8 text-amber-600">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Mantenimiento web: seguro, actualizado y siempre disponible</h3>
                </div>

                <p class="text-gray-600 mb-6 mt-2">
                    Nos encargamos de que tu sitio web esté siempre actualizado, seguro y funcionando correctamente, incluyendo backups y monitoreo constante.
                </p>

                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Actualización de contenido
                    </li>
                    <li class="flex items-center text-gray-700">
                         <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Backups periódicos
                    </li>
                    <li class="flex items-center text-gray-700">
                         <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Monitoreo de seguridad
                    </li>
                    </ul>

                <!-- <div class="text-sm text-gray-500 mb-4">
                    <strong>Tecnologías:</strong> WordPress, PHP, HTML5, CSS3, JavaScript

                </div> -->
                <a href="https://wa.me/56949109970?text=Hola,%20quiero%20solicitar%20una%20cotización%20para%20mantenimiento%20web"
                    target="_blank"
                    class="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200 mt-auto text-center">
                        Solicitar Cotización
                </a>
            </div>

        </div>
    </div>
</section>
        <!-- Proceso de Desarrollo -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestro Proceso de Desarrollo
                    </h2>
                    <p class="text-xl text-gray-600">
                        Metodología ágil que garantiza entregas de calidad en tiempo y forma
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mx-auto mb-6">
                            <img :src="analysis" alt="Análisis y Planificación" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Análisis y Planificación</h3>
                        <p class="text-gray-600">
                            Entendemos tus necesidades, definimos objetivos y creamos una estrategia detallada para tu proyecto.
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-orange-300 flex items-center justify-center mx-auto mb-6">
                            <img :src="design" alt="Diseño UX/UI" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Diseño UX/UI</h3>
                        <p class="text-gray-600">
                            Creamos wireframes, prototipos y diseños que reflejan la identidad de tu marca y optimizan la experiencia del usuario.
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-6">
                            <img :src="development" alt="Desarrollo Ágil" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Desarrollo Ágil</h3>
                        <p class="text-gray-600">
                            Programamos con sprints de 2 semanas, entregas incrementales y feedback continuo para asegurar la calidad.
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6">
                            <img :src="delivery" alt="Lanzamiento y Soporte" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Lanzamiento y Soporte</h3>
                        <p class="text-gray-600">
                            Desplegamos tu proyecto en producción y brindamos soporte técnico continuo para garantizar su funcionamiento óptimo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tecnologías -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Stack Tecnológico
                    </h2>
                    <p class="text-xl text-gray-600">
                        Trabajamos con las tecnologías más modernas y demandadas del mercado
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 rounded-xl p-8">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">Frontend</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">React & Next.js</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Vue.js & Nuxt.js</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Angular</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-3/4 h-2 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">TypeScript</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-xl p-8">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">Backend</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Laravel & PHP</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Node.js & Express</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-green-600 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Python & Django</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">APIs RESTful</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-purple-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="bg-gray-50 rounded-xl p-8">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">DevOps & Cloud</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">AWS & Azure</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Docker & Kubernetes</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-3/4 h-2 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">CI/CD Pipelines</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-full h-2 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Monitoring</span>
                                <div class="w-16 h-2 bg-gray-200 rounded-full">
                                    <div class="w-3/4 h-2 bg-purple-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ¿Listo para Comenzar tu Proyecto?
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Conversemos sobre tus necesidades y te ayudaremos a encontrar la solución perfecta
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Solicitar Cotización
                    </a>
                    <!-- <a href="/portfolio" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
                        Ver Proyectos
                    </a> -->
                </div>
            </div>
        </section>
  </div>
</template>
