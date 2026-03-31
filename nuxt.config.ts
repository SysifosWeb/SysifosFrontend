// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    runtimeConfig: {
        // Variables privadas (solo servidor)
        // apiSecret: '',

        // Variables públicas (cliente y servidor)
        public: {
            apiUrl: 'https://www.sysifosweb.cl/api/'
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        'nuxt-gtag',
        ['@zadigetvoltaire/nuxt-gtm', {
            id: 'GTM-TWB2W6T9'
        }]
    ],
    gtag: {
        id: 'G-3BJ0HZ6RSH'
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'es'
            },
            titleTemplate: '%s | SysifosWeb',
            meta: [
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#1e40af' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/logo_min.ico' }
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
        url: 'https://sysifosweb.cl'
    },
})

