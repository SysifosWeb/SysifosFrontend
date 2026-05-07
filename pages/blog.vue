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
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

const getPostUrl = (post) => {
    return `/blog/${post.slug}`;
};

const getImageUrl = (post) => {
    return post.featured_image || '/img/blog-default.jpg';
};

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Blog - Artículos sobre Desarrollo Web y Tecnología',
  description: 'Lee nuestros artículos sobre desarrollo web, programación, inteligencia artificial y las últimas tendencias tecnológicas. Consejos de expertos para tu negocio.',
  keywords: 'blog tecnología, desarrollo web chile, programación, software industrial, inteligencia artificial',
  image: '/img/og-blog.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Blog - SysifosWeb',
    description: 'Artículos sobre desarrollo web y tecnología'
  }
})
</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <BlogHeroSection />

    <!-- Search and Filters -->
    <section class="py-8 bg-section-surface border-b border-white/5 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <!-- Search Bar -->
                <div class="relative flex-1 max-w-md w-full">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Buscar artículos..."
                        class="block w-full px-4 py-3 bg-section-dark border border-white/10 text-white text-sm rounded-lg focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap gap-2 justify-center lg:justify-end">
                    <button
                        v-for="category in allCategories"
                        :key="category.id"
                        @click="setCategory(category.id)"
                        :class="[
                            'px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 rounded-full border',
                            selectedCategory === category.id
                                ? 'bg-accent/10 border-accent text-accent'
                                : 'bg-section-dark border-white/10 text-muted hover:border-accent/50 hover:text-white'
                        ]"
                    >
                        {{ category.name }} ({{ category.count }})
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Article -->
    <section v-if="featuredPost && selectedCategory === 'all' && !searchQuery" class="py-16 bg-section-dark relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10">
                <h2 class="text-xl font-bold text-white tracking-widest font-sans">
                    Artículo Destacado
                </h2>
            </div>

            <div class="card-border bg-section-surface relative group overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-xs font-semibold text-accent uppercase tracking-wider">
                            {{ featuredPost.category?.name || 'Destacado' }}
                        </span>
                        <span class="text-xs text-muted">{{ formatDate(featuredPost.published_at || featuredPost.created_at) }}</span>
                    </div>
                    <h3 class="card-title text-3xl lg:text-4xl mb-4">{{ featuredPost.title }}</h3>
                    <p class="card-text text-sm mb-8">{{ featuredPost.excerpt }}</p>
                    
                    <div class="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                        <div class="flex items-center gap-3">
                            <div>
                                <p class="text-xs font-semibold text-white uppercase">{{ featuredPost.user?.name || 'SysifosWeb' }}</p>
                                <p class="text-xs text-muted">{{ featuredPost.reading_time || '5 min de lectura' }}</p>
                            </div>
                        </div>
                        <a :href="getPostUrl(featuredPost)" class="cta-ghost text-xs">
                            Leer Artículo
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 relative min-h-[300px]">
                    <img :src="getImageUrl(featuredPost)" :alt="featuredPost.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-r from-section-surface via-transparent to-transparent lg:block hidden"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 bg-section-dark relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between mb-12 border-b border-white/5 pb-4">
                <h2 class="text-xl font-bold text-white tracking-widest font-sans">
                    {{ selectedCategory === 'all' ? 'Últimos Artículos' : allCategories.find(c => c.id === selectedCategory)?.name }}
                </h2>
                <p class="text-xs font-semibold text-accent">
                    {{ filteredPosts.length }} artículos
                </p>
            </div>

            <!-- Articles Grid -->
            <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <article
                    v-for="post in filteredPosts"
                    :key="post.id"
                    class="card-border bg-section-surface hover:border-accent/30 transition-all duration-300 group flex flex-col h-full overflow-hidden"
                >
                    <div class="relative h-48 bg-black overflow-hidden border-b border-white/5">
                        <img :src="getImageUrl(post)" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                        <div class="absolute top-4 left-4 z-10">
                            <span class="bg-section-dark/80 border border-white/10 text-white px-2 py-1 text-xs font-semibold rounded-md backdrop-blur-sm">
                                {{ post.category?.name || 'General' }}
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <div class="flex items-center gap-2 text-xs text-muted mb-4">
                            <span>{{ formatDate(post.published_at || post.created_at) }}</span>
                            <span class="text-accent">•</span>
                            <span>{{ post.reading_time || '5 min de lectura' }}</span>
                        </div>
                        <h3 class="card-title text-lg mb-3 group-hover:text-accent transition-colors duration-200">
                            <a :href="getPostUrl(post)">{{ post.title }}</a>
                        </h3>
                        <p class="card-text text-sm mb-6 flex-grow line-clamp-3">{{ post.excerpt }}</p>
                        
                        <div class="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                            <span class="text-xs font-semibold text-white uppercase">{{ post.user?.name || 'SysifosWeb' }}</span>
                            <a :href="getPostUrl(post)" class="text-accent text-xs font-semibold hover:text-white transition-colors">
                                Leer artículo
                            </a>
                        </div>
                    </div>
                </article>
            </div>

            <!-- No Results -->
            <div v-else class="text-center py-20 card-border bg-section-surface">
                <span class="text-accent text-4xl mb-4 block">!</span>
                <h3 class="text-lg font-semibold text-white mb-2">No se encontraron artículos</h3>
                <p class="text-sm text-muted">Ajusta los parámetros de búsqueda o cambia la categoría.</p>
            </div>

            <!-- Pagination Laravel -->
            <div v-if="posts && posts.links && posts.links.length > 3" class="flex justify-center mt-12">
                <nav class="flex items-center gap-2">
                    <template v-for="(link, index) in posts.links" :key="index">
                        <a
                            v-if="link.url"
                            :href="link.url"
                            v-html="link.label"
                            :class="[
                                'px-3 py-2 text-sm rounded-md transition-colors duration-200 border',
                                link.active
                                    ? 'bg-accent/10 border-accent text-accent'
                                    : 'bg-section-dark border-white/10 text-muted hover:border-accent/50 hover:text-white'
                            ]"
                        ></a>
                        <span
                            v-else
                            v-html="link.label"
                            class="px-3 py-2 text-sm text-muted border border-white/5 bg-section-dark cursor-not-allowed rounded-md"
                        ></span>
                    </template>
                </nav>
            </div>
        </div>
    </section>

    <NosotrosCtaSection />
  </div>
</template>