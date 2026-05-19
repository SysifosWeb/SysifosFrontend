<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const router = useRouter()

const { data: categoriesResponse } = await useFetch(() => `${config.public.apiUrl}category`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})
const categories = computed(() => categoriesResponse.value?.data || [])

const form = reactive({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: null,
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    status: "draft",
    featured: false,
    category_id: "",
    published_at: "",
});

const errors = ref({});
const processing = ref(false);

const previewImage = ref(null);
const isGeneratingSlug = ref(false);

// Generar slug automáticamente basado en el título
const generateSlug = () => {
    if (form.title && !form.slug) {
        isGeneratingSlug.value = true;
        const slug = form.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        form.slug = slug;
        isGeneratingSlug.value = false;
    }
};

// Manejar carga de imagen
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.featured_image = file;

        // Crear preview
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

// Remover imagen
const removeImage = () => {
    form.featured_image = null;
    previewImage.value = null;
    const fileInput = document.getElementById('featured_image');
    if (fileInput) {
        fileInput.value = '';
    }
};

const generateMetaTitle = () => {
    if (form.title && !form.meta_title) {
        form.meta_title = form.title;
    }
};

const generateMetaDescription = () => {
    if (form.excerpt && !form.meta_description) {
        form.meta_description = form.excerpt;
    }
};

// Enviar formulario
const submit = async () => {
    processing.value = true;
    errors.value = {};
    try {
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            if (form[key] !== null && form[key] !== '') {
                // Laravel booleans as 1/0
                if (key === 'featured') {
                    formData.append(key, form[key] ? 1 : 0);
                } else {
                    formData.append(key, form[key]);
                }
            }
        });

        await $fetch(`${config.public.apiUrl}blog/create`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: formData
        });

        router.push('/admin/posts');
    } catch (e) {
        if (e.response?.status === 422) {
            errors.value = e.response._data.errors || {};
        } else {
            console.error('Error al crear post:', e);
            alert('Ocurrió un error al crear el post.');
        }
    } finally {
        processing.value = false;
    }
};

// Guardar como borrador
const saveDraft = () => {
    form.status = "draft";
    submit();
};

// Publicar directamente
const publish = () => {
    form.status = "published";
    if (!form.published_at) {
        const now = new Date();
        form.published_at = now.toISOString().slice(0, 16);
    }
    submit();
};

// Computed para validación
const canPublish = computed(() => {
    return form.title && form.content && form.category_id;
});

// Contador de caracteres
const excerptLength = computed(() => form.excerpt?.length || 0);
const metaDescriptionLength = computed(() => form.meta_description?.length || 0);
</script>

