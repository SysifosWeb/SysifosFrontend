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
</script>

<template>
  <div class="bg-[#0a0e17] min-h-screen">
    <Head>
      <Title>Blog - Artículos sobre Desarrollo Web | SysifosWeb</Title>
      <Meta name="description" content="Lee nuestros artículos sobre desarrollo web, programación y tecnología." />
    </Head>

    <BlogHeroSection />

    <!-- Search and Filters -->
    <section class="py-8 bg-[#0a0e17] border-b border-white/5 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <!-- Search Bar -->
                <div class="relative flex-1 max-w-md w-full">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-[#00f2ff] font-mono">></span>
                    </div>
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="BUSCAR_REGISTRO..."
                        class="block w-full pl-8 pr-3 py-3 bg-[#0c121e] border border-white/10 text-white font-mono text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap gap-2 justify-center lg:justify-end">
                    <button
                        v-for="category in allCategories"
                        :key="category.id"
                        @click="setCategory(category.id)"
                        :class="[
                            'px-4 py-2 text-[15px] font-mono tracking-widest transition-all duration-300 border uppercase',
                            selectedCategory === category.id
                                ? 'bg-[#00f2ff]/10 border-[#00f2ff] text-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.2)]'
                                : 'bg-[#0c121e] border-white/10 text-gray-300 hover:border-[#00f2ff]/50 hover:text-gray-300'
                        ]"
                    >
                        {{ category.name }} [{{ category.count }}]
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Article -->
    <section v-if="featuredPost && selectedCategory === 'all' && !searchQuery" class="py-16 bg-[#0a0e17] relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10 flex items-center gap-4">
                <span class="text-[#00f2ff] font-mono text-[14px] uppercase">> ENTRY_DESTACADO</span>
                <div class="flex-grow h-[1px] bg-gradient-to-r from-[#00f2ff]/30 to-transparent"></div>
            </div>

            <div class="bg-[#0c121e] border border-white/5 relative group overflow-hidden shadow-2xl">
                <div class="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    <div class="order-2 lg:order-1 relative z-10">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="border border-[#00f2ff]/30 bg-[#00f2ff]/10 text-[#00f2ff] px-2 py-1 text-[14px] font-mono tracking-widest">
                                ROOT_ACCESS
                            </span>
                            <span class="text-gray-300 font-mono text-[14px] uppercase">{{ formatDate(featuredPost.published_at || featuredPost.created_at) }}</span>
                        </div>
                        <h3 class="text-3xl lg:text-4xl font-bold font-sans text-white mb-4 leading-tight">{{ featuredPost.title }}</h3>
                        <p class="text-gray-300 font-mono text-[15px] mb-8 leading-relaxed">{{ featuredPost.excerpt }}</p>
                        <div class="flex items-center justify-between border-t border-white/5 pt-6">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 border border-white/10 flex items-center justify-center bg-black">
                                    <span class="text-white font-mono text-[14px]">{{ featuredPost.user?.name ? featuredPost.user.name.split(' ').map(n => n[0]).join('') : 'SYS' }}</span>
                                </div>
                                <div>
                                    <p class="font-mono text-[15px] text-gray-300 uppercase">{{ featuredPost.user?.name || 'SYS_ADMIN' }}</p>
                                    <p class="text-gray-300 font-mono text-[15px] uppercase">{{ featuredPost.reading_time || '5 MIN' }}</p>
                                </div>
                            </div>
                            <a :href="getPostUrl(featuredPost)" class="text-[#00f2ff] font-mono text-[15px] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                LEER_REGISTRO >
                            </a>
                        </div>
                    </div>
                    <div class="order-1 lg:order-2 relative h-full min-h-[300px]">
                        <img :src="getImageUrl(featuredPost)" :alt="featuredPost.title" class="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div class="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[#0c121e] via-transparent to-transparent lg:block hidden"></div>
                        <div class="absolute top-4 right-4">
                            <span v-if="featuredPost.category" class="bg-[#0c121e]/80 border border-white/10 text-gray-300 px-2 py-1 text-[15px] font-mono uppercase backdrop-blur-md">
                                {{ featuredPost.category.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 bg-[#0a0e17] relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between mb-12 border-b border-white/5 pb-4">
                <h2 class="text-xl font-bold text-white uppercase tracking-widest font-sans">
                    {{ selectedCategory === 'all' ? 'Logs Recientes' : allCategories.find(c => c.id === selectedCategory)?.name }}
                </h2>
                <p class="text-[#00f2ff] font-mono text-[14px] uppercase">
                    [{{ filteredPosts.length }}] REGISTROS
                </p>
            </div>

            <!-- Articles Grid -->
            <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <article
                    v-for="post in filteredPosts"
                    :key="post.id"
                    class="bg-[#0c121e] border border-white/5 overflow-hidden hover:border-[#00f2ff]/30 hover:shadow-[0_0_20px_rgba(0,242,255,0.1)] transition-all duration-500 group flex flex-col h-full"
                >
                    <div class="relative h-48 bg-black overflow-hidden border-b border-white/5">
                        <img :src="getImageUrl(post)" :alt="post.title" class="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                        <div class="absolute top-2 left-2 z-10">
                            <span class="bg-[#0c121e]/80 border border-[#00f2ff]/20 text-[#00f2ff] px-2 py-1 text-[15px] font-mono uppercase backdrop-blur-sm">
                                {{ post.category?.name || 'GENERAL' }}
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <div class="flex items-center gap-2 text-[14px] font-mono text-gray-300 mb-4 uppercase">
                            <span>{{ formatDate(post.published_at || post.created_at) }}</span>
                            <span class="text-[#00f2ff]">//</span>
                            <span>{{ post.reading_time || '5 MIN' }}</span>
                        </div>
                        <h3 class="text-lg font-bold font-sans text-white mb-3 group-hover:text-[#00f2ff] transition-colors duration-200">
                            <a :href="getPostUrl(post)">{{ post.title }}</a>
                        </h3>
                        <p class="text-gray-300 font-mono text-[14px] mb-6 flex-grow leading-relaxed line-clamp-3">{{ post.excerpt }}</p>
                        
                        <div class="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
                            <div class="flex items-center gap-2">
                                <span class="text-[15px] text-gray-300 font-mono uppercase">{{ post.user?.name || 'SYS_ADMIN' }}</span>
                            </div>
                            <a :href="getPostUrl(post)" class="text-[#00f2ff] font-mono text-[14px] uppercase hover:text-white transition-colors flex items-center gap-1">
                                LEER >
                            </a>
                        </div>
                    </div>
                </article>
            </div>

            <!-- No Results -->
            <div v-else class="text-center py-20 border border-dashed border-white/10 bg-[#0c121e]/50">
                <span class="text-[#00f2ff] font-mono text-4xl mb-4 block">!</span>
                <h3 class="text-[14px] font-mono text-gray-300 mb-2 uppercase tracking-widest">ERR: NO_RECORDS_FOUND</h3>
                <p class="text-gray-300 font-mono text-[15px]">Ajusta los parámetros de búsqueda o cambia la categoría.</p>
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
                                'px-3 py-2 text-[15px] font-mono transition-colors duration-200 border uppercase',
                                link.active
                                    ? 'bg-[#00f2ff]/10 border-[#00f2ff] text-[#00f2ff]'
                                    : 'bg-[#0c121e] border-white/10 text-gray-300 hover:border-[#00f2ff]/50 hover:text-gray-300'
                            ]"
                        ></a>
                        <span
                            v-else
                            v-html="link.label"
                            class="px-3 py-2 text-[15px] font-mono text-gray-300 border border-white/5 bg-[#0a0e17] cursor-not-allowed uppercase"
                        ></span>
                    </template>
                </nav>
            </div>
        </div>
    </section>

    <NosotrosCtaSection />
  </div>
</template>