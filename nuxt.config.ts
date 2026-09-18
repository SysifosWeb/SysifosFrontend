// https://nuxt.com/docs/api/configuration/nuxt-config

const GTM_ID = 'GTM-TWB2W6T9';
const GA4_ID = 'G-3BJ0HZ6RSH';

export default defineNuxtConfig({
    build: {
        transpile: []
    },
    image: {
        domains: ['olimpo.sysifosweb.cl', 'picsum.photos'],
        format: ['webp', 'avif'],
        screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280 }
    },
    experimental: {
        payloadExtraction: true,
        renderJsonPayloads: true,
        componentIslands: true
    },
    routeRules: {
        '/': { prerender: true },
        '/servicios': { prerender: true },
        '/nosotros': { prerender: true },
        '/portfolio': { prerender: true },
        '/contacto': { prerender: true },
        // Blog es contenido dinámico servido por la API: renderizado SSR sin caché
        // para que los posts nuevos aparezcan de inmediato y no se sirvan payloads
        // vacíos cacheados durante una hora.
        '/blog': { ssr: true },
        '/blog/**': { ssr: true },
        '/admin/**': { ssr: true }
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    runtimeConfig: {
        public: {
            apiUrl: '/api/',
            tinymceApiKey: process.env.NUXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'
        }
    },

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxtjs/sitemap', 'nuxt-gtag', 'nuxt-security'],
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

    gtag: {
        id: 'G-3BJ0HZ6RSH',
        loadingStrategy: 'defer',
        config: { anonymize_ip: true },
        // Google Consent Mode v2: estado por defecto denegado hasta que el
        // usuario otorgue su consentimiento desde el banner de cookies.
        initCommands: [
            ['consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
            }]
        ]
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'page', mode: 'out-in' },
        head: {
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
                { rel: 'icon', type: 'image/x-icon', href: '/logo_min.ico' },
                { rel: 'alternate', href: 'https://sysifosweb.cl', hreflang: 'es-CL' },
                { rel: 'alternate', href: 'https://sysifosweb.cl', hreflang: 'es' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
                { rel: 'alternate', type: 'application/rss+xml', title: 'SysifosWeb Blog RSS', href: '/blog/feed.xml' },
            ]
        }
    },

    googleFonts: {
        families: {
            Inter: [400, 600, 700],
            Poppins: [400, 600, 700]
        },
        display: 'swap',
        preload: true,
        subsets: ['latin']
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
        // Fuente dinámica: Nitro consulta este endpoint para obtener las URLs de artículos
        sources: ['/__sitemap__/urls'],
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