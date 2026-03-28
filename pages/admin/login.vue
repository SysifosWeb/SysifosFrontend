<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Usar layout oculto para que sea una pantalla independiente
definePageMeta({
    layout: false
});

const router = useRouter();
const isDark = ref(false);
const loading = ref(false);
const form = ref({
    email: '',
    password: '',
    remember: false
});

const config = useRuntimeConfig();
const errorMessage = ref('');

// Manejo del Login
const handleLogin = async () => {
    loading.value = true;
    errorMessage.value = '';

    try {
        // NOTA: Ajusta la ruta 'login' según tu API exacta
        const response = await $fetch(`${config.public.apiUrl}auth/login`, {
            method: 'POST',
            body: {
                email: form.value.email,
                password: form.value.password,
            }
        });

        // Guardar token en cookie (asume que la API devuelve un 'token' directamente o en 'data')
        const maxAge = form.value.remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24; // 7 días o 1 día
        const tokenCookie = useCookie('auth_token', { maxAge });
        tokenCookie.value = response.token || response?.data?.token || response?.access_token;

        // Redirigir al área de admin
        router.push('/admin');
    } catch (error) {
        console.error('Error de login:', error);
        errorMessage.value = error.response?._data?.message || error.data?.message || 'Credenciales inválidas o error de conexión.';
    } finally {
        loading.value = false;
    }
};

// Manejo del Modo Oscuro
const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

// Verificar estado inicial al renderizar
onMounted(() => {
    // Revisar preferencia guardada o color del sistema
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
});
</script>
<template>
    <div
        class="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300">

        <!-- Toggle Modo Oscuro -->
        <div class="absolute top-4 right-4 sm:top-6 sm:right-6">
            <button @click="toggleDarkMode"
                class="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-110"
                :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
                <!-- Sol (Light Mode) -->
                <svg v-if="isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                    </path>
                </svg>
                <!-- Luna (Dark Mode) -->
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                    </path>
                </svg>
            </button>
        </div>

        <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
            <!-- Título de la sección -->
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300">
                SysifosWeb Admin
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Inicia sesión en tu cuenta para continuar
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div
                class="bg-white dark:bg-slate-800 py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-100 dark:border-slate-700 relative overflow-hidden transition-all duration-300">
                <!-- Decorative element abstract -->
                <div
                    class="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50 blur-2xl transition-colors duration-300">
                </div>

                <form class="space-y-6 relative z-10" @submit.prevent="handleLogin">
                    <!-- Mensaje de error -->
                    <div v-if="errorMessage"
                        class="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm text-center transition-all duration-300">
                        {{ errorMessage }}
                    </div>

                    <div>
                        <label for="email"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            Correo Electrónico
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input id="email" name="email" type="email" autocomplete="email" required
                                v-model="form.email"
                                class="pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-300"
                                placeholder="admin@sysifos.cl" />
                        </div>
                    </div>

                    <div>
                        <label for="password"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            Contraseña
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required v-model="form.password"
                                class="pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-300"
                                placeholder="••••••••" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" v-model="form.remember"
                                class="h-4 w-4 text-blue-600 dark:text-blue-500 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 transition-colors duration-300" />
                            <label for="remember-me"
                                class="ml-2 block text-sm text-gray-900 dark:text-gray-300 transition-colors duration-300">
                                Recordarme
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#"
                                class="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" :disabled="loading"
                            class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 transition-all duration-300 relative disabled:opacity-75 disabled:cursor-not-allowed">
                            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                            </span>
                            {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
                        </button>
                    </div>
                </form>
            </div>

            <div class="mt-8 text-center text-sm">
                <NuxtLink to="/"
                    class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Volver al sitio principal
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
