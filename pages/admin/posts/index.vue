<script setup>
import { reactive, computed, watch, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import delivery from "@/assets/img/delivery.png";
import Swal from 'sweetalert2';
import {
    Plus, Search, RotateCcw, Eye, Pencil, Star, Trash2,
    CloudUpload, CloudDownload, FileText, Inbox, X, SlidersHorizontal,
} from 'lucide-vue-next';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#1e293b',
    color: '#fff',
});
definePageMeta({
    layout: 'admin'
})

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const router = useRouter()

const filters = reactive({
    search: "",
    status: "",
    category_id: String(useRoute().query.category_id || ""),
    featured: "",
    page: 1
});

const queryParams = computed(() => {
    const q = { page: filters.page };
    if (filters.search) q.search = filters.search;
    if (filters.status) q.status = filters.status;
    if (filters.category_id) q.category_id = filters.category_id;
    if (filters.featured) q.featured = filters.featured;
    return q;
})

const { data: postsResponse, pending, refresh } = await useFetch(() => `${config.public.apiUrl}blog`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    },
    query: queryParams,
    watch: false
})

const { data: categoriesResponse } = await useFetch(() => `${config.public.apiUrl}category`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})

const posts = computed(() => {
    const r = postsResponse.value
    if (!r?.data) return { data: [], links: [], from: 0, to: 0, total: 0 }
    // La API devuelve links como objeto {first,last,prev,next}; los botones
    // de paginación (array de {url,label,active}) viven en meta.links
    return { ...r, links: Array.isArray(r.links) ? r.links : (r.meta?.links || []) }
})
const categories = computed(() => categoriesResponse.value?.data || [])

// Detectar si hay filtros activos
const hasActiveFilters = computed(() => {
    return filters.search || filters.status || filters.category_id || filters.featured;
});

const search = () => {
    filters.page = 1
    refresh()
};

const clearFilters = () => {
    filters.search = "";
    filters.status = "";
    filters.category_id = "";
    filters.featured = "";
    filters.page = 1;
    refresh();
};

const autoFilter = () => {
    search();
};

let searchTimeout = null;
onBeforeUnmount(() => clearTimeout(searchTimeout));
watch(() => filters.search, (newValue) => {
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
        search();
    }, 500);
});

const toggleFeatured = async (post) => {
    try {
        await $fetch(`${config.public.apiUrl}blog/${post.id}/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: { featured: !post.featured }
        })
        refresh()
    } catch (e) {
        console.error('Error toggling featured state', e)
        Toast.fire({ icon: 'error', title: 'Error al cambiar estado destacado' });
    }
};

const publishPost = async (post) => {
    try {
        await $fetch(`${config.public.apiUrl}blog/${post.id}/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: { status: 'published' }
        })
        refresh()
    } catch (e) {
        console.error('Error publishing post', e)
        Toast.fire({ icon: 'error', title: 'Error al publicar el post' });
    }
};

const unpublishPost = async (post) => {
    try {
        await $fetch(`${config.public.apiUrl}blog/${post.id}/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: { status: 'draft' }
        })
        refresh()
    } catch (e) {
        console.error('Error unpublishing post', e)
        Toast.fire({ icon: 'error', title: 'Error al despublicar el post' });
    }
};

const deletePost = async (post) => {
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: `Se eliminará el post "${post.title}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0ea5e9',
        cancelButtonColor: '#ef4444',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        background: '#1e293b',
        color: '#fff',
    });

    if (result.isConfirmed) {
        try {
            await $fetch(`${config.public.apiUrl}blog/${post.id}/delete`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    Accept: 'application/json'
                }
            })
            Toast.fire({ icon: 'success', title: 'Post eliminado exitosamente' });
            refresh()
        } catch (e) {
            console.error('Error deleting post', e)
            Toast.fire({ icon: 'error', title: 'Ocurrió un error al eliminar' });
        }
    }
};

const getStatusClass = (status) => {
    return (
        {
            draft: "bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20",
            published: "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20",
        }[status] || "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20"
    );
};

const getStatusText = (status) => {
    return (
        {
            draft: "Borrador",
            published: "Publicado",
        }[status] || "Desconocido"
    );
};