<template>
    <div>
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="mb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Crear Nuevo Post</h1>
                        <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                            Completa la información para crear un nuevo post en el blog
                        </p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="saveDraft" :disabled="processing || !form.title"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Guardar Borrador
                        </button>
                        <button @click="publish" :disabled="processing || !canPublish"
                            class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Publicar
                        </button>
                    </div>
                </div>
            </div>

            <form @submit.prevent="submit" class="space-y-6">
                <!-- Información básica -->
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700">
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Información Básica</h2>

                    <div class="grid grid-cols-1 gap-6">
                        <!-- Título -->
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Título *
                            </label>
                            <input id="title" v-model="form.title" @blur="generateSlug" type="text" required
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Ingresa el título del post" />
                            <p v-if="errors.title" class="mt-2 text-sm text-red-600">
                                {{ errors.title[0] || errors.title }}
                            </p>
                        </div>

                        <!-- Slug -->
                        <div>
                            <label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Slug (URL amigable)
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-300 dark:text-gray-300 text-sm">
                                    /blog/
                                </span>
                                <input id="slug" v-model="form.slug" type="text"
                                    class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="se-genera-automaticamente" />
                            </div>
                            <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                                Se genera automáticamente si se deja vacío
                            </p>
                            <p v-if="errors.slug" class="mt-2 text-sm text-red-600">
                                {{ errors.slug[0] || errors.slug }}
                            </p>
                        </div>

                        <!-- Categoría -->
                        <div>
                            <label for="category_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Categoría *
                            </label>
                            <select id="category_id" v-model="form.category_id" required
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="">Selecciona una categoría</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                            <p v-if="errors.category_id" class="mt-2 text-sm text-red-600">
                                {{ errors.category_id[0] || errors.category_id }}
                            </p>
                        </div>

                        <!-- Extracto -->
                        <div>
                            <label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Extracto
                                <span class="text-gray-300 dark:text-gray-300 font-normal">({{ excerptLength }}/500)</span>
                            </label>
                            <textarea id="excerpt" v-model="form.excerpt" @blur="generateMetaDescription" rows="3"
                                maxlength="500"
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Breve descripción del post..."></textarea>
                            <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                                Resumen corto que aparecerá en las listas de posts
                            </p>
                            <p v-if="errors.excerpt" class="mt-2 text-sm text-red-600">
                                {{ errors.excerpt[0] || errors.excerpt }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contenido -->
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700">
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Contenido</h2>

                    <div>
                        <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Contenido del Post *
                        </label>
                        <textarea id="content" v-model="form.content" rows="15" required
                            class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Escribe aquí el contenido completo del post..."></textarea>
                        <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                            Puedes usar HTML para dar formato
                        </p>
                        <p v-if="errors.content" class="mt-2 text-sm text-red-600">
                            {{ errors.content[0] || errors.content }}
                        </p>
                    </div>
                </div>

                <!-- Imagen destacada -->
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700">
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Imagen Destacada</h2>

                    <div class="space-y-4">
                        <div v-if="!previewImage" class="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-6">
                            <div class="text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-300 dark:text-gray-300" stroke="currentColor" fill="none"
                                    viewBox="0 0 48 48">
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="mt-4">
                                    <label for="featured_image" class="cursor-pointer">
                                        <span class="mt-2 block text-sm font-medium text-gray-900 dark:text-white text-blue-600 hover:text-blue-500 transition-colors">
                                            Selecciona una imagen
                                        </span>
                                        <input id="featured_image" type="file" accept="image/*"
                                            @change="handleImageUpload" class="sr-only" />
                                    </label>
                                    <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">PNG, JPG, GIF hasta 2MB</p>
                                </div>
                            </div>
                        </div>

                        <div v-else class="relative">
                            <img :src="previewImage" alt="Preview" class="w-full h-64 object-cover rounded-lg" />
                            <button @click="removeImage" type="button"
                                class="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <p v-if="errors.featured_image" class="text-sm text-red-600">
                            {{ errors.featured_image[0] || errors.featured_image }}
                        </p>
                    </div>
                </div>

                <!-- Configuración avanzada -->
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700">
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Configuración</h2>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Opciones de publicación -->
                        <div class="space-y-4">
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white">Opciones de Publicación</h3>

                            <!-- Destacado -->
                            <div class="flex items-center">
                                <input id="featured" v-model="form.featured" type="checkbox"
                                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 dark:bg-slate-900 rounded" />
                                <label for="featured" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    Marcar como post destacado
                                </label>
                            </div>

                            <!-- Fecha de publicación -->
                            <div>
                                <label for="published_at" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Fecha de publicación
                                </label>
                                <input id="published_at" v-model="form.published_at" type="datetime-local"
                                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                                    Deja vacío para publicar inmediatamente
                                </p>
                            </div>
                        </div>

                        <!-- SEO -->
                        <div class="space-y-4">
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white">SEO</h3>

                            <!-- Meta título -->
                            <div>
                                <label for="meta_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Meta título
                                </label>
                                <input id="meta_title" v-model="form.meta_title" type="text" maxlength="255"
                                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Título para motores de búsqueda" />
                                <button @click="generateMetaTitle" type="button"
                                    class="mt-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 block">
                                    Usar título del post
                                </button>
                            </div>

                            <!-- Meta descripción -->
                            <div>
                                <label for="meta_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Meta descripción
                                    <span class="text-gray-300 dark:text-gray-300 font-normal">({{ metaDescriptionLength }}/500)</span>
                                </label>
                                <textarea id="meta_description" v-model="form.meta_description" rows="3" maxlength="500"
                                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Descripción para motores de búsqueda"></textarea>
                                <button @click="generateMetaDescription" type="button"
                                    class="mt-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 block">
                                    Usar extracto
                                </button>
                            </div>

                            <!-- Meta keywords -->
                            <div>
                                <label for="meta_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Palabras clave
                                </label>
                                <input id="meta_keywords" v-model="form.meta_keywords" type="text"
                                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="palabra1, palabra2, palabra3" />
                                <p class="mt-1 text-sm text-gray-300 dark:text-gray-300">
                                    Separa las palabras con comas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Botones de acción -->
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700">
                    <div class="flex flex-col sm:flex-row items-center justify-between">
                        <div class="text-sm text-gray-300 dark:text-gray-300 mb-4 sm:mb-0">
                            * Campos obligatorios
                        </div>
                        <div class="flex items-center space-x-3 w-full sm:w-auto">
                            <NuxtLink to="/admin/posts"
                                class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto">
                                Cancelar
                            </NuxtLink>
                            <button @click="saveDraft" type="button" :disabled="processing || !form.title"
                                class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto">
                                <svg v-if="processing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700 dark:text-gray-300"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Guardar Borrador
                            </button>
                            <button @click="publish" type="button" :disabled="processing || !canPublish"
                                class="inline-flex justify-center items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto">
                                <svg v-if="processing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Publicar Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>