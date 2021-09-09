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
            <p>{{ article.title }}</p>

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
