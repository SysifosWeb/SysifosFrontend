<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

definePageMeta({
    layout: 'admin'
});

const route = useRoute();
const config = useRuntimeConfig();
const token = useCookie('auth_token');

// Fetch data from API
const { data: categoryResponse, pending, error } = await useFetch(() => `${config.public.apiUrl}category/${route.params.id}`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
});

// En Laravel Resource, comúnmente viene envuelto en 'data'
const category = computed(() => categoryResponse.value?.data || categoryResponse.value || {});

const statusClass = computed(() => {
    return category.value.active
        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
});

const statusText = computed(() => {
    return category.value.active ? 'Activa' : 'Inactiva';
});
</script>

<template>
    <div>
        <!-- Cargando -->
        <div v-if="pending" class="flex justify-center my-12">
            <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <!-- Error -->
        <div v-else-if="error || !category.id" class="text-center py-12">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Categoría no encontrada</h2>
            <p class="mt-2 text-gray-600 dark:text-gray-400">La categoría que buscas no existe o fue eliminada.</p>
            <NuxtLink to="/admin/categories"
                class="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                Volver a categorías
            </NuxtLink>
        </div>

        <!-- Contenido -->
        <div v-else class="max-w-4xl mx-auto">
            <div class="mb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                            {{ category.name }}
                        </h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Detalles y estadísticas de la categoría
                        </p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <NuxtLink v-if="category.id" :to="'/admin/categories/edit?id=' + category.id"
                            class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Editar
                        </NuxtLink>
                        <NuxtLink to="/admin/categories"
                            class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Volver
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2">
                    <div
                        class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                Información de la Categoría
                            </h3>
                        </div>
                        <div class="p-6 space-y-6">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 rounded-full border border-gray-300 dark:border-slate-600"
                                    :style="{ backgroundColor: category.color || '#3B82F6' }"></div>
                                <div>
                                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        {{ category.name }}
                                    </h2>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Color: {{ category.color || 'Predeterminado' }}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Slug (URL)
                                </label>
                                <code
                                    class="px-3 py-1 bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 rounded text-sm block overflow-x-auto">
                                    /blog/categoria/{{ category.slug }}
                                </code>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Descripción
                                </label>
                                <p v-if="category.description" class="text-gray-900 dark:text-white">
                                    {{ category.description }}
                                </p>
                                <p v-else class="text-gray-400 dark:text-gray-500 italic">
                                    Sin descripción
                                </p>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Estado
                                    </label>
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                        :class="statusClass">
                                        {{ statusText }}
                                    </span>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Orden
                                    </label>
                                    <p class="text-gray-900 dark:text-white">{{ category.sort_order }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div
                        class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                Estadísticas
                            </h3>
                        </div>
                        <div class="p-6">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    {{ category.blog_posts_count || 0 }}
                                </div>
                                <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Posts asociados
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                Acciones Rápidas
                            </h3>
                        </div>
                        <div class="p-6 space-y-3">
                            <NuxtLink v-if="category.id" :to="{ path: '', query: { category: category.id } }"
                                class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Crear Post aquí
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>