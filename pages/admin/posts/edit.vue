<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const router = useRouter()
const route = useRoute()

const postId = route.query.id

const { data: postResponse, pending: postPending, refresh: refreshPost } = await useFetch(
    () => `${config.public.apiUrl}blog/${postId}`,
    {
        key: `post-edit-${postId}`,
        headers: {
            Authorization: `Bearer ${token.value}`,
            Accept: 'application/json'
        },
        getCachedData: () => null   // deshabilitar caché, siempre fetch fresco
    }
)

const { data: categoriesResponse } = await useFetch(() => `${config.public.apiUrl}category`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})

const post = computed(() => postResponse.value?.data || postResponse.value || {})
const categories = computed(() => categoriesResponse.value?.data || [])

const form = reactive({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category_id: "",
    featured_image_url: "", // using the user's string-based featured_image_url from their provided edit.vue
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    status: "draft",
    featured: false,
    published_at: null
});

const errors = ref({});
const processing = ref(false);

watch(post, (newPost) => {
    if (newPost && Object.keys(newPost).length > 0) {
        form.title = newPost.title || '';
        form.slug = newPost.slug || '';
        form.excerpt = newPost.excerpt || '';
        form.content = newPost.content || '';
        form.category_id = newPost.category_id ? Number(newPost.category_id) : '';
        form.featured_image_url = newPost.featured_image_url || '';
        form.meta_title = newPost.meta_title || '';
        form.meta_description = newPost.meta_description || '';
        form.meta_keywords = Array.isArray(newPost.meta_keywords) ? newPost.meta_keywords.join(', ') : (newPost.meta_keywords || '');
        form.status = newPost.status || 'draft';
        form.featured = newPost.featured || false;
        // Check timezone format handling if needed
        form.published_at = newPost.published_at ? new Date(newPost.published_at).toISOString().slice(0,16) : null;
    }
}, { immediate: true });

const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[ñ]/g, 'n')
        .replace(/[ç]/g, 'c')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
};

watch(() => form.title, (newTitle) => {
    if (newTitle && !form.slug && (!post.value || post.value.title !== newTitle)) {
        form.slug = generateSlug(newTitle);
    }
});

