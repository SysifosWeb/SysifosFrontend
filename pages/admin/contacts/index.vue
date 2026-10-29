<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import {
    Search, X, Eye, MailOpen, Archive, Inbox, RotateCcw,
} from 'lucide-vue-next';

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

const contacts = computed(() => {
    const r = contactsResponse.value
    if (!r?.data) return { data: [], links: [], from: 0, to: 0, total: 0 }
    // La API devuelve links como objeto {first,last,prev,next}; los botones
    // de paginación (array de {url,label,active}) viven en meta.links
    return { ...r, links: Array.isArray(r.links) ? r.links : (r.meta?.links || []) }
})

const hasActiveFilters = computed(() => filters.search || filters.status);

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
        'new': 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/20',
        'read': 'bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20',
        'replied': 'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20',
        'archived': 'bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20'
    };
    return statusClasses[status] || 'bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20';
};

const getStatusText = (status) => {
    const statusTexts = {
        'new': 'Nuevo',
        'read': 'Leído',
        'replied': 'Respondido',
        'archived': 'Archivado'
    };
    return statusTexts[status] || 'Desconocido';
}

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
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Contactos</h1>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Gestiona los mensajes de contacto de tu sitio principal</p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800">
            <form @submit.prevent="search" class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div class="relative md:col-span-2">
                    <Search class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input v-model="filters.search" type="text" placeholder="Nombre, email, asunto…" class="!pl-10" />
                </div>
                <div class="flex items-center gap-2.5">
                    <select v-model="filters.status" @change="search" class="flex-1">
                        <option value="">Todos</option>
                        <option value="new">Nuevo</option>
                        <option value="read">Leído</option>
                        <option value="replied">Respondido</option>
                        <option value="archived">Archivado</option>
                    </select>
                    <button v-if="hasActiveFilters" type="button" @click="clearFilters" title="Limpiar filtros"
                        class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl text-slate-500 ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                        <X class="h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>

        <!-- Loading -->
        <div v-if="pending" class="flex h-64 items-center justify-center">
            <div class="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
        </div>

        <template v-else>
            <!-- Empty state -->
            <div v-if="contacts.data.length === 0"
                class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">
                    <Inbox class="h-7 w-7 text-sky-500" />
                </div>
                <div>
                    <p class="font-semibold text-slate-900 dark:text-white">Sin contactos</p>
                    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">No se encontraron mensajes con los filtros actuales</p>
                </div>
                <button v-if="hasActiveFilters" @click="clearFilters"
                    class="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-200 transition-colors hover:bg-sky-50 dark:text-sky-400 dark:ring-sky-500/30 dark:hover:bg-sky-500/10">
                    <RotateCcw class="h-4 w-4" /> Limpiar filtros
                </button>
            </div>

            <!-- Tabla -->
            <div v-else class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="overflow-x-auto scrollbar-thin">
                    <table class="min-w-full divide-y divide-slate-100 dark:divide-slate-800">
                        <thead>
                            <tr class="bg-slate-50/80 dark:bg-slate-800/40">
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Contacto</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Asunto</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Estado</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Fecha</th>
                                <th class="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="contact in contacts.data" :key="contact.id"
                                class="group/row transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center gap-3">
                                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                                            {{ contact.name?.charAt(0).toUpperCase() }}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-sm font-semibold text-slate-900 group-hover/row:text-sky-600 dark:text-white dark:group-hover/row:text-sky-400">{{ contact.name }}</div>
                                            <div class="truncate text-xs text-slate-500 dark:text-slate-400">{{ contact.email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="max-w-xs truncate text-sm text-slate-700 dark:text-slate-300" :title="contact.subject">
                                        {{ contact.subject }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1"
                                        :class="getStatusClass(contact.status)">
                                        <span class="h-1.5 w-1.5 rounded-full"
                                            :class="{
                                                'bg-red-500': contact.status === 'new',
                                                'bg-amber-500': contact.status === 'read',
                                                'bg-emerald-500': contact.status === 'replied',
                                                'bg-slate-400': contact.status === 'archived',
                                            }" />
                                        {{ getStatusText(contact.status) }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                    {{ formatDate(contact.created_at) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center justify-end gap-1">
                                        <NuxtLink :to="'/admin/contacts/' + contact.id" title="Ver detalle"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-500/10 dark:hover:text-sky-400">
                                            <Eye class="h-4 w-4" />
                                        </NuxtLink>
                                        <button v-if="contact.status === 'new'" @click="markAsRead(contact)" title="Marcar como leído"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">
                                            <MailOpen class="h-4 w-4" />
                                        </button>
                                        <button v-if="contact.status !== 'archived'" @click="archiveContact(contact)" title="Archivar"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                                            <Archive class="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Paginación -->
                <div v-if="contacts.last_page > 1"
                    class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30 sm:px-6">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="contacts.prev_page_url" @click="goToPage(contacts.prev_page_url)"
                            class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Anterior
                        </button>
                        <button v-if="contacts.next_page_url" @click="goToPage(contacts.next_page_url)"
                            class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                            Mostrando
                            <span class="font-semibold text-slate-900 dark:text-white">{{ contacts.from }}</span>
                            a
                            <span class="font-semibold text-slate-900 dark:text-white">{{ contacts.to }}</span>
                            de
                            <span class="font-semibold text-slate-900 dark:text-white">{{ contacts.total }}</span>
                            resultados
                        </p>
                        <nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm">
                            <template v-for="(link, index) in contacts.links" :key="index">
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

<style scoped></style>
