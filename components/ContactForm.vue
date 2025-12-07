<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name -->
    <div>
      <label for="name" class="block text-sm font-medium text-dark-700 mb-2">
        Nombre completo *
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        :class="{ 'border-red-500': errors.name }"
        placeholder="Juan Pérez"
      />
      <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-dark-700 mb-2">
        Correo electrónico *
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        class="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        :class="{ 'border-red-500': errors.email }"
        placeholder="juan@ejemplo.com"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" class="block text-sm font-medium text-dark-700 mb-2">
        Teléfono
      </label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        class="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        placeholder="+56 9 1234 5678"
      />
    </div>

    <!-- Service Type -->
    <div>
      <label for="service" class="block text-sm font-medium text-dark-700 mb-2">
        Tipo de servicio *
      </label>
      <select
        id="service"
        v-model="formData.service"
        required
        class="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
      >
        <option value="">Selecciona un servicio</option>
        <option value="web">Desarrollo Web</option>
        <option value="mobile">Aplicación Móvil</option>
        <option value="ecommerce">E-commerce</option>
        <option value="software">Software a Medida</option>
        <option value="consulting">Consultoría</option>
        <option value="other">Otro</option>
      </select>
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-sm font-medium text-dark-700 mb-2">
        Mensaje *
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="5"
        class="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
        :class="{ 'border-red-500': errors.message }"
        placeholder="Cuéntanos sobre tu proyecto..."
      ></textarea>
      <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
    </div>

    <!-- Submit Button -->
    <div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isSubmitting">Enviar mensaje</span>
        <span v-else class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        </span>
      </button>
    </div>

    <!-- Success Message -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="showSuccess" class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <p class="font-medium">¡Mensaje enviado con éxito!</p>
        <p class="text-sm">Nos pondremos en contacto contigo pronto.</p>
      </div>
    </Transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''

  // Validate name
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Por favor ingresa tu nombre completo'
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Por favor ingresa un correo electrónico válido'
    isValid = false
  }

  // Validate message
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.service = ''
    formData.message = ''

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