const formatDate = (date) => {
    if (!date) return '-';
    return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

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
                <h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                    Posts del Blog
                </h1>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Gestiona todos los posts de tu blog
                </p>
            </div>
            <NuxtLink to="/admin/posts/create"
                class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/25">
                <Plus class="h-4 w-4" />
                Nuevo Post
            </NuxtLink>
        </div>

        <!-- Filtros -->
        <div
            class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800">
            <form @submit.prevent="search" class="grid grid-cols-1 gap-4 md:grid-cols-4">
                <!-- Búsqueda -->
                <div class="relative">
                    <Search
                        class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input v-model="filters.search" type="text" placeholder="Título, contenido…"
                        class="!pl-10" />
                </div>

                <!-- Estado -->
                <div>
                    <select v-model="filters.status" @change="autoFilter">
                        <option value="">Todos los estados</option>
                        <option value="draft">Borrador</option>
                        <option value="published">Publicado</option>
                    </select>
                </div>

                <!-- Categoría -->
                <div>
                    <select v-model="filters.category_id" @change="autoFilter">
                        <option value="">Todas las categorías</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>

                <!-- Destacado -->
                <div class="flex items-center gap-2.5">
                    <select v-model="filters.featured" @change="autoFilter" class="flex-1">
                        <option value="">Todos</option>
                        <option value="1">Solo destacados</option>
                        <option value="0">No destacados</option>
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
            <div
                class="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
        </div>

        <template v-else>
            <!-- Empty state -->
            <div v-if="posts.data.length === 0"
                class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">
                    <Inbox class="h-7 w-7 text-sky-500" />
                </div>
                <div>
                    <p class="font-semibold text-slate-900 dark:text-white">Sin resultados</p>
                    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        No se encontraron posts con los filtros actuales
                    </p>
                </div>
                <button v-if="hasActiveFilters" @click="clearFilters"
                    class="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-200 transition-colors hover:bg-sky-50 dark:text-sky-400 dark:ring-sky-500/30 dark:hover:bg-sky-500/10">
                    <RotateCcw class="h-4 w-4" /> Limpiar filtros
                </button>
            </div>

            <!-- Tabla de posts -->
            <div v-else class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="overflow-x-auto scrollbar-thin">
                    <table class="min-w-full divide-y divide-slate-100 dark:divide-slate-800">
                        <thead>
                            <tr class="bg-slate-50/80 dark:bg-slate-800/40">
                                <th
                                    class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Post
                                </th>
                                <th
                                    class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Categoría
                                </th>
                                <th
                                    class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Estado
                                </th>
                                <th
                                    class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Fecha
                                </th>
                                <th
                                    class="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="post in posts.data" :key="post.id"
                                class="group/row transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <img :src="post.featured_image_url ? post.featured_image_url : delivery"
                                            :alt="post.title"
                                            class="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200/60 dark:ring-slate-700" />
                                        <div class="ml-4">
                                            <div class="text-sm font-semibold text-slate-900 group-hover/row:text-sky-700 dark:text-white dark:group-hover/row:text-sky-400">
                                                {{ post.title }}
                                            </div>
                                            <div class="text-xs text-slate-500 dark:text-slate-400">
                                                por {{ post.user?.name || "Usuario" }}
                                            </div>
                                            <span v-if="post.featured"
                                                class="mt-1 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20">
                                                <Star class="h-3 w-3" /> Destacado
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span v-if="post.category"
                                        class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                        <span class="h-1.5 w-1.5 rounded-full"
                                            :style="{ backgroundColor: post.category.color || '#94a3b8' }" />
                                        {{ post.category.name }}
                                    </span>
                                    <span v-else class="text-xs text-slate-500 dark:text-slate-400">Sin categoría</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1"
                                        :class="getStatusClass(post.status)">
                                        <span class="h-1.5 w-1.5 rounded-full"
                                            :class="post.status === 'published' ? 'bg-emerald-500' : 'bg-amber-500'" />
                                        {{ getStatusText(post.status) }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                    {{ formatDate(post.created_at) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center justify-end gap-1">
                                        <!-- Ver -->
                                        <NuxtLink v-if="post.id" :to="'/admin/posts/' + post.id" title="Ver post"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-500/10 dark:hover:text-sky-400">
                                            <Eye class="h-4 w-4" />
                                        </NuxtLink>

                                        <!-- Editar -->
                                        <NuxtLink v-if="post.id" :to="'/admin/posts/edit?id=' + post.id" title="Editar post"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400">
                                            <Pencil class="h-4 w-4" />
                                        </NuxtLink>

                                        <!-- Toggle Destacado -->
                                        <button @click="toggleFeatured(post)" :title="post.featured
                                            ? 'Quitar de destacados'
                                            : 'Marcar como destacado'"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                            :class="post.featured
                                                ? 'text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10'
                                                : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500 dark:text-slate-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400'">
                                            <Star class="h-4 w-4" :fill="post.featured ? 'currentColor' : 'none'" />
                                        </button>

                                        <!-- Toggle Publicación -->
                                        <button v-if="post.status === 'draft'" @click="publishPost(post)" title="Publicar"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400">
                                            <CloudUpload class="h-4 w-4" />
                                        </button>
                                        <button v-else @click="unpublishPost(post)" title="Despublicar"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400">
                                            <CloudDownload class="h-4 w-4" />
                                        </button>

                                        <!-- Eliminar -->
                                        <button @click="deletePost(post)" title="Eliminar post"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400">
                                            <Trash2 class="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Paginación -->
                <div v-if="posts.links && posts.links.length > 3"
                    class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30 sm:px-6">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="posts.prev_page_url" @click="goToPage(posts.prev_page_url)"
                            class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Anterior
                        </button>
                        <button v-if="posts.next_page_url" @click="goToPage(posts.next_page_url)"
                            class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                Mostrando
                                <span class="font-semibold text-slate-900 dark:text-white">{{ posts.from }}</span>
                                a
                                <span class="font-semibold text-slate-900 dark:text-white">{{ posts.to }}</span>
                                de
                                <span class="font-semibold text-slate-900 dark:text-white">{{ posts.total }}</span>
                                resultados
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm">
                                <template v-for="(link, index) in posts.links" :key="index">
                                    <button v-if="link && link.url" @click="goToPage(link.url)" :class="[
                                        'relative inline-flex items-center border px-3.5 py-2 text-sm font-medium transition-colors first:rounded-l-xl last:rounded-r-xl',
                                        link.active
                                            ? 'z-10 border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300'
                                            : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800',
                                    ]" v-html="link.label">
                                    </button>
                                    <span v-else-if="link" :class="[
                                        'relative inline-flex items-center border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-300 first:rounded-l-xl last:rounded-r-xl dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-600',
                                    ]" v-html="link.label">
                                    </span>
                                </template>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped></style>
