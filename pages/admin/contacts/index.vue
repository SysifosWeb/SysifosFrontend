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
        'archived': 'bg-admin-elevated text-admin-muted ring-admin-line/10 dark:bg-admin-elevated dark:text-admin-muted dark:ring-admin-line/20'
    };
    return statusClasses[status] || 'bg-admin-elevated text-admin-muted ring-admin-line/10 dark:bg-admin-elevated dark:text-admin-muted dark:ring-admin-line/20';
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
                <h1 class="font-display text-xl font-bold text-admin-ink dark:text-admin-ink sm:text-2xl">Contactos</h1>
                <p class="mt-1 text-sm text-admin-muted dark:text-admin-muted">Gestiona los mensajes de contacto de tu sitio principal</p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="mb-6 rounded-2xl bg-admin-surface p-4 shadow-sm ring-1 ring-admin-line/60 sm:p-5 dark:bg-admin-surface dark:ring-admin-line">
            <form @submit.prevent="search" class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div class="relative md:col-span-2">
                    <Search class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-admin-muted" />
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
                        class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl text-admin-muted ring-1 ring-admin-line transition-colors hover:bg-admin-soft hover:text-admin-ink dark:text-admin-muted dark:ring-admin-line dark:hover:bg-admin-elevated dark:hover:text-admin-ink">
                        <X class="h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>

        <!-- Loading -->
        <div v-if="pending" class="flex h-64 items-center justify-center">
            <div class="h-10 w-10 animate-spin rounded-full border-4 border-admin-accent border-t-sky-500 dark:border-admin-line dark:border-t-sky-400" />
        </div>

        <template v-else>
            <!-- Empty state -->
            <div v-if="contacts.data.length === 0"
                class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-admin-surface px-6 py-16 text-center shadow-sm ring-1 ring-admin-line/60 dark:bg-admin-surface dark:ring-admin-line">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-admin-tint dark:bg-admin-action/10">
                    <Inbox class="h-7 w-7 text-admin-accent" />
                </div>
                <div>
                    <p class="font-semibold text-admin-ink dark:text-admin-ink">Sin contactos</p>
                    <p class="mt-1 text-sm text-admin-muted dark:text-admin-muted">No se encontraron mensajes con los filtros actuales</p>
                </div>
                <button v-if="hasActiveFilters" @click="clearFilters"
                    class="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-admin-accent ring-1 ring-admin-accent transition-colors hover:bg-admin-tint dark:text-admin-accent dark:ring-admin-accent/30 dark:hover:bg-admin-action/10">
                    <RotateCcw class="h-4 w-4" /> Limpiar filtros
                </button>
            </div>

            <!-- Tabla -->
            <div v-else class="overflow-hidden rounded-2xl bg-admin-surface shadow-sm ring-1 ring-admin-line/60 dark:bg-admin-surface dark:ring-admin-line">
                <div class="overflow-x-auto scrollbar-thin">
                    <table class="min-w-full divide-y divide-admin-line dark:divide-admin-line">
                        <thead>
                            <tr class="bg-admin-soft/80 dark:bg-admin-elevated/40">
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-admin-muted dark:text-admin-muted">Contacto</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-admin-muted dark:text-admin-muted">Asunto</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-admin-muted dark:text-admin-muted">Estado</th>
                                <th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-admin-muted dark:text-admin-muted">Fecha</th>
                                <th class="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-admin-muted dark:text-admin-muted">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-admin-line dark:divide-admin-line">
                            <tr v-for="contact in contacts.data" :key="contact.id"
                                class="group/row transition-colors hover:bg-admin-soft/80 dark:hover:bg-admin-elevated/40">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center gap-3">
                                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-admin-tint text-sm font-bold text-admin-accent dark:bg-admin-action/10 dark:text-admin-accent">
                                            {{ contact.name?.charAt(0).toUpperCase() }}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-sm font-semibold text-admin-ink group-hover/row:text-admin-accent dark:text-admin-ink dark:group-hover/row:text-admin-accent">{{ contact.name }}</div>
                                            <div class="truncate text-xs text-admin-muted dark:text-admin-muted">{{ contact.email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="max-w-xs truncate text-sm text-admin-ink dark:text-admin-muted" :title="contact.subject">
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
                                                'bg-admin-line': contact.status === 'archived',
                                            }" />
                                        {{ getStatusText(contact.status) }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-admin-muted dark:text-admin-muted">
                                    {{ formatDate(contact.created_at) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center justify-end gap-1">
                                        <NuxtLink :to="'/admin/contacts/' + contact.id" title="Ver detalle"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-admin-muted transition-colors hover:bg-admin-tint hover:text-admin-accent dark:hover:bg-admin-action/10 dark:hover:text-admin-accent">
                                            <Eye class="h-4 w-4" />
                                        </NuxtLink>
                                        <button v-if="contact.status === 'new'" @click="markAsRead(contact)" title="Marcar como leído"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-admin-muted transition-colors hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">
                                            <MailOpen class="h-4 w-4" />
                                        </button>
                                        <button v-if="contact.status !== 'archived'" @click="archiveContact(contact)" title="Archivar"
                                            class="flex h-8 w-8 items-center justify-center rounded-lg text-admin-muted transition-colors hover:bg-admin-elevated hover:text-admin-muted dark:hover:bg-admin-elevated dark:hover:text-admin-ink">
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
                    class="flex items-center justify-between border-t border-admin-line bg-admin-soft/50 px-4 py-3 dark:border-admin-line dark:bg-admin-elevated/30 sm:px-6">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <button v-if="contacts.prev_page_url" @click="goToPage(contacts.prev_page_url)"
                            class="inline-flex items-center rounded-xl border border-admin-line bg-admin-surface px-4 py-2 text-sm font-medium text-admin-muted transition-colors hover:bg-admin-soft dark:border-admin-line dark:bg-admin-surface dark:text-admin-muted dark:hover:bg-admin-elevated">
                            Anterior
                        </button>
                        <button v-if="contacts.next_page_url" @click="goToPage(contacts.next_page_url)"
                            class="ml-3 inline-flex items-center rounded-xl border border-admin-line bg-admin-surface px-4 py-2 text-sm font-medium text-admin-muted transition-colors hover:bg-admin-soft dark:border-admin-line dark:bg-admin-surface dark:text-admin-muted dark:hover:bg-admin-elevated">
                            Siguiente
                        </button>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <p class="text-sm text-admin-muted dark:text-admin-muted">
                            Mostrando
                            <span class="font-semibold text-admin-ink dark:text-admin-ink">{{ contacts.from }}</span>
                            a
                            <span class="font-semibold text-admin-ink dark:text-admin-ink">{{ contacts.to }}</span>
                            de
                            <span class="font-semibold text-admin-ink dark:text-admin-ink">{{ contacts.total }}</span>
                            resultados
                        </p>
                        <nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm">
                            <template v-for="(link, index) in contacts.links" :key="index">
                                <button v-if="link && link.url" @click="goToPage(link.url)" :class="[
                                    'relative inline-flex items-center border px-3.5 py-2 text-sm font-medium transition-colors first:rounded-l-xl last:rounded-r-xl',
                                    link.active
                                        ? 'z-10 border-admin-accent bg-admin-tint text-admin-accent dark:border-admin-accent/40 dark:bg-admin-action/15 dark:text-admin-accent'
                                        : 'border-admin-line bg-admin-surface text-admin-muted hover:bg-admin-soft dark:border-admin-line dark:bg-admin-surface dark:text-admin-muted dark:hover:bg-admin-elevated',
                                ]" v-html="link.label">
                                </button>
                                <span v-else-if="link"
                                    class="relative inline-flex items-center border border-admin-line bg-admin-soft px-3.5 py-2 text-sm font-medium text-admin-muted first:rounded-l-xl last:rounded-r-xl dark:border-admin-line dark:bg-admin-elevated/50 dark:text-admin-muted"
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
