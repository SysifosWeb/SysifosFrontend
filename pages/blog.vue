<script setup>
const searchQuery = ref('');
const selectedCategory = ref('all');

// Posts y categorías del backend
const config = useRuntimeConfig();

const { data: postsResponse } = await useFetch(() => `${config.public.apiUrl}blog`, {
    query: {
        per_page: 100, // Ajustar según necesidad
        status: 'published'
    }
});

const { data: categoriesResponse } = await useFetch(() => `${config.public.apiUrl}category`);

const posts = computed(() => postsResponse.value?.data ? postsResponse.value : { data: [], links: [] });
const categories = computed(() => categoriesResponse.value || []);

const allCategories = computed(() => {
    if (!categories.value || !Array.isArray(categories.value)) {
        return [{ id: 'all', name: 'Todos', count: 0 }];
    }

    const backendCategories = categories.value.map(cat => ({
        id: cat.slug,
        name: cat.name,
        count: cat.posts_count || 0
    }));

    const totalCount = posts.value?.total || (posts.value?.data ? posts.value.data.length : 0);

    return [
        { id: 'all', name: 'Todos', count: totalCount },
        ...backendCategories
    ];
});

// Posts del backend
const allPosts = computed(() => {
    if (!posts.value) return [];
    return posts.value.data || posts.value || [];
});

const filteredPosts = computed(() => {
    let blogPosts = allPosts.value;

    // Filter by category
    if (selectedCategory.value !== 'all') {
        blogPosts = blogPosts.filter(post => post.category?.slug === selectedCategory.value);
    }

    // Filter by search query
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        blogPosts = blogPosts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            (post.content && post.content.toLowerCase().includes(query))
        );
    }

    return blogPosts;
});

const featuredPosts = computed(() => allPosts.value.filter(p => p.featured));

const featuredPost = computed(() => {
    if (!featuredPosts.value || featuredPosts.value.length === 0) {
        return null;
    }
    return featuredPosts.value[0];
});

