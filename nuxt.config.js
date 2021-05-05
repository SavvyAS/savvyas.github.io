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
            { hid: 'description', name: 'description', content: '' }
        ]
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
    modules: ['@nuxtjs/style-resources'],

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
    }
}
