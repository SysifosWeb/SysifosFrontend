<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const route = useRoute()
const router = useRouter()
const contactId = route.params.id

const { data: contactResponse, pending, refresh } = await useFetch(() => `${config.public.apiUrl}contact/${contactId}`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})

const contact = computed(() => contactResponse.value?.data || contactResponse.value || {})

const statusClass = computed(() => {
    const statusClasses = {
        'new': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        'read': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        'replied': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        'archived': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    };
    return statusClasses[contact.value.status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
});

const statusText = computed(() => {
    const statusTexts = {
        'new': 'Nuevo',
        'read': 'Leído',
        'replied': 'Respondido',
        'archived': 'Archivado'
    };
    return statusTexts[contact.value.status] || 'Desconocido';
});

const formatDate = (date) => {
    if(!date) return '-';
    return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};

const markAsRead = async () => {
    try {
        await $fetch(`${config.public.apiUrl}contact/${contactId}/mark-as-read`, {
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

const markAsReplied = async () => {
    try {
        await $fetch(`${config.public.apiUrl}contact/${contactId}/mark-as-replied`, {
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

const archiveContact = async () => {
    try {
        await $fetch(`${config.public.apiUrl}contact/${contactId}/mark-as-archived`, {
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
};

const deleteContact = async () => {
    if (confirm(`¿Estás seguro de que quieres eliminar el contacto de "${contact.value.name}"?`)) {
        try {
            await $fetch(`${config.public.apiUrl}contact/${contactId}/delete`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    Accept: 'application/json'
                }
            });
            router.push('/admin/contacts');
        } catch (e) {
            console.error('Error al eliminar contacto:', e);
            alert('Ocurrió un error al eliminar el contacto (puede que la ruta no exista en el backend).');
        }
    }
};
</script>

<template>
    <div>
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700">
                <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <NuxtLink to="/admin/contacts" class="text-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                            </NuxtLink>
                            <div>
                                <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {{ contact.name }}
                                </h1>
                                <p class="text-sm text-gray-300 dark:text-gray-300">
                                    Contacto recibido el {{ formatDate(contact.created_at) }}
                                </p>
                            </div>
                        </div>
                        <span
                            :class="['inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', statusClass]">
                            {{ statusText }}
                        </span>
                    </div>
                </div>

                <!-- Acciones -->
                <div class="px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-700">
                    <div class="flex flex-wrap gap-2">
                        <button v-if="contact.status === 'new'" @click="markAsRead"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Marcar como Leído
                        </button>

                        <button v-if="contact.status !== 'replied'" @click="markAsReplied"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            Marcar como Respondido
                        </button>

                        <button v-if="contact.status !== 'archived'" @click="archiveContact"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4" />
                            </svg>
                            Archivar
                        </button>

                        <a :href="`mailto:${contact.email}?subject=Re: ${contact.subject}`"
                            class="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-slate-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Responder por Email
                        </a>

                        <button @click="deleteContact"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Loading Info -->
            <div v-if="pending" class="flex justify-center my-12">
                <svg class="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
            </div>

            <!-- Información del Contacto -->
            <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Información Principal -->
                <div class="lg:col-span-2">
                    <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Mensaje</h2>
                        </div>
                        <div class="px-6 py-4">
                            <div class="mb-4">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300 mb-1">Asunto</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ contact.subject }}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">Mensaje</h3>
                                <div class="prose dark:prose-invert max-w-none">
                                    <p class="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{{ contact.message }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Información de Contacto -->
                <div class="space-y-6">
                    <!-- Datos Personales -->
                    <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Datos de Contacto</h2>
                        </div>
                        <div class="px-6 py-4 space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Nombre</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ contact.name }}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Email</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">
                                    <a :href="`mailto:${contact.email}`" class="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                                        {{ contact.email }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="contact.phone">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Teléfono</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">
                                    <a :href="`tel:${contact.phone}`" class="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                                        {{ contact.phone }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="contact.company">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Empresa</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ contact.company }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Información del Sistema -->
                    <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Información del Sistema</h2>
                        </div>
                        <div class="px-6 py-4 space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Estado</h3>
                                <span
                                    :class="['inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', statusClass]">
                                    {{ statusText }}
                                </span>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Fecha de Contacto</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ formatDate(contact.created_at) }}</p>
                            </div>
                            <div v-if="contact.read_at">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Leído el</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ formatDate(contact.read_at) }}</p>
                            </div>
                            <div v-if="contact.replied_at">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Respondido el</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ formatDate(contact.replied_at) }}</p>
                            </div>
                            <div v-if="contact.ip_address">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Dirección IP</h3>
                                <p class="text-sm text-gray-900 dark:text-gray-100 font-mono">{{ contact.ip_address }}</p>
                            </div>
                            <div v-if="contact.user_agent">
                                <h3 class="text-sm font-medium text-gray-300 dark:text-gray-300">Navegador</h3>
                                <p class="text-xs text-gray-900 dark:text-gray-100 break-all">{{ contact.user_agent }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.prose p {
    margin-bottom: 1rem;
}
</style>