const setCategory = (categoryId) => {
    selectedCategory.value = categoryId;
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

const getPostUrl = (post) => {
    return `/blog/${post.slug}`;
};

const getImageUrl = (post) => {
    return post.featured_image || '/img/blog-default.jpg';
};
</script>
<template>
  <div>
    <Head>
      <Title>Blog - Artículos sobre Desarrollo Web | SysifosWeb</Title>
      <Meta name="description" content="Lee nuestros artículos sobre desarrollo web, programación y tecnología." />
    </Head>

    <Hero
      title="Blog"
      description="Artículos, tutoriales y novedades sobre desarrollo web y tecnología"      
    >      
    </Hero>

    <!-- Search and Filters -->
        <section class="py-8 bg-gray-50 border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <!-- Search Bar -->
                    <div class="relative flex-1 max-w-md">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Buscar artículos..."
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <!-- Category Filters -->
                    <div class="flex flex-wrap gap-2">
                        <button
                            v-for="category in allCategories"
                            :key="category.id"
                            @click="setCategory(category.id)"
                            :class="[
                                'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                                selectedCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            ]"
                        >
                            {{ category.name }} ({{ category.count }})
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Article -->
        <section v-if="featuredPost && selectedCategory === 'all' && !searchQuery" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Artículo Destacado</h2>
                </div>

                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                        <div>
                            <div class="flex items-center gap-4 mb-4">
                                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Destacado
                                </span>
                                <span class="text-gray-500 text-sm">{{ formatDate(featuredPost.published_at || featuredPost.created_at) }}</span>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ featuredPost.title }}</h3>
                            <p class="text-gray-600 text-lg mb-6">{{ featuredPost.excerpt }}</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span class="text-white font-semibold text-sm">{{ featuredPost.user?.name ? featuredPost.user.name.split(' ').map(n => n[0]).join('') : 'A' }}</span>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-gray-900">{{ featuredPost.user?.name || 'Autor' }}</p>
                                        <p class="text-gray-500 text-sm">{{ featuredPost.reading_time || '5 min de lectura' }}</p>
                                    </div>
                                </div>
                                <a :href="getPostUrl(featuredPost)" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                    Leer Artículo
                                </a>
                            </div>
                        </div>
                        <div class="relative">
                            <img :src="getImageUrl(featuredPost)" :alt="featuredPost.title" class="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg" />
                            <div class="absolute top-4 right-4">
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-if="featuredPost.category"
                                        class="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium"
                                    >
                                        {{ featuredPost.category.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Articles Grid -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between mb-12">
                    <h2 class="text-3xl font-bold text-gray-900">
                        {{ selectedCategory === 'all' ? 'Últimos Artículos' : allCategories.find(c => c.id === selectedCategory)?.name }}
                    </h2>
                    <p class="text-gray-600">
                        {{ filteredPosts.length }} artículo{{ filteredPosts.length !== 1 ? 's' : '' }} encontrado{{ filteredPosts.length !== 1 ? 's' : '' }}
                    </p>
                </div>

                <!-- Articles Grid -->
                <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <article
                        v-for="post in filteredPosts"
                        :key="post.id"
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div class="relative">
                            <img :src="getImageUrl(post)" :alt="post.title" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div class="absolute top-4 left-4">
                                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {{ post.category?.name || 'General' }}
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <span>{{ formatDate(post.published_at || post.created_at) }}</span>
                                <span>•</span>
                                <span>{{ post.reading_time || '5 min de lectura' }}</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                <a :href="getPostUrl(post)">{{ post.title }}</a>
                            </h3>
                            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                        <span class="text-gray-700 font-semibold text-xs">{{ post.user?.name ? post.user.name.split(' ').map(n => n[0]).join('') : 'A' }}</span>
                                    </div>
                                    <span class="text-sm text-gray-700">{{ post.user?.name || 'Autor' }}</span>
                                </div>
                                <a :href="getPostUrl(post)" class="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                                    Leer más →
                                </a>
                            </div>
                            <div class="flex items-center gap-2 mt-4">
                                <span class="text-sm text-gray-500">{{ post.views || 0 }} vistas</span>
                                <span v-if="post.featured" class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                                    Destacado
                                </span>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- No Results -->
                <div v-else class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"/>
                    </svg>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron artículos</h3>
                    <p class="text-gray-500">Intenta con otros términos de búsqueda o categorías.</p>
                </div>

                <!-- Pagination Laravel -->
                <div v-if="posts && posts.links && posts.links.length > 3" class="flex justify-center">
                    <nav class="flex items-center space-x-1">
                        <template v-for="(link, index) in posts.links" :key="index">
                            <a
                                v-if="link.url"
                                :href="link.url"
                                v-html="link.label"
                                :class="[
                                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                                    link.active
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                ]"
                            ></a>
                            <span
                                v-else
                                v-html="link.label"
                                class="px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
                            ></span>
                        </template>
                    </nav>
                </div>
            </div>
        </section>

        <!-- Newsletter Subscription -->
        <!-- <section class="py-16 bg-blue-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-4">¿No te quieres perder nada?</h2>
                <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Suscríbete a nuestro newsletter y recibe los últimos artículos directamente en tu email
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Tu email"
                        class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                    />
                    <button class="bg-cyan-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200">
                        Suscribirse
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-4">
                    Sin spam. Solo contenido de calidad. Puedes cancelar en cualquier momento.
                </p>
            </div>
        </section> -->
         <section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ¿Listo para Comenzar tu Proyecto?
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Conversemos sobre tus necesidades y te ayudaremos a encontrar la solución perfecta
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Solicitar Cotización
                    </a>
                    <!-- <a href="/portfolio" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
                        Ver Proyectos
                    </a> -->
                </div>
            </div>
        </section>
  </div>
</template>