<script setup>
  import heroImage from '@/assets/img/home_image2.png'
  import react from "@/assets/img/React.png";
  import vue from "@/assets/img/Vue.js.png";
  import laravel from "@/assets/img/Laravel.png";
  import node from "@/assets/img/Node.js.png";
  import flutter from "@/assets/img/Flutter.png";
  import pc from "@/assets/img/pc.png";
  import iphone from "@/assets/img/iphone.png";
  import building from "@/assets/img/building.png";
  import analysis from "@/assets/img/analysis.png";
  import design from "@/assets/img/design.png";
  import development from "@/assets/img/development.png";
  import delivery from "@/assets/img/delivery.png";

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Paginas web y Desarrolladores de Software en Chile',
  description: 'Especialistas en desarrollo de software, páginas web, tiendas online y aplicaciones móviles en Chile. Laravel, Vue.js, React, Flutter. Cotiza tu proyecto gratis. Coquimbo, Chile.',
  keywords: 'sisifos, sysifosweb, sysifos web',
  image: '/img/og-home.png'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Sysifos Web - Desarrolladores de Software en Chile',
    description: 'Empresa de desarrollo de software, páginas web y aplicaciones móviles en Chile'
  }
})
</script>
<template>
  <div>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white overflow-hidden pt-16">
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-center lg:text-left">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span class="text-cyan-300">Impulsa</span> tu marca con tecnología y diseño que
                            <span class="text-cyan-300"> inspiran confianza</span>

                        </h1>
                        <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                            Desarrollamos soluciones digitales modernas y personalizadas para que tu negocio crezca y destaque en el mundo online.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/contacto" class="bg-cyan-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                               Iniciar mi Proyecto Ahora
                            </a>
                            <a href="/portfolio" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                                Ver Portfolio
                            </a>
                        </div>
                    </div>
                    <div class="hidden lg:flex justify-center lg:justify-end" aria-hidden="true">
                        <img :src="heroImage" alt="Desarrollo Web Profesional" class="w-80 h-80 md:w-130 md:h-130 object-cover rounded-xl" />

                    </div>
                </div>
            </div>
        </section>

   <!-- Servicios Principales -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <!-- CARD 1 -->
                    <div class="bg-white rounded-xl p-8 flex flex-col justify-between
                                shadow-md transition-all duration-300
                                hover:shadow-xl hover:shadow-sky-500/50
                                border-t-4 border-sky-500">

                        <div>
                            <div class="flex items-center space-x-4 mb-4">
                                <div class="w-16 h-16 p-2 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <img :src="pc" alt="Desarrollo Web" class="w-10 h-10">
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Convierte visitas en clientes</h3>
                            </div>

                            <p class="text-base text-gray-600 mb-6">
                                Crea una página que impacte desde el primer clic. Diseñamos tu landing page optimizada para captar contactos y aumentar tus ventas.
                            </p>

                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• 1–5 secciones</li>
                                <li>• Diseño básico</li>
                                <li>• Formulario de contacto</li>
                                <li>• Integración con WhatsApp/Correo</li>
                                <li>• SEO inicial</li>
                            </ul>
                        </div>

                    <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20Landing%20Pages%20"
                    target="_blank"
                    class="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors duration-200 mt-auto text-center">
                        Solicitar Cotización
                    </a>
                    </div>

                    <!-- CARD 2 -->
                    <div class="bg-white rounded-xl p-8 flex flex-col justify-between
                                shadow-md transition-all duration-300
                                hover:shadow-xl hover:shadow-orange-500/50
                                border-t-4 border-orange-500">

                        <div>
                            <div class="flex items-center space-x-4 mb-4">
                                <div class="w-16 h-16 p-2 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    <img :src="iphone" alt="E-commerce" class="w-10 h-10">
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900">Tu tienda online lista para vender</h3>
                            </div>

                            <p class="text-base text-gray-600 mb-6">
                                Lleva tu negocio al mundo digital. Desarrollamos tu tienda completa con pagos seguros, gestión de productos y envíos automatizados.
                            </p>

                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• Tienda online</li>
                                <li>• Pasarela de pago</li>
                                <li>• Integración de envíos</li>
                                <li>• Carga inicial de productos (hasta 20)</li>
                            </ul>
                        </div>

                    <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20Tienda%20online%20"
                    target="_blank"
                    class="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 mt-auto text-center">
                        Solicitar Cotización
                    </a>
                    </div>

                    <!-- CARD 3 -->
                    <div class="bg-white rounded-xl p-8 flex flex-col justify-between
                                shadow-md transition-all duration-300
                                hover:shadow-xl hover:shadow-green-500/50
                                border-t-4 border-green-500">

                        <div>
                            <div class="flex items-center space-x-4 mb-4">
                                <div class="w-16 h-16 p-2 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <img :src="building" alt="Sitio WordPress" class="w-8 h-8">
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Tu página web profesional</h3>
                            </div>

                            <p class="text-base text-gray-600 mb-6">
                                Construye una presencia sólida con un sitio fácil de administrar, adaptable a cualquier dispositivo y con total control.
                            </p>

                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• 5–15 páginas</li>
                                <li>• Plantilla personalizada</li>
                                <li>• Diseño responsive</li>
                                <li>• Plugins básicos</li>
                                <li>• Capacitación breve</li>
                            </ul>
                        </div>

                    <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20Sitio%20web%20wordpress%20"
                    target="_blank"
                    class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 mt-auto text-center">
                        Solicitar Cotización
                    </a>
                    </div>

                </div>

                <div class="mt-12 flex justify-center md:justify-end">
                    <a href="/servicios" class="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
                        Ver Todos Nuestros Servicios →
                    </a>
                </div>
            </div>
        </section>
     <!-- Tecnologías -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tecnologías que Dominamos
                    </h2>
                    <p class="text-xl text-gray-600">
                        Trabajamos con las tecnologías más modernas y demandadas del mercado
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="react" alt="React" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">React</span>
                    </div>
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="vue" alt="Vue" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">Vue.js</span>
                    </div>
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="laravel" alt="Laravel" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">Laravel</span>
                    </div>
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="node" alt="Node" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">Node.js</span>
                    </div>
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="react" alt="React Native" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">React Native</span>
                    </div>
                    <div class="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                        <img :src="flutter" alt="Flutter" class="w-20 h-20">
                        <span class="text-sm font-medium text-gray-700">Flutter</span>
                    </div>
                </div>
            </div>
        </section>

    <!-- Proceso de Trabajo -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestro Proceso
                    </h2>
                    <p class="text-xl text-gray-600">
                        Metodología ágil que garantiza resultados excepcionales
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-20 h-20 flex items-center bg-blue-300 rounded-full justify-center mx-auto mb-6">
                            <img :src="analysis" alt="Análisis" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Análisis</h3>
                        <p class="text-gray-600">
                            Entendemos tus necesidades y objetivos para crear la estrategia perfecta.
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 flex items-center bg-orange-300 rounded-full justify-center mx-auto mb-6">
                            <img :src="design" alt="Diseño" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Diseño</h3>
                        <p class="text-gray-600">
                            Creamos prototipos y diseños que reflejan la identidad de tu marca.
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 flex items-center bg-cyan-500 rounded-full justify-center mx-auto mb-6">
                            <img :src="development" alt="Desarrollo" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Desarrollo</h3>
                        <p class="text-gray-600">
                            Implementamos la solución usando las mejores prácticas y tecnologías.
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 flex items-center bg-blue-500 rounded-full justify-center mx-auto mb-6">
                            <img :src="delivery" alt="Entrega" class="w-12 h-12">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Entrega</h3>
                        <p class="text-gray-600">
                            Desplegamos tu proyecto y brindamos soporte continuo para su éxito.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonios -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo que Dicen Nuestros Clientes
                    </h2>
                    <p class="text-xl text-gray-600">
                        Testimonios reales de empresas que han confiado en nosotros
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-50 rounded-xl p-8">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-6">
                            "SysifosWeb transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-semibold">MR</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">María Rodríguez</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-xl p-8">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-6">
                            "La aplicación móvil que desarrollaron aumentó nuestras ventas en un 40%. Excelente trabajo y comunicación constante."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-semibold">CL</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Carlos López</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-xl p-8">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-6">
                            "Sistema ERP que revolucionó nuestra gestión. Ahora todo es más eficiente y tenemos mejor control de nuestros procesos."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-semibold">AS</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Ana Silva</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ¿Listo para Transformar tu Negocio?
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Solicitar Cotización
                    </a>
                    <a href="https://wa.me/56949109970" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
                        target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
  </div>
</template>


