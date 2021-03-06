module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'prettier/prettier': 'error',
        'vue/no-v-for-template-key': 0
    }
}
