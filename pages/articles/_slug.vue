<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()
        return { article }
    }
}
</script>
<template>
    <div class="article container">
        <article>
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>

            <nuxt-content :document="article" />

            <author :author="article.author" />
        </article>
    </div>
</template>
// TODO fix image size
<style lang="scss" scoped>
.nuxt-content img {
    width: 50%;
}
</style>
