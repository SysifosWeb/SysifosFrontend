<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const router = useRouter()

const filters = reactive({
    search: "",
    status: "",
    page: 1
});

const queryParams = computed(() => {
    const q = { page: filters.page };
    if (filters.search) q.search = filters.search;
    if (filters.status) q.status = filters.status;
    return q;
})

const { data: contactsResponse, pending, refresh } = await useFetch(() => `${config.public.apiUrl}contact`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    },
    query: queryParams,
    watch: false
})

const contacts = computed(() => contactsResponse.value?.data ? contactsResponse.value : { data: [], links: [], from: 0, to: 0, total: 0 })

const clearFilters = () => {
    filters.search = "";
    filters.status = "";
    filters.page = 1;
    refresh();
};

const search = () => {
    filters.page = 1;
    refresh();
}

const markAsRead = async (contact) => {
    try {
        await $fetch(`${config.public.apiUrl}contact/${contact.id}/mark-as-read`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            }
        });
        refresh();
    } catch (e) {
        console.error('Error al marcar como leído:', e);
        alert('Ocurrió un error al marcar como leído');
    }
};

const markAsReplied = async (contact) => {
    try {
        await $fetch(`${config.public.apiUrl}contact/${contact.id}/mark-as-replied`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            }
        });
        refresh();
    } catch (e) {
        console.error('Error al marcar como respondido:', e);
        alert('Ocurrió un error al marcar como respondido');
    }
};

const archiveContact = async (contact) => {
    if (confirm(`¿Estás seguro de que quieres archivar el contacto de "${contact.name}"?`)) {
        try {
            await $fetch(`${config.public.apiUrl}contact/${contact.id}/mark-as-archived`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    Accept: 'application/json'
                }
            });
            refresh();
        } catch (e) {
            console.error('Error al archivar:', e);
            alert('Ocurrió un error al archivar el contacto');
        }
    }
};

const getStatusClass = (status) => {
    const statusClasses = {
        'new': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        'read': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        'replied': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        'archived': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
};

const getStatusText = (status) => {
    const statusTexts = {
        'new': 'Nuevo',
        'read': 'Leído',
        'replied': 'Respondido',
        'archived': 'Archivado'
    };
    return statusTexts[status] || 'Desconocido';
};

const formatDate = (date) => {
    if (!date) return '-';
    return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
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
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Contactos</h1>
                <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                    Gestiona los mensajes de contacto de tu sitio principal
                </p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700">
            <div class="p-6">
                <form @submit.prevent="search" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar</label>
                        <input v-model="filters.search" type="text" placeholder="Nombre, email, asunto..."
                            class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado</label>
                        <select v-model="filters.status" @change="search"
                            class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Todos</option>
                            <option value="new">Nuevo</option>
                            <option value="read">Leído</option>
                            <option value="replied">Respondido</option>
                            <option value="archived">Archivado</option>
                        </select>
                    </div>
                    <div class="flex items-end space-x-3">
                        <button type="submit"
                            class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                            Filtrar
                        </button>
                        <button type="button" @click="clearFilters"
                            class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition">
                            Limpiar
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Loading -->
        <div v-if="pending" class="flex justify-center my-12">
            <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <!-- Tabla -->
        <div v-else
            class="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-slate-700">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                    <thead class="bg-gray-50 dark:bg-slate-900/50">
                        <tr>
                            <th
                                class="px-6 py-3 text-left text-xs font-medium text-gray-300 dark:text-gray-300 uppercase tracking-wider">
                                Contacto</th>
                            <th
                                class="px-6 py-3 text-left text-xs font-medium text-gray-300 dark:text-gray-300 uppercase tracking-wider">
                                Asunto</th>
                            <th
                                class="px-6 py-3 text-left text-xs font-medium text-gray-300 dark:text-gray-300 uppercase tracking-wider">
                                Estado</th>
                            <th
                                class="px-6 py-3 text-left text-xs font-medium text-gray-300 dark:text-gray-300 uppercase tracking-wider">
                                Fecha</th>
                            <th
                                class="px-6 py-3 text-right text-xs font-medium text-gray-300 dark:text-gray-300 uppercase tracking-wider">
                                Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700">
                        <tr v-for="contact in contacts.data" :key="contact.id"
                            class="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">{{ contact.name }}</div>
                                <div class="text-sm text-gray-300 dark:text-gray-300">{{ contact.email }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white line-clamp-1"
                                    :title="contact.subject">{{ contact.subject }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="getStatusClass(contact.status)">
                                    {{ getStatusText(contact.status) }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300 dark:text-gray-300">
                                {{ formatDate(contact.created_at) }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <NuxtLink :to="'/admin/contacts/' + contact.id"
                                        class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                        title="Ver detalle">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </NuxtLink>
                                    <button v-if="contact.status === 'new'" @click="markAsRead(contact)"
                                        class="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300"
                                        title="Marcar como leído">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                        </svg>
                                    </button>
                                    <button v-if="contact.status !== 'archived'" @click="archiveContact(contact)"
                                        class="text-gray-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"
                                        title="Archivar">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="contacts.data.length === 0">
                            <td colspan="5" class="px-6 py-12 text-center text-gray-300 dark:text-gray-300">
                                No se encontraron contactos.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Paginación -->
            <div v-if="contacts.last_page > 1"
                class="bg-white dark:bg-slate-800 px-4 py-3 border-t border-gray-200 dark:border-slate-700 sm:px-6">
                <!-- (Same logic as categories/posts pagination) -->
                <div class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="contacts.prev_page_url" @click="goToPage(contacts.prev_page_url)"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700">
                            Anterior
                        </button>
                        <button v-if="contacts.next_page_url" @click="goToPage(contacts.next_page_url)"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700 dark:text-gray-300">
                                Mostrando
                                <span class="font-medium dark:text-white">{{ contacts.from }}</span>
                                a
                                <span class="font-medium dark:text-white">{{ contacts.to }}</span>
                                de
                                <span class="font-medium dark:text-white">{{ contacts.total }}</span>
                                resultados
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <template v-for="(link, index) in contacts.links" :key="index">
                                    <button v-if="link && link.url" @click="goToPage(link.url)" :class="[
                                        'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                        link.active
                                            ? 'z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400'
                                            : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-300 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700',
                                        index === 0 ? 'rounded-l-md' : '',
                                        index === contacts.links.length - 1 ? 'rounded-r-md' : '',
                                    ]" v-html="link.label">
                                    </button>
                                    <span v-else-if="link" :class="[
                                        'relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-sm font-medium text-gray-300',
                                        index === 0 ? 'rounded-l-md' : '',
                                        index === contacts.links.length - 1 ? 'rounded-r-md' : '',
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

<style scoped></style>