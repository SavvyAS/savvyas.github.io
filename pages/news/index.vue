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

                <div class="title">
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
    grid-template-columns: repeat(15, 1fr);
    gap: base(1);
    row-gap: base(2);

    width: 100%;
}

.articles .article-card:nth-child(n + 3) {
    grid-column: span 5;
    padding-bottom: base(1);
    p {
        font-size: base(1.2);
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        grid-column: span 15;
    }
}

.articles .article-card {
    grid-column: span 7;
    display: flex;
    flex-direction: column;

    padding-bottom: base(4);

    p {
        font-size: base(1.6);
    }

    img {
        margin-bottom: base(1);
    }

    .title {
        flex: 1;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        grid-column: span 15;
    }
}

.articles .article-card:nth-child(2) {
    grid-column-start: 9;
    grid-column-end: span 7;

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        grid-column: span 15;
    }
}

.read-more {
    float: bottom;
}
</style>
