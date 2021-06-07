export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'savvy',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' },
            {
                hid: 'og:title',
                name: 'og:title',
                content:
                    'Savvy | Konsulentselskap med fokus på folk og nyskapning'
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content:
                    'Vi er Savvy, et konsulentselskap som ønsker å samle de triveligste og flinkeste teknologene, hvor fokuset skal være på de ansatte og innovasjon.'
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content: '/images/savvy_og.png'
            },
            {
                hid: 'og:image:alt',
                name: 'og:image:alt',
                content: 'Savvy'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/_container.scss',
        '~/assets/css/_global.scss',
        '~/assets/css/_typography.scss',
        '~/assets/css/_utilities.scss',
        '@fortawesome/fontawesome-pro/css/all.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vue-final-modal.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxt/image'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-analytics',
        '@nuxtjs/gtm'
    ],
    // style resources
    styleResources: {
        scss: ['~/assets/css/_variables.scss', '~/assets/css/_mixins.scss']
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vue-final-modal'],
        vendor: ['vue-marquee-text-component']
    },
    image: {
        // nuxt-img Options
        provider: 'static',
        screens: {
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    },
    googleAnalytics: {
        id: 'GTM-NCL695S'
    },
    gtm: {
        id: 'GTM-NCL695S'
    }
}