const submit = async () => {
    processing.value = true;
    errors.value = {};
    try {
        await $fetch(`${config.public.apiUrl}blog/${postId}/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: 'application/json'
            },
            body: {
                ...form,
                category_id: form.category_id ? Number(form.category_id) : null,
                featured: form.featured ? 1 : 0,
                meta_keywords: form.meta_keywords
                    ? form.meta_keywords.split(',').map(k => k.trim()).filter(k => k)
                    : []
            }
        });

        alert('Post actualizado exitosamente');
        router.push('/admin/posts');
    } catch (e) {
        if (e.response?.status === 422) {
            errors.value = e.response._data.errors || {};
        } else {
            console.error('Error al actualizar post:', e);
            alert('Ocurrió un error al actualizar el post.');
        }
    } finally {
        processing.value = false;
    }
};

const statusOptions = [
    { value: 'draft', label: 'Borrador' },
    { value: 'published', label: 'Publicado' }
];

const isPublished = computed(() => form.status === 'published');
</script>

<template>
    <div>
        <div class="max-w-4xl mx-auto">
            <div class="mb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                            Editar Post
                        </h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Modifica la información del post
                        </p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <NuxtLink :to="`/admin/posts/${postId}`"
                            class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700">
                            Ver Post
                        </NuxtLink>
                        <NuxtLink to="/admin/posts"
                            class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700">
                            Cancelar
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div v-if="postPending" class="flex justify-center my-12">
                <svg class="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
            </div>

            <form v-else @submit.prevent="submit" class="space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Información básica -->
                        <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                            <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                    Información Principal
                                </h3>
                            </div>
                            <div class="p-6 space-y-6">
                                <div>
                                    <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Título *
                                    </label>
                                    <input id="title" v-model="form.title" type="text" required
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Título del post" />
                                    <div v-if="errors.title" class="mt-1 text-sm text-red-600">
                                        {{ errors.title[0] || errors.title }}
                                    </div>
                                </div>

                                <div>
                                    <label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Slug *
                                    </label>
                                    <input id="slug" v-model="form.slug" type="text" required
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="slug-del-post" />
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        URL: /blog/{{ form.slug }}
                                    </p>
                                    <div v-if="errors.slug" class="mt-1 text-sm text-red-600">
                                        {{ errors.slug[0] || errors.slug }}
                                    </div>
                                </div>

                                <div>
                                    <label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Extracto
                                    </label>
                                    <textarea id="excerpt" v-model="form.excerpt" rows="3"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Breve descripción del post..."></textarea>
                                    <div v-if="errors.excerpt" class="mt-1 text-sm text-red-600">
                                        {{ errors.excerpt[0] || errors.excerpt }}
                                    </div>
                                </div>

                                <div>
                                    <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Contenido *
                                    </label>
                                    <textarea id="content" v-model="form.content" rows="12" required
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Escribe el contenido del post aquí..."></textarea>
                                    <div v-if="errors.content" class="mt-1 text-sm text-red-600">
                                        {{ errors.content[0] || errors.content }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SEO -->
                        <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                            <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                    Optimización SEO
                                </h3>
                            </div>
                            <div class="p-6 space-y-6">
                                <div>
                                    <label for="meta_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Meta Título
                                    </label>
                                    <input id="meta_title" v-model="form.meta_title" type="text"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Título para SEO (opcional)" />
                                    <div v-if="errors.meta_title" class="mt-1 text-sm text-red-600">
                                        {{ errors.meta_title[0] || errors.meta_title }}
                                    </div>
                                </div>

                                <div>
                                    <label for="meta_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Meta Descripción
                                    </label>
                                    <textarea id="meta_description" v-model="form.meta_description" rows="3"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Descripción para motores de búsqueda..."></textarea>
                                    <div v-if="errors.meta_description" class="mt-1 text-sm text-red-600">
                                        {{ errors.meta_description[0] || errors.meta_description }}
                                    </div>
                                </div>

                                <div>
                                    <label for="meta_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Palabras Clave
                                    </label>
                                    <input id="meta_keywords" v-model="form.meta_keywords" type="text"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="palabra1, palabra2, palabra3" />
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Separa las palabras con comas
                                    </p>
                                    <div v-if="errors.meta_keywords" class="mt-1 text-sm text-red-600">
                                        {{ errors.meta_keywords[0] || errors.meta_keywords }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <!-- Configuración -->
                        <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                            <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                    Configuración
                                </h3>
                            </div>
                            <div class="p-6 space-y-6">
                                <div>
                                    <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Estado
                                    </label>
                                    <select id="status" v-model="form.status"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        <option v-for="option in statusOptions" :key="option.value"
                                            :value="option.value">
                                            {{ option.label }}
                                        </option>
                                    </select>
                                    <div v-if="errors.status" class="mt-1 text-sm text-red-600">
                                        {{ errors.status[0] || errors.status }}
                                    </div>
                                </div>

                                <div>
                                    <label for="category_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Categoría
                                    </label>
                                    <select id="category_id" v-model="form.category_id"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        <option value="">Sin categoría</option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                    <div v-if="errors.category_id" class="mt-1 text-sm text-red-600">
                                        {{ errors.category_id[0] || errors.category_id }}
                                    </div>
                                </div>

                                <div>
                                    <label for="featured_image_url"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Imagen Destacada (URL)
                                    </label>
                                    <input id="featured_image_url" v-model="form.featured_image_url" type="url"
                                        class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="https://ejemplo.com/imagen.jpg" />
                                    <div v-if="errors.featured_image_url" class="mt-1 text-sm text-red-600">
                                        {{ errors.featured_image_url[0] || errors.featured_image_url }}
                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <input id="featured" v-model="form.featured" type="checkbox"
                                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-slate-600 dark:bg-slate-900 rounded" />
                                    <label for="featured" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                        Post destacado
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Vista previa de imagen -->
                        <div v-if="form.featured_image_url" class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                            <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                    Vista Previa
                                </h3>
                            </div>
                            <div class="p-6">
                                <img :src="form.featured_image_url" :alt="form.title"
                                    class="w-full h-32 object-cover rounded-lg" @error="form.featured_image_url = ''" />
                            </div>
                        </div>

                        <!-- Acciones -->
                        <div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700">
                            <div class="p-6">
                                <button type="submit" :disabled="processing"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span v-if="processing">Actualizando...</span>
                                    <span v-else>Actualizar Post</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Estilos específicos para el formulario */
textarea {
    resize: vertical;
}

.keyword-tag {
    transition: all 0.2s ease;
}

.keyword-tag:hover {
    transform: translateY(-1px);
}
</style>