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
        <header class="article__heading">
            <h1>{{ article.title }}</h1>
            <small class="published-date">
                Published
                {{ new Date(article.createdAt).toDateString() }}</small
            >
        </header>
        <article>
            <div class="ingress">
                <NuxtImg :src="article.img" format="webp" />
                <p class="paragraph-large">{{ article.description }}</p>
            </div>

            <div class="article-content">
                <nuxt-content :document="article" />
            </div>
        </article>
    </div>
</template>
// TODO fix image size
<style lang="scss" scoped>
.nuxt-content img {
    width: 50%;
}

.article {
    &__heading {
        width: 80%;
        padding: 10%;
    }
}

.ingress {
    display: grid;
    grid-gap: base(4);
    grid-template-columns: 3fr 2fr;
}

.published-date {
    color: $color-primary;
}

.article-content {
    width: 80%;
    padding: 10%;
}

// .article {
//     display: grid;
//     grid-template-columns: repeat(6, 1fr);
//     grid-gap: base(1);

//     &__heading {
//         grid-column: span 6;
//         margin-top: base(10);
//         margin-bottom: base(5);
//         @media screen and(max-width: map-get($breakpoints, md)) {
//             margin-top: base(5);
//         }
//     }
// }
</style>
