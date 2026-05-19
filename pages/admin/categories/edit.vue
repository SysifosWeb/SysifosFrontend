<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

definePageMeta({
    layout: 'admin'
});

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const token = useCookie('auth_token');

const loading = ref(false);
const fetching = ref(true);
const errors = ref({});

const form = ref({
    name: '',
    slug: '',
    description: '',
    color: '#3B82F6',
    active: true,
    sort_order: 0
});

// Autogenerar slug si está vacío (solamente cuando edita el nombre y no hay slug previo)
const generateSlug = () => {
    if (!form.value.slug && form.value.name) {
        form.value.slug = form.value.name.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F]+/g, '-').replace(/(^-|-$)+/g, '');
    }
};

const categoryId = route.query.id;

onMounted(async () => {
    if (!categoryId) {
        alert("ID no proporcionado");
        router.push('/admin/categories');
        return;
    }

    try {
        const response = await $fetch(`${config.public.apiUrl}category/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            }
        });

        const data = response?.data || response || {};

        // Asignar los valores a form
        form.value = {
            name: data.name || '',
            slug: data.slug || '',
            description: data.description || '',
            color: data.color || '#3B82F6',
            active: data.active !== undefined ? !!data.active : true,
            sort_order: data.sort_order || 0
        };

    } catch (e) {
        console.error('Error fetching category:', e);
        alert('No se pudo cargar la categoría');
        router.push('/admin/categories');
    } finally {
        fetching.value = false;
    }
});

const submit = async () => {
    loading.value = true;
    errors.value = {};

    try {
        await $fetch(`${config.public.apiUrl}category/${categoryId}/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: form.value
        });

        router.push('/admin/categories');
    } catch (e) {
        if (e.response?.status === 422) {
            errors.value = e.response._data.errors || {};
        } else {
            console.error('Error updating category:', e);
            alert('Ocurrió un error al guardar los cambios.');
        }
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="max-w-4xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                    Editar Categoría
                </h1>
                <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                    Modifica los campos que necesites actualizar
                </p>
            </div>
            <NuxtLink to="/admin/categories"
                class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150">
                Volver
            </NuxtLink>
        </div>

        <div v-if="fetching" class="flex justify-center py-12">
            <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <div v-else
            class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700 overflow-hidden">
            <form @submit.prevent="submit" class="p-6 space-y-6">
                <!-- Nombre -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                    <input v-model="form.name" @blur="generateSlug" type="text" required
                        class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.name }" />
                    <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.name[0] }}</p>
                </div>

                <!-- Slug -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Slug (URL)</label>
                    <input v-model="form.slug" type="text" required
                        class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.slug }" />
                    <p class="mt-1 text-xs text-gray-300 dark:text-gray-300">Se usará en la URL: /blog/categoria/{slug}
                    </p>
                    <p v-if="errors.slug" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.slug[0] }}</p>
                </div>

                <!-- Descripción -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descripción</label>
                    <textarea v-model="form.description" rows="3"
                        class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.description }"></textarea>
                    <p v-if="errors.description" class="mt-1 text-sm text-red-600 dark:text-red-400">{{
                        errors.description[0] }}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Color -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color
                            representativo</label>
                        <div class="flex items-center space-x-3">
                            <input v-model="form.color" type="color"
                                class="h-10 w-20 rounded border border-gray-300 dark:border-slate-600 cursor-pointer p-0" />
                            <span class="text-sm font-mono text-gray-300 dark:text-gray-300">{{ form.color }}</span>
                        </div>
                        <p v-if="errors.color" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.color[0] }}
                        </p>
                    </div>

                    <!-- Orden -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Orden</label>
                        <input v-model="form.sort_order" type="number" min="0" required
                            class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.sort_order }" />
                        <p v-if="errors.sort_order" class="mt-1 text-sm text-red-600 dark:text-red-400">{{
                            errors.sort_order[0] }}</p>
                    </div>

                    <!-- Estado -->
                    <div class="flex items-center pt-6">
                        <label class="flex items-center cursor-pointer">
                            <input v-model="form.active" type="checkbox"
                                class="h-5 w-5 rounded border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900" />
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                Categoría activa
                            </span>
                        </label>
                    </div>
                </div>

                <!-- Footer del form -->
                <div class="pt-4 flex justify-end">
                    <button type="submit" :disabled="loading"
                        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                        <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>