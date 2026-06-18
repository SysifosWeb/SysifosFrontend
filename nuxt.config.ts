// https://nuxt.com/docs/api/configuration/nuxt-config

const GTM_ID = 'GTM-TWB2W6T9';
const GA4_ID = 'G-3BJ0HZ6RSH';

export default defineNuxtConfig({
    routeRules: {
        '/**': { ssr: true }
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    runtimeConfig: {
        public: {
            apiUrl: '/api/',
            tinymceApiKey: process.env.NUXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        'nuxt-gtag',
    ],

    gtag: {
        id: 'G-3BJ0HZ6RSH'
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
            titleTemplate: '%s | SysifosWeb',
            meta: [
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#1e40af' },
                { name: 'author', content: 'Sysifos Web' },
                { property: 'og:site_name', content: 'Sysifos Web' },
                { property: 'og:locale', content: 'es_CL' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/logo_min.ico' },
                { rel: 'alternate', href: 'https://www.sysifosweb.cl', hreflang: 'es-CL' },
                { rel: 'alternate', href: 'https://www.sysifosweb.cl', hreflang: 'es' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'alternate', type: 'application/rss+xml', title: 'SysifosWeb Blog RSS', href: '/blog/feed.xml' },
            ],
            script: [
                // Google Tag Manager — debe ir lo más arriba posible en <head>
                {
                    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
                    type: 'text/javascript'
                },
            ],
            // GTM noscript fallback (funciona en <head> también)
            noscript: [
                {
                    innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }
            ]
        }
    },

    googleFonts: {
        families: {
            Inter: [300, 400, 500, 600, 700, 800, 900],
            Poppins: [300, 400, 500, 600, 700, 800, 900]
        },
        display: 'swap'
    },

    css: ['~/assets/css/main.css'],

    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config.js'
    },

    // Configuración de Sitemap
    site: {
        url: 'https://www.sysifosweb.cl'
    },
    sitemap: {
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
        ]
    },
})

