<script setup>
import ansar from '@/assets/img/ansar.gif';
import carmotors from '@/assets/img/car.gif';
import faremin from '@/assets/img/faremin.gif';
import react from "@/assets/img/react.png";
import vue from "@/assets/img/vue.js.png";
import laravel from "@/assets/img/laravel.png";
import node from "@/assets/img/Node.js.png";
import flutter from "@/assets/img/flutter.png";
</script>

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
      description="Proyectos que demuestran nuestra experiencia y compromiso con la excelencia"     
    >      
    </Hero>

      <!-- Proyecto Destacado -->
<section class="py-20 bg-white">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestro Proyecto Más Reciente
                    </h2>
                    <p class="text-xl text-gray-600">
                        Un ejemplo fresco de cómo convertimos la visión de nuestros clientes en tecnología escalable.
                    </p>
                </div>
        <div class="relative rounded-2xl p-8 lg:p-12 overflow-hidden shadow-2xl">

            <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105"
                style="background-image: url('../../img/fondo-portafoliopng.png');"
                aria-hidden="true">
            </div>

            <div
                class="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-cyan-800/85"
                aria-hidden="true">
            </div>

            <div class="relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div class="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Desarrollo a Medida
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-4">
                             <a href="https://ansarautomotriz.com/"
                                    target="_blank"
                                    class="hover:text-cyan-300 transition-colors duration-200"
                                    title="Ver la plataforma de AutoTasa Pro en vivo"
                                >
                                Ansar Automotriz
                            </a>
                        </h3>
                        <p class="text-lg text-blue-100 mb-4">
                            <strong class="font-semibold text-white">El Desafío:</strong>
                            Crear una plataforma robusta que permitiera a
                            los usuarios tanto comprar como vender su vehículo, incluyendo un cotizador automatizado para la tasación
                            precisa en tiempo real.
                        </p>
                        <p class="text-lg text-blue-100 mb-6">
                            <strong class="font-semibold text-white">Nuestra Solución:</strong>
                            Desarrollamos una aplicación web completa con un motor de tasación (ML/algoritmo) integrado,
                            un CMS (Sistema de Gestión de Contenido) para la carga dinámica de vehículos por parte del equipo, y
                            sistemas de gestión de leads de alto valor.
                        </p>

                        <div class="grid grid-cols-3 gap-4 mb-8">
                            <div>
                                <div class="text-3xl font-extrabold text-white">98% </div>
                                <div class="text-blue-200">Precisión del Cotizador de Tasación</div>
                            </div>
                            <div>
                                <div class="text-3xl font-extrabold text-white">50+</div>
                                <div class="text-blue-200">Vehículos Cargados Mensualmente </div>
                            </div>
                            <div>
                                <div class="text-3xl font-extrabold text-green-300">+30% </div>
                                <div class="text-blue-200">Oportunidades de Compra</div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">Vue</span>
                            <span class="bg-gradient-to-r from-green-400 to-lime-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">Laravel</span>
                            <span class="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">MySQL</span>
                        </div>
                        <a
                            href="https://wa.me/56949109970?text=Hola,%20me%20interesa%20la%20Plataforma%20AutoTasa%20Pro%20(proyecto%20similar%20a%20Ansar%20Automotriz).%20Quisiera%20saber%20los%20valores%20aproximados%20y%20conocer%20m%C3%A1s%20detalles%20para%20desarrollar%20algo%20a%20medida."
                            class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
                            target="_blank"
                        >
                            Cotiza tu proyecto similar
                        </a>
                    </div>

                    <div class="relative flex justify-center items-center">
                        <div class="w-full h-96 lg:h-[500px] aspect-video overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out">
                           <img
                                :src="ansar"
                                alt="Demostración animada del proyecto TechStart Academy"
                                class="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <!-- Proyectos por Industria -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Proyectos por Industria
                    </h2>
                    <p class="text-xl text-gray-600">
                        Hemos trabajado con empresas de diversos sectores
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Carmotor's-->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition transform duration-300">
                        <div class="relative flex justify-center items-center">
                        <div class="w-full h-64 overflow-hidden rounded-xl">
                            <img
                            :src="carmotors"
                            alt="Demostración animada del proyecto TechStart Academy"
                            class="w-full h-full object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
                            >
                        </div>
                        <!-- Etiqueta superior -->
                        <span class="absolute top-3 left-3 bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                            Desarrollo a Medida
                        </span>
                        </div>
                            <div class="p-6 text-left">
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                                    <a href="https://carmotors.cl/"
                                        target="_blank"
                                        class="hover:text-blue-700 transition-colors duration-200"
                                        title="Ver la plataforma de AutoTasa Pro en vivo"
                                        >
                                        Carmotor's
                                    </a>
                                </h3>
                                <p class="text-gray-600 mb-4">
                                    Desarrollo web orientado al sector automotriz, con funcionalidades para mostrar y administrar motocicletas de forma dinámica y moderna.
                                </p>


                                <div class="flex flex-wrap gap-2 mb-6">
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                                </div>

                                <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20un%20sistema%20como%20Carmotor's" target="_blank"
                                class="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold inline-flex items-center hover:bg-blue-700 transition">
                                <i class="fa-brands fa-whatsapp mr-2"></i> Cotizar este proyecto
                                </a>
                            </div>
                    </div>

                    <!-- Faremin -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition transform duration-300">
                        <div class="relative flex justify-center items-center">
                        <div class="w-full h-64 overflow-hidden rounded-xl">
                            <img
                            :src="faremin"
                            alt="Demostración animada del proyecto TechStart Academy"
                            class="w-full h-full object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
                            >
                        </div>
                        <!-- Etiqueta superior -->
                        <span class="absolute top-3 left-3 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                            En desarrllo
                        </span>
                        </div>
                        <div class="p-6 text-left">
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                                    <!-- <a href=""
                                        target="_blank"
                                        class="hover:text-blue-700 transition-colors duration-200"
                                        title="Ver la plataforma de AutoTasa Pro en vivo"
                                        >

                                    </a> -->
                                    Maestranza Faremin
                                </h3>
                               <p class="text-gray-600 mb-4">
                                    Sitio web informativo desarrollado a medida para una empresa de maestranza, enfocado en destacar sus servicios, experiencia y compromiso con la industria metalmecánica.
                                </p>
                                <div class="flex flex-wrap gap-2 mb-6">
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                                </div>

                                <!-- <a href="https://wa.me/56949109970?text=Hola,%20quiero%20una%20cotización%20para%20un%20sistema%20como%20Carmotor's" target="_blank"
                                class="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold inline-flex items-center hover:bg-blue-700 transition">
                                    <i class="fa-brands fa-whatsapp mr-2"></i> Cotizar este proyecto
                                </a> -->
                        </div>
                    </div>
                    <!-- Card 3 (Tu proyecto) -->
                    <div class="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white flex flex-col justify-center items-center p-8 hover:from-cyan-500 hover:to-blue-600 transition duration-300 shadow-xl">
                        <h3 class="text-3xl font-bold mb-4">Tu proyecto podría estar aquí 🚀</h3>
                        <p class="text-lg mb-6 text-blue-50">Transforma tu idea en una solución digital profesional y escalable.</p>
                        <a href="https://wa.me/56949109970?text=Hola,%20quiero%20desarrollar%20mi%20propio%20proyecto%20digital"
                            target="_blank"
                            class="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
                            Hablemos por WhatsApp
                        </a>
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
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <p class="text-gray-600 mb-6 text-lg">
                            "El sistema que desarrollaron para nuestro hospital ha revolucionado la forma en que atendemos a nuestros pacientes.
                            La eficiencia ha aumentado un 40% y la satisfacción del personal médico es excepcional."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-semibold">DM</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Dr. Miguel Hernández</p>
                                <p class="text-sm text-gray-500">Director Médico, HealthCare Plus</p>
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
                        <p class="text-gray-600 mb-6 text-lg">
                            "Nuestra plataforma de e-commerce ha crecido exponencialmente desde que SysifosWeb la desarrolló.
                            Las ventas aumentaron un 300% en el primer año y la experiencia del usuario es fantástica."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-semibold">SP</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Sofía Pérez</p>
                                <p class="text-sm text-gray-500">CEO, EcoShop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Estadísticas -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestros Números
                    </h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <div class="text-gray-600">Proyectos Completados</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600 mb-2">8+</div>
                        <div class="text-gray-600">Clientes Satisfechos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-purple-600 mb-2">98%</div>
                        <div class="text-gray-600">Satisfacción Cliente</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-cyan-600 mb-2">2</div>
                        <div class="text-gray-600">Años de Experiencia</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tecnologías Utilizadas -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tecnologías Utilizadas
                    </h2>
                    <p class="text-xl text-gray-600">
                        Stack tecnológico moderno para proyectos de alta calidad
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

        <!-- CTA -->
        <section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ¿Quieres ser Nuestro Próximo Caso de Éxito?
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Agendar una Consulta Gratuita
                    </NuxtLink>
                    <NuxtLink to="/servicios" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
                        Ver Servicios
                    </NuxtLink>
                </div>
            </div>
        </section>

  </div>
</template>
