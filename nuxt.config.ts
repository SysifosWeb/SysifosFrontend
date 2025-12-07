// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/image'
    ],

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'es'
            }
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
    }
})
