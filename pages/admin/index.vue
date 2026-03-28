<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Usamos el layout de administrador
definePageMeta({
    layout: 'admin'
});

const router = useRouter();

onMounted(() => {
    // Verificación básica: Si no hay token, lo mandamos de vuelta al login
    const token = useCookie('auth_token');
    if (!token.value) {
        router.push('/admin/login');
    }
});
</script>

<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Panel de Administración</h1>
        <p class="text-gray-600 dark:text-gray-400">
            ¡Bienvenido! Has iniciado sesión correctamente y la conexión con la API funciona.
        </p>
        
        <!-- Tarjetas de ejemplo del Dashboard -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Resumen</h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Aquí irá el contenido principal de tu aplicación conectada a la API.</p>
            </div>
        </div>
    </div>
</template>
