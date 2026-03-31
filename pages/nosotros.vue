<script setup>
import diego from "@/assets/img/Diego.png";
import karen from "@/assets/img/Karen.png";
import osman from "@/assets/img/Osman.png";
import team from "@/assets/img/team.jpg";
import mision from "@/assets/img/mision.png";
import vision from "@/assets/img/vision.png";
import valores from "@/assets/img/valores.png";

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Nosotros - Equipo de Desarrollo de Software en Chile',
  description: 'Conoce al equipo de Sysifos Web. Especialistas en desarrollo de software, aplicaciones web y soluciones digitales con años de experiencia en Chile. Diego, Karen y Osman - Full Stack Developers.',
  keywords: 'equipo desarrollo software, equipo desarrollo web, empresa desarrollo software chile, empresa desarrollo web chile',
  image: '/img/og-nosotros.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Nosotros - Sysifos Web',
    description: 'Equipo de desarrollo de software especializado en soluciones digitales en Chile'
  }
})
</script>
<template>
  <div>

    <!-- Hero -->
    <Hero
      title="Conoce a Sysifos Web"
      description="Somos un equipo apasionado por la tecnología, dedicado a transformar ideas en soluciones digitales innovadoras"
    >      
    </Hero>

    <!-- Historia -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Nuestra Historia
                        </h2>
                        <p class="text-lg text-gray-600 mb-6">
                            Fundada en 2024, SysifosWeb nació con un objetivo claro: hacer que la tecnología de vanguardia esté al alcance de todos.
                        </p>
                        <p class="text-lg text-gray-600 mb-6">
                            Nuestro nombre, inspirado en el mito de Sísifo, refleja nuestra forma de trabajar:
                            con perseverancia y pasión, convirtiendo cada desafío en una oportunidad para innovar y crear soluciones
                            que realmente hagan la diferencia.
                        </p>
                        <!-- <div class="grid grid-cols-2 gap-6">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600">50+</div>
                                <div class="text-gray-600">Proyectos Completados</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600">35+</div>
                                <div class="text-gray-600">Clientes Satisfechos</div>
                            </div>
                        </div> -->
                    </div>
                    <div class="relative">
                        <div class="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                            <div class="text-center">
                                <img :src="team" alt="SysifosWeb" class="w-full h-full object-cover rounded-2xl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Misión, Visión y Valores -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestros Principios
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <img :src="mision" alt="Misión" class="w-16 h-16">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Misión</h3>
                        <p class="text-gray-600">
                            Empoderar a las empresas con soluciones tecnológicas innovadoras que impulsen su crecimiento
                            y mejoren su competitividad en el mercado digital.
                        </p>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <img :src="vision" alt="Visión" class="w-16 h-16">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Visión</h3>
                        <p class="text-gray-600">
                            Ser la empresa de desarrollo de software más confiable de Latinoamérica, reconocida por
                            nuestra excelencia técnica y compromiso con la innovación.
                        </p>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <img :src="valores" alt="Valores" class="w-16 h-16">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Valores</h3>
                        <p class="text-gray-600">
                            Innovación, calidad, transparencia y compromiso con nuestros clientes. Creemos en el
                            poder de la tecnología para crear un futuro mejor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Equipo -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestro Equipo
                    </h2>
                    <p class="text-xl text-gray-600">
                        Profesionales apasionados por la tecnología y comprometidos con la excelencia
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="text-center">
                        <img :src="diego" alt="Diego Araya" class="w-32 h-32 rounded-full mx-auto mb-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Diego Araya</h3>
                        <p class="text-blue-600 font-medium mb-2">Full Stack Developer</p>
                        <p class="text-gray-600 text-sm">
                            Desarrollador full stack especializado en crear aplicaciones web responsivas.
                        </p>
                    </div>

                    <div class="text-center">
                        <img :src="karen" alt="Karen Godoy" class="w-32 h-32 rounded-full mx-auto mb-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Karen Godoy</h3>
                        <p class="text-green-600 font-medium mb-2">DBA & Frontend Developer</p>
                        <p class="text-gray-600 text-sm">
                            Mi especialidad son las bases de datos y el desarrollo web frontend.
                        </p>
                    </div>

                    <div class="text-center">
                        <img :src="osman" alt="Osman Ahumada" class="w-32 h-32 rounded-full mx-auto mb-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Osman Ahumada</h3>
                        <p class="text-purple-600 font-medium mb-2">Web & Mobile Developer</p>
                        <p class="text-gray-600 text-sm">
                            Desarrollador web, con conocimientos en backend,frontend y desarrollo mobile en flutter.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Metodología -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestra Metodología
                    </h2>
                    <p class="text-xl text-gray-600">
                        Aplicamos metodologías ágiles para garantizar entregas de calidad en tiempo y forma
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-white font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Scrum Framework</h3>
                                    <p class="text-gray-600">Sprints de 2 semanas con entregas incrementales y feedback continuo.</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-white font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Comunicación Transparente</h3>
                                    <p class="text-gray-600">Reuniones diarias, demos y retrospectivas para mantener alineación total.</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-white font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Calidad Asegurada</h3>
                                    <p class="text-gray-600">Testing automatizado, code reviews y mejores prácticas de desarrollo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">Stack Tecnológico</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-gray-700">Frontend</span>
                                    <span class="text-sm text-gray-500">React, Vue.js, Angular</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-gray-700">Backend</span>
                                    <span class="text-sm text-gray-500">Laravel, Node.js, Python</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-green-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-gray-700">Mobile</span>
                                    <span class="text-sm text-gray-500">React Native, Flutter</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <!-- <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-gray-700">DevOps</span>
                                    <span class="text-sm text-gray-500">AWS, Docker, CI/CD</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-cyan-600 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ¿Quieres Conocer Más?
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Contactar Equipo
                    </a>
                    <!-- <a href="/portfolio" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
                        Ver Proyectos
                    </a> -->
                </div>
            </div>
        </section>

  </div>
</template>


