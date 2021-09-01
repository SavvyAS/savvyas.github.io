<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles')
            .only(['title', 'description', 'img', 'slug', 'author'])
            .sortBy('createdAt', 'desc')
            .fetch()

        return { articles }
    }
}
</script>
<template>
    <div class="blogmain container">
        <header>
            <div class="row">
                <h1 class="column-4 blogmain__heading">Blog posts</h1>
            </div>
        </header>
        <section class="articles">
            <div
                v-for="(article, index) in articles"
                :key="article.slug"
                class="row articles__row"
            >
                <div :class="index % 2 === 0 ? 'column' : 'column-2'">
                    <Card :right="index % 2 !== 0">
                        <template #image>
                            <div class="card-image-wrapper">
                                <NuxtImg
                                    :src="article.img"
                                    alt=""
                                    format="webp"
                                    quality="100"
                                    sizes="sm:400px md:100% lg:800px"
                                />
                            </div>
                        </template>
                        <template #body>
                            <div class="vertical-align-center">
                                <h3 class="mb-1\/2">
                                    <NuxtLink
                                        :to="{
                                            name: 'articles-slug',
                                            params: { slug: article.slug }
                                        }"
                                    >
                                        {{ article.title }}
                                    </NuxtLink>
                                </h3>
                                <p>
                                    {{ article.description }}
                                </p>
                                <div v-if="index === 1" class="graffiti-mobile">
                                    <NuxtImg
                                        src="/images/graffiti_2.svg"
                                        format="webp"
                                        quality="100"
                                        width="379"
                                        :style="{
                                            position: 'relative'
                                        }"
                                        height="431"
                                        alt=""
                                    />
                                </div>
                                <div v-if="index === 3" class="graffiti-mobile">
                                    <NuxtImg
                                        src="/images/graffiti.svg"
                                        format="webp"
                                        width="413"
                                        quality="100"
                                        height="408"
                                        :style="{
                                            position: 'relative'
                                        }"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.blogmain {
    &__heading {
        margin-top: base(10);
        margin-bottom: base(5);
        @media screen and(max-width: map-get($breakpoints, md)) {
            margin-top: base(5);
        }
    }
}
.graffiti-top {
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    max-width: base(21);
    margin-top: base(3);
    margin-bottom: -#{base(5)};
    transform: scaleX(-1);
    @media screen and (max-width: map-get($breakpoints, 'lg')) {
        margin-bottom: base(3);
    }
}
.big-button {
    margin-bottom: base(2.5);
}
.articles {
    &__row {
        margin-bottom: base(7.5);
    }
}
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
.card-image-wrapper {
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .graffiti {
        position: absolute;
        z-index: 1;
        width: 60%;
        bottom: 0;
        left: 0;
        transform: translate(-30%, 60%) scaleX(-1);
        img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: map-get($breakpoints, md)) {
            display: none;
        }
    }
}
.graffiti-mobile {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: base(2);
    img {
        width: 100%;
    }
    @media screen and (min-width: map-get($breakpoints, md)) {
        display: none;
    }
}
</style>
