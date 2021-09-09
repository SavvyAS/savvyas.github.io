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
        <NuxtImg class="ingress-img" :src="article.img" format="webp" />
        <p class="ingress-text paragraph-large">{{ article.description }}</p>
        <article class="article-content">
            <nuxt-content :document="article" />
        </article>
    </div>
</template>
// TODO fix image size
<style lang="scss" scoped>
.nuxt-content img {
    width: 50%;
}

.article {
    display: grid;
    grid-gap: base(4);
    grid-template-columns: repeat(8, 1fr);

    &__heading {
        grid-column-start: 2;
        grid-column-end: 8;

        margin-top: base(10);
        margin-bottom: base(5);
        @media screen and(max-width: map-get($breakpoints, md)) {
            margin-top: base(5);
        }
    }
}

.ingress-img {
    grid-column-start: 1;
    grid-column-end: 6;
}

.ingress-text {
    grid-column-start: 6;
    grid-column-end: 9;
}

.published-date {
    color: $color-primary;
}

.article-content {
    grid-column-start: 2;
    grid-column-end: 8;
}

// .article {
//         margin-bottom: base(5);
//         @media screen and(max-width: map-get($breakpoints, md)) {
//             margin-top: base(5);
//         }
//     }
// }
</style>
