// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    features: { inlineStyles: true },
    build: {
        transpile: []
    },
    nitro: {
        compressPublicAssets: true,
        externals: {
            // Bundle head rendering with the server: multiple installed unhead versions
            // otherwise produce an external link to the wrong version in Nitro output.
            inline: ['vuedraggable', 'sortablejs', 'unhead', '@unhead/vue']
        }
    },
    image: {
        domains: ['olimpo.sysifosweb.cl', 'picsum.photos'],
        format: ['webp', 'avif'],
        screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280 }
    },
    experimental: {
        payloadExtraction: true,
        renderJsonPayloads: true,
        componentIslands: false,
        defaults: { nuxtLink: { prefetchOn: { interaction: true, visibility: false } } }
    },
    routeRules: {
        '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=604800' } },
        '/img/brand/**': { headers: { 'Cache-Control': 'public, max-age=604800' } },
        '/': { prerender: true, noScripts: true },
        '/servicios': { prerender: true },
        '/nosotros': { prerender: true },
        '/portfolio': { prerender: true },
        '/contacto': { prerender: true },
        // Blog es contenido dinámico servido por la API: renderizado SSR sin caché
        // para que los posts nuevos aparezcan de inmediato y no se sirvan payloads
        // vacíos cacheados durante una hora.
        '/blog': { ssr: true },
        '/blog/**': { ssr: true },
        '/admin': { ssr: true, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
        '/admin/**': { ssr: true, headers: { 'X-Robots-Tag': 'noindex, nofollow' } }
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    runtimeConfig: {
        apiBase: 'https://olimpo.sysifosweb.cl/api/',
        public: {
            apiUrl: '/api/',
            tinymceApiKey: process.env.NUXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'
        }
    },

    // NUXT_API selecciona el backend de desarrollo; producción conserva la API remota.
    // NUXT_API_BASE permite sobrescribir runtimeConfig.apiBase al ejecutar el servidor.
    $development: {
        runtimeConfig: {
            apiBase: process.env.NUXT_API || 'http://127.0.0.1:8000/api/'
        }
    },

    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap', 'nuxt-security'],
    security: {
        headers: {
            contentSecurityPolicy: {
                'default-src': ["'self'"],
                'script-src': [
                    "'self'",
                    "'unsafe-inline'",
                    "'unsafe-eval'",
                    "https://www.googletagmanager.com",
                    "https://*.googletagmanager.com",
                    "https://*.google-analytics.com",
                    "https://*.doubleclick.net",
                    "https://*.google.com"
                ],
                'style-src': [
                    "'self'",
                    "'unsafe-inline'",
                    "https://fonts.googleapis.com"
                ],
                'img-src': [
                    "'self'",
                    "data:",
                    "https://www.googletagmanager.com",
                    "https://*.google-analytics.com",
                    "https://*.googletagmanager.com",
                    "https://*.doubleclick.net",
                    "https://*.google.com",
                    "https://pagead2.googlesyndication.com",
                    "https://*.google.cl",
                    "https://olimpo.sysifosweb.cl",
                    "https://*.picsum.photos",
                    "https://picsum.photos"
                ],
                'font-src': [
                    "'self'",
                    "https://fonts.gstatic.com",
                    "data:"
                ],
                'connect-src': [
                    "'self'",
                    "https://*.google-analytics.com",
                    "https://*.googletagmanager.com",
                    "https://*.doubleclick.net",
                    "https://*.google.com",
                    "https://pagead2.googlesyndication.com",
                    "https://olimpo.sysifosweb.cl"
                ],
                'frame-src': [
                    "'self'",
                    "https://*.doubleclick.net",
                    "https://*.google.com"
                ],
                'script-src-attr': ["'unsafe-inline'"]
            },
            crossOriginEmbedderPolicy: 'unsafe-none'
        }
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'page', mode: 'out-in' },
        head: {
            script: [{ src: '/consent.js', defer: true }],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'es'
            },
            titleTemplate: '%s',
            meta: [
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#1e40af' },
                { name: 'author', content: 'Sysifos Web' },
                { property: 'og:site_name', content: 'Sysifos Web' },
                { property: 'og:locale', content: 'es_CL' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/img/brand/mark.svg' },
                { rel: 'alternate', type: 'application/rss+xml', title: 'SysifosWeb Blog RSS', href: '/blog/feed.xml' },
            ],
            // Progressive enhancement: si JS no está disponible, el contenido
            // animado con v-reveal nunca debe quedar oculto.
            noscript: [
                { innerHTML: '<style>.reveal-item{opacity:1 !important;transform:none !important}</style>' }
            ]
        }
    },


    css: ['~/assets/css/main.css'],

    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config.js'
    },

    // Configuración de Sitemap
    site: {
        url: 'https://sysifosweb.cl'
    },
    sitemap: {
        cacheMaxAgeSeconds: 0, // Desactivar caché para ver URLs nuevas al instante
        // La fuente del blog se resuelve en server/plugins/blog-sitemap.ts para propagar fallos de la API.
        exclude: ['/admin/**'],
        // Prioridades por tipo de ruta
        urls: [
            { loc: '/', priority: 1.0, changefreq: 'weekly' },
            { loc: '/servicios', priority: 0.9, changefreq: 'monthly' },
            { loc: '/nosotros', priority: 0.7, changefreq: 'monthly' },
            { loc: '/portfolio', priority: 0.7, changefreq: 'monthly' },
            { loc: '/contacto', priority: 0.8, changefreq: 'monthly' },
            { loc: '/blog', priority: 0.9, changefreq: 'daily' },
            { loc: '/sinapsys', priority: 0.8, changefreq: 'monthly' },
            { loc: '/privacidad', priority: 0.3, changefreq: 'yearly' },
        ]
    },
})
