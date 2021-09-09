<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'short'])
            .sortBy('createdAt', 'desc')
            .fetch()

        return { articles }
    },
    methods: {
        getClass(index) {
            if (index < 2) {
                return 'top-item' + index
            } else {
                return 'item' + ((index - 2) % 3)
            }
        }
    }
}
</script>
<template>
    <div class="newsmain container">
        <section class="articles row">
            <div
                v-for="article in articles"
                :key="article.slug"
                class="article-card"
            >
                <img v-if="article.img" :src="article.img" />

                <div class="">
                    <p class="font-bold text-gray-600 text-sm">
                        {{ article.short || article.title }}
                    </p>
                </div>
                <NuxtLink
                    class="read-more"
                    :to="{
                        name: 'news-slug',
                        params: { slug: article.slug }
                    }"
                >
                    <Button> Read me </Button>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.newsmain {
    flex-direction: row;
    &__heading {
        margin-top: base(10);
        margin-bottom: base(5);
        @media screen and(max-width: map-get($breakpoints, md)) {
            margin-top: base(5);
        }
    }
}

.articles {
    &__row {
        margin-bottom: base(7.5);
    }

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: base(1);

    width: 100%;
}

.articles .article-card:nth-child(n + 3) {
    grid-column: span 2;

    p {
        font-size: base(1.2);
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        grid-column: span 6;
    }
}

.articles .article-card {
    grid-column: span 3;

    p {
        font-size: base(1.6);
    }

    img {
        margin-bottom: base(1);
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        grid-column: span 6;
    }
}

.read-more {
    float: bottom;
}
</style>
