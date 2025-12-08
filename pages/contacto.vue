<script setup>
import { ref, reactive } from 'vue'

// Acceder a la configuración runtime (variables de entorno)
const config = useRuntimeConfig()

// Estado del formulario
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

// Estados de UI
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Función para enviar el formulario
const submitForm = async (event) => {
  event.preventDefault()
  
  // Validación básica
  if (!form.name || !form.email || !form.subject || !form.message) {
    errorMessage.value = 'Por favor completa todos los campos requeridos (*)'
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
    return
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'Por favor ingresa un email válido'
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
    return
  }

  isSubmitting.value = true
  showError.value = false

  try {
    const response = await fetch(config.public.apiUrl + 'contact/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        subject: form.subject,
        message: form.message
      })
    })

    const data = await response.json()
    console.log(data)
    if (response.ok) {
      // Éxito
      showSuccess.value = true
      
      // Limpiar formulario
      form.name = ''
      form.email = ''
      form.phone = ''
      form.company = ''
      form.subject = ''
      form.message = ''

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      // Error del servidor
      errorMessage.value = data.message || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Error al enviar formulario:', error)
    errorMessage.value = 'No se pudo conectar con el servidor. Por favor verifica tu conexión e intenta nuevamente.'
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <div>
    <Head>
      <Title>Contacto - Cotiza tu Proyecto | SysifosWeb</Title>
      <Meta name="description" content="Contáctanos para cotizar tu proyecto de desarrollo web o software. Estamos listos para ayudarte." />
    </Head>

        <!-- Alerta de Éxito -->
        <div v-if="showSuccess" class="bg-green-50 border-l-4 border-green-400 p-4 fixed top-20 left-4 right-4 z-50 shadow-lg rounded-r-lg">
            <div class="flex items-center justify-between">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm text-green-700 font-medium">
                            ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                        </p>
                    </div>
                </div>
                <button @click="showSuccess = false" class="text-green-400 hover:text-green-600">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Alerta de Error -->
        <div v-if="showError" class="bg-red-50 border-l-4 border-red-400 p-4 fixed top-20 left-4 right-4 z-50 shadow-lg rounded-r-lg">
            <div class="flex items-center justify-between">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm text-red-700 font-medium">
                            {{ errorMessage }}
                        </p>
                    </div>
                </div>
                <button @click="showError = false" class="text-red-400 hover:text-red-600">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>
    <Hero
      title="Contáctanos"
      description="Estamos listos para ayudarte a hacer realidad tu proyecto"    
    >     
    </Hero>

    <!-- Contact Form Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Formulario Centrado -->
                <div class="max-w-4xl mx-auto mb-16">
                    <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Cuéntanos sobre tu proyecto</h2>
                            <p class="text-lg text-gray-600">Completa el formulario y te contactaremos en menos de 24 horas</p>
                        </div>
                        
                        <form @submit="submitForm" class="space-y-6">
                            <!-- Name and Email Row -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre completo *
                                    </label>
                                    <input 
                                        v-model="form.name"
                                        type="text" 
                                        id="name"                                       
                                        placeholder="Tu nombre"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <!-- <p v-if="$page.props.errors?.name" class="mt-1 text-sm text-red-600">{{ $page.props.errors.name }}</p> -->
                                </div>
                                
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input 
                                        v-model="form.email"
                                        type="email" 
                                        id="email"                                        
                                        placeholder="tu@email.com"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <!-- Phone and Company Row -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>
                                    <input 
                                        v-model="form.phone"
                                        type="tel" 
                                        id="phone"                                        
                                        placeholder="+56 9 4910 9970"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                                        Empresa
                                    </label>
                                    <input 
                                        v-model="form.company"
                                        type="text" 
                                        id="company"                                        
                                        placeholder="Nombre de tu empresa"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <!-- Subject -->
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                                    Asunto *
                                </label>
                                <input 
                                    v-model="form.subject"
                                    type="text"
                                    id="subject"                                    
                                    placeholder="¿En qué podemos ayudarte?"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <!-- Message -->
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                    Describe tu proyecto *
                                </label>
                                <textarea 
                                    v-model="form.message"
                                    id="message"
                                    rows="6"                                    
                                    placeholder="Cuéntanos sobre tu proyecto, objetivos, funcionalidades que necesitas, etc."
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <!-- Submit Button -->
                            <div class="flex justify-center">
                                <button 
                                    type="submit"
                                    :disabled="isSubmitting"
                                    class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <span v-if="!isSubmitting">Enviar Mensaje</span>
                                    <span v-else class="flex items-center">
                                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Información de Contacto y Acciones Rápidas -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Información de Contacto + Acciones Rápidas -->
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Contáctanos Ahora</h3>
                        
                        <!-- Información de Contacto -->
                        <div class="space-y-6 mb-8">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-900">Email</p>
                                    <p class="text-gray-600">contacto@sysifosweb.cl</p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-900">Teléfono</p>
                                    <p class="text-gray-600">+56 9 4910 9970</p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-900">Ubicación</p>
                                    <p class="text-gray-600">Coquimbo, Chile</p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-900">Horarios</p>
                                    <p class="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        <!-- Acciones Rápidas -->
                        <div class="border-t border-gray-200 pt-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">Contacto Directo</h4>
                            <div class="space-y-3">
                                <a 
                                    href="https://wa.me/56949109970" 
                                    target="_blank"
                                    class="flex items-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                                >
                                    <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    <span class="font-medium">Chatear por WhatsApp</span>
                                </a>
                                
                                <!-- <a 
                                    href="mailto:info@sysifosweb.com"
                                    class="flex items-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                                >
                                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span class="font-medium">Enviar Email Directo</span>
                                </a> -->
                            </div>
                        </div>
                    </div>

                    <!-- FAQ + Información Adicional -->
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Información Útil</h3>
                        
                        <!-- FAQ Resumida -->
                        <div class="space-y-6 mb-8">
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    Tiempo de Desarrollo
                                </h4>
                                <p class="text-gray-600 text-sm ml-11">Sitios web: 2-4 semanas. Aplicaciones complejas: 3-6 meses.</p>
                            </div>
                            
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    Soporte Post-Lanzamiento
                                </h4>
                                <p class="text-gray-600 text-sm ml-11">Sí, ofrecemos planes de soporte y mantenimiento continuo.</p>
                            </div>
                            
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                                        </svg>
                                    </div>
                                    Alcance Global
                                </h4>
                                <p class="text-gray-600 text-sm ml-11">Trabajamos con clientes de todo el mundo.</p>
                            </div>
                        </div>

                        <!-- Tecnologías -->
                        <div class="border-t border-blue-200 pt-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">Tecnologías que Utilizamos</h4>
                            <div class="grid grid-cols-3 gap-3">
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">R</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">React</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">V</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">Vue.js</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-red-500 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">L</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">Laravel</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">N</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">Node.js</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-blue-400 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">RN</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">React Native</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center shadow-sm">
                                    <div class="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">F</span>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700">Flutter</span>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

