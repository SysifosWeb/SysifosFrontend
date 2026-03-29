<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
    layout: 'admin'
})

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const router = useRouter()

const filters = reactive({
    search: "",
    active: "",
    page: 1
})

const queryParams = computed(() => {
    const q = { page: filters.page };
    if (filters.search) q.search = filters.search;
    if (filters.active !== "") q.active = filters.active;
    return q;
})

const { data: categoriesResponse, pending, refresh } = await useFetch(() => `${config.public.apiUrl}category`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    },
    query: queryParams,
    watch: false // We will handle refresh manually or watch filters tightly
})

// Since useFetch with unref query might auto-fetch, let's just use it declaratively
const categories = computed(() => categoriesResponse.value || { data: [], links: [], from: 0, to: 0, total: 0 })

const search = () => {
    filters.page = 1
    refresh()
}

const clearFilters = () => {
    filters.search = ""
    filters.active = ""
    filters.page = 1
    refresh()
}

const toggleActive = async (category) => {
    try {
        await $fetch(`${config.public.apiUrl}category/${category.id}/toggle-active`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            }
        })
        refresh()
    } catch (e) {
        console.error('Error toggling active state', e)
        alert('Ocurrió un error al cambiar el estado.')
    }
}

const deleteCategory = async (category) => {
    if (category.blog_posts_count > 0) {
        alert("No se puede eliminar una categoría que tiene posts asociados.");
        return;
    }

    if (confirm("¿Estás seguro de que quieres eliminar esta categoría?")) {
        try {
            await $fetch(`${config.public.apiUrl}category/${category.id}/delete`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    Accept: 'application/json'
                }
            })
            refresh()
        } catch (e) {
            console.error('Error deleting category', e)
            alert('Ocurrió un error al eliminar la categoría.')
        }
    }
}

const goToPage = (url) => {
    if (!url) return
    try {
        const urlObj = new URL(url)
        const page = urlObj.searchParams.get('page')
        if (page) {
            filters.page = Number(page)
            refresh()
        }
    } catch (e) {
        // En caso de que la URL de Laravel venga como path relativo '?page=2'
        const urlParams = new URLSearchParams(url.split('?')[1])
        const page = urlParams.get('page')
        if (page) {
            filters.page = Number(page)
            refresh()
        }
    }
}
</script>

<template>
    <div>
        <!-- Header con botón de crear -->
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Categorías</h1>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Organiza tus posts por categorías
                </p>
            </div>
            <NuxtLink to="/admin/categories/create"
                class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Nueva Categoría
            </NuxtLink>
        </div>

        <!-- Filtros -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700">
            <div class="p-6">
                <form @submit.prevent="search" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Búsqueda -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar</label>
                        <input v-model="filters.search" type="text" placeholder="Nombre, descripción..."
                            class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>

                    <!-- Estado -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado</label>
                        <select v-model="filters.active"
                            class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Todas</option>
                            <option value="1">Activas</option>
                            <option value="0">Inactivas</option>
                        </select>
                    </div>

                    <!-- Botones -->
                    <div class="flex items-end space-x-3">
                        <button type="submit"
                            class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Filtrar
                        </button>
                        <button type="button" @click="clearFilters"
                            class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Limpiar
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Loading state -->
        <div v-if="pending" class="flex justify-center my-12">
            <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <!-- Grid de categorías -->
        <div v-else-if="categories.data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div v-for="category in categories.data" :key="category.id"
                class="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                <div class="p-6">
                    <!-- Header de la categoría -->
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded-full mr-3"
                                :style="{ backgroundColor: category.color || '#3B82F6' }"></div>
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                {{ category.name }}
                            </h3>
                        </div>
                        <div class="flex items-center space-x-2">
                            <!-- Estado -->
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                :class="category.active
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                    ">
                                {{ category.active ? "Activa" : "Inactiva" }}
                            </span>
                        </div>
                    </div>

                    <!-- Descripción -->
                    <p v-if="category.description" class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {{ category.description }}
                    </p>
                    <p v-else class="text-sm text-gray-400 dark:text-gray-500 italic mb-4">
                        Sin descripción
                    </p>

                    <!-- Estadísticas -->
                    <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{{ category.blog_posts_count || 0 }} posts</span>
                        <span>Orden: {{ category.sort_order }}</span>
                    </div>

                    <!-- Acciones -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <!-- Ver -->
                            <NuxtLink :to="'/admin/categories/' + category.id"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                                title="Ver categoría">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </NuxtLink>

                            <!-- Editar -->
                            <NuxtLink :to="'/admin/categories/edit?id=' + category.id"
                                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                                title="Editar categoría">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </NuxtLink>

                            <!-- Toggle Activo -->
                            <button @click="toggleActive(category)" :class="category.active
                                ? 'text-orange-600 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300'
                                : 'text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300'
                                " :title="category.active ? 'Desactivar' : 'Activar'">
                                <svg v-if="category.active" class="h-4 w-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                </svg>
                                <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </button>

                            <!-- Eliminar -->
                            <button @click="deleteCategory(category)"
                                class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                                title="Eliminar categoría" :disabled="category.blog_posts_count > 0" :class="{
                                    'opacity-50 cursor-not-allowed': category.blog_posts_count > 0,
                                }">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else
            class="bg-white dark:bg-slate-800 text-center p-12 rounded-lg shadow border border-gray-100 dark:border-slate-700">
            <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                </path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No hay categorías</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Comienza creando una nueva categoría.</p>
            <div class="mt-6">
                <NuxtLink to="/admin/categories/create"
                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Nueva Categoría
                </NuxtLink>
            </div>
        </div>

        <!-- Paginación -->
        <div v-if="categories.links && categories.links.length > 3"
            class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
            <div class="px-4 py-3 sm:px-6">
                <div class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="categories.prev_page_url" @click="goToPage(categories.prev_page_url)"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700">
                            Anterior
                        </button>
                        <button v-if="categories.next_page_url" @click="goToPage(categories.next_page_url)"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700 dark:text-gray-400">
                                Mostrando
                                <span class="font-medium text-gray-900 dark:text-white">{{ categories.from }}</span>
                                a
                                <span class="font-medium text-gray-900 dark:text-white">{{ categories.to }}</span>
                                de
                                <span class="font-medium text-gray-900 dark:text-white">{{ categories.total }}</span>
                                resultados
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <template v-for="(link, index) in categories.links" :key="index">
                                    <button v-if="link.url" @click="goToPage(link.url)" :class="[
                                        'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                        link.active
                                            ? 'z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400'
                                            : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700',
                                        index === 0 ? 'rounded-l-md' : '',
                                        index === categories.links.length - 1 ? 'rounded-r-md' : '',
                                    ]" v-html="link.label">
                                    </button>
                                    <span v-else :class="[
                                        'relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-gray-500',
                                        index === 0 ? 'rounded-l-md' : '',
                                        index === categories.links.length - 1 ? 'rounded-r-md' : '',
                                    ]" v-html="link.label">
                                    </span>
                                </template>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>