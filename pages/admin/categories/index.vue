<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
    Plus, Search, X, Eye, Pencil, Trash2, Power, Inbox, FileText, ArrowUpRight,
} from 'lucide-vue-next'

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
    watch: false,
    getCachedData: () => null   // siempre fetch fresco
})

// Since useFetch with unref query might auto-fetch, let's just use it declaratively
const categories = computed(() => {
    const r = categoriesResponse.value
    if (!r?.data) return { data: [], links: [], from: 0, to: 0, total: 0 }
    // La API devuelve links como objeto {first,last,prev,next}; los botones
    // de paginación (array de {url,label,active}) viven en meta.links
    return { ...r, links: Array.isArray(r.links) ? r.links : (r.meta?.links || []) }
})

const hasActiveFilters = computed(() => filters.search || filters.active !== "")

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
        alert(`No se puede eliminar "${category.name}" porque tiene ${category.blog_posts_count} post(s) asociados.`);
        return;
    }

    if (!confirm(`¿Estás seguro de que quieres eliminar "${category.name}"?`)) return;

    try {
        await $fetch(`${config.public.apiUrl}category/${category.id}/delete`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            }
        })

        // Eliminar la categoría del array local inmediatamente (actualización reactiva)
        if (categoriesResponse.value?.data) {
            categoriesResponse.value.data = categoriesResponse.value.data.filter(c => c.id !== category.id)
        }
    } catch (e) {
        console.error('[deleteCategory] Error:', e)
        alert(`Error al eliminar la categoría: ${e.response?._data?.message || e.message}`)
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
        <!-- Header -->
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Categorías</h1>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Organiza tus posts por categorías</p>
            </div>
            <NuxtLink to="/admin/categories/create"
                class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/25">
                <Plus class="h-4 w-4" />
                Nueva Categoría
            </NuxtLink>
        </div>

        <!-- Filtros -->
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800">
            <form @submit.prevent="search" class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div class="relative md:col-span-2">
                    <Search class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input v-model="filters.search" type="text" placeholder="Nombre, descripción…" class="!pl-10" />
                </div>
                <div class="flex items-center gap-2.5">
                    <select v-model="filters.active" @change="search" class="flex-1">
                        <option value="">Todas</option>
                        <option value="1">Activas</option>
                        <option value="0">Inactivas</option>
                    </select>
                    <button v-if="hasActiveFilters" type="button" @click="clearFilters" title="Limpiar filtros"
                        class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl text-slate-500 ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                        <X class="h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>

        <!-- Loading state -->
        <div v-if="pending" class="flex h-64 items-center justify-center">
            <div class="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
        </div>

        <template v-else>
            <!-- Empty state -->
            <div v-if="categories.data.length === 0"
                class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">
                    <Inbox class="h-7 w-7 text-sky-500" />
                </div>
                <div>
                    <p class="font-semibold text-slate-900 dark:text-white">No hay categorías</p>
                    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Comienza creando una nueva categoría.</p>
                </div>
                <NuxtLink to="/admin/categories/create"
                    class="mt-1 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600">
                    <Plus class="h-4 w-4" /> Nueva Categoría
                </NuxtLink>
            </div>

            <!-- Grid de categorías -->
            <div v-else class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div v-for="category in categories.data" :key="category.id"
                    class="group flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-slate-700">
                    <!-- Header -->
                    <div class="mb-3 flex items-start justify-between gap-3">
                        <div class="flex items-center gap-2.5">
                            <span class="h-3.5 w-3.5 shrink-0 rounded-full ring-2 ring-white dark:ring-slate-900"
                                :style="{ backgroundColor: category.color || '#38BDF8' }" />
                            <h3 class="truncate font-semibold text-slate-900 dark:text-white">{{ category.name }}</h3>
                        </div>
                        <span class="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1"
                            :class="category.active
                                ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20'
                                : 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/20'">
                            <span class="h-1.5 w-1.5 rounded-full"
                                :class="category.active ? 'bg-emerald-500' : 'bg-red-500'" />
                            {{ category.active ? "Activa" : "Inactiva" }}
                        </span>
                    </div>

                    <!-- Descripción -->
                    <p class="mb-4 line-clamp-2 min-h-[2.5rem] text-sm text-slate-500 dark:text-slate-400">
                        {{ category.description || 'Sin descripción' }}
                    </p>

                    <!-- Estadísticas -->
                    <div class="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <span class="flex items-center gap-1.5 font-medium">
                            <FileText class="h-3.5 w-3.5 text-sky-500" />
                            {{ category.blog_posts_count || 0 }} posts
                        </span>
                        <span class="text-slate-500 dark:text-slate-400">Orden: {{ category.sort_order }}</span>
                    </div>

                    <!-- Acciones -->
                    <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                        <div class="flex items-center gap-1">
                            <NuxtLink v-if="category.id" :to="'/admin/categories/' + category.id" title="Ver categoría"
                                class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-500/10 dark:hover:text-sky-400">
                                <Eye class="h-4 w-4" />
                            </NuxtLink>
                            <NuxtLink v-if="category.id" :to="'/admin/categories/edit?id=' + category.id" title="Editar categoría"
                                class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400">
                                <Pencil class="h-4 w-4" />
                            </NuxtLink>
                            <button @click="toggleActive(category)" :title="category.active ? 'Desactivar' : 'Activar'"
                                class="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                :class="category.active
                                    ? 'text-slate-400 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400'
                                    : 'text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400'">
                                <Power class="h-4 w-4" />
                            </button>
                            <button @click="deleteCategory(category)" title="Eliminar categoría"
                                :disabled="category.blog_posts_count > 0"
                                class="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                :class="category.blog_posts_count > 0
                                    ? 'cursor-not-allowed text-slate-200 dark:text-slate-700'
                                    : 'text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400'">
                                <Trash2 class="h-4 w-4" />
                            </button>
                        </div>
                        <NuxtLink :to="'/admin/posts?category_id=' + category.id"
                            class="flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                            Posts <ArrowUpRight class="h-3.5 w-3.5" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Paginación -->
            <div v-if="categories.links && categories.links.length > 3"
                class="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="flex items-center justify-between px-4 py-3 sm:px-6">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="categories.prev_page_url" @click="goToPage(categories.prev_page_url)"
                            class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Anterior
                        </button>
                        <button v-if="categories.next_page_url" @click="goToPage(categories.next_page_url)"
                            class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                            Mostrando
                            <span class="font-semibold text-slate-900 dark:text-white">{{ categories.from }}</span>
                            a
                            <span class="font-semibold text-slate-900 dark:text-white">{{ categories.to }}</span>
                            de
                            <span class="font-semibold text-slate-900 dark:text-white">{{ categories.total }}</span>
                            resultados
                        </p>
                        <nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm">
                            <template v-for="(link, index) in categories.links" :key="index">
                                <button v-if="link && link.url" @click="goToPage(link.url)" :class="[
                                    'relative inline-flex items-center border px-3.5 py-2 text-sm font-medium transition-colors first:rounded-l-xl last:rounded-r-xl',
                                    link.active
                                        ? 'z-10 border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300'
                                        : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800',
                                ]" v-html="link.label">
                                </button>
                                <span v-else-if="link"
                                    class="relative inline-flex items-center border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-300 first:rounded-l-xl last:rounded-r-xl dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-600"
                                    v-html="link.label">
                                </span>
                            </template>
                        </nav>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
