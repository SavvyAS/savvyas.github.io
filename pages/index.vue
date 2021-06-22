<!-- eslint-disable vue/no-v-for-template-key-on-child -->
<template>
    <div>
        <header>
            <HalfImageLayout>
                <template #image>
                    <NuxtImg
                        ref="image"
                        src="/images/header-image-1.png"
                        format="webp"
                        width="628"
                        height="790"
                        quality="100"
                        sizes="sm:300px lg:600px"
                        alt=""
                    />
                </template>
                <template #default>
                    <div class="row">
                        <div class="column-2">
                            <div class="header-text">
                                <h1 style="display: none; opacity: 0">
                                    {{ content.heading }}
                                </h1>
                                <AnimatedHeading />
                                <NuxtLink to="/agency">
                                    <Button tabindex="-1">The agency</Button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <NuxtImg
                        class="graffiti-1"
                        src="/images/graffiti.svg"
                        format="webp"
                        width="413"
                        quality="100"
                        height="408"
                        alt=""
                    />
                </template>
            </HalfImageLayout>
        </header>
        <div class="container">
            <div class="row">
                <p class="column-2 paragraph-large ingress">
                    {{ content.ingress }}
                </p>
            </div>
        </div>

        <section>
            <HalfImageLayout>
                <template #image>
                    <NuxtImg
                        src="/images/header-image-2.png"
                        format="webp"
                        width="628"
                        height="790"
                        sizes="sm:300px lg:600px"
                        alt=""
                    />
                </template>
                <template #default>
                    <div
                        style="display: grid; align-content: end; height: 100%"
                    >
                        <div style="height: 130px">
                            <div class="relative">
                                <div class="marquee marquee--slow">
                                    <div class="marquee__track">
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="height: 130px">
                            <div class="relative">
                                <div
                                    class="marquee marquee--reverse marquee--primary"
                                >
                                    <div class="marquee__track">
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="height: 130px">
                            <div class="relative">
                                <div
                                    class="marquee marquee--fast marquee marquee--primary-dark"
                                >
                                    <div class="marquee__track">
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                        <span class="marquee__content">{{
                                            competenceString
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </HalfImageLayout>
        </section>
        <section>
            <h2 class="sr-only">Clients</h2>
            <HorizontalScrollContainer>
                <div
                    v-for="(client, index) in content.clients"
                    :key="client.name"
                    class="client-card"
                    :class="{ 'client-card--reverse': index % 2 !== 0 }"
                >
                    <div class="client-card__figure">
                        <NuxtImg
                            class="client-card__background"
                            format="webp"
                            :src="client.backgroundPath"
                            quality="100"
                            width="520"
                            height="660"
                            alt=""
                        />
                        <img
                            class="client-card__logo"
                            loading="lazy"
                            :src="client.logoPath"
                            :alt="client.name + ' logo'"
                        />
                    </div>
                    <div class="client-card__body">
                        <p>Client</p>
                        <span class="h3">{{ client.name }}</span>
                    </div>
                </div>
            </HorizontalScrollContainer>
            <NuxtImg
                class="graffiti-2"
                src="/images/graffiti_2.svg"
                format="webp"
                quality="100"
                width="379"
                height="431"
                alt=""
            />
        </section>
    </div>
</template>

<script>
import HalfImageLayout from '~/layouts/HalfImageLayout'
const { pages } = require('~/static/content.json')
export default {
    name: 'Index',
    components: {
        HalfImageLayout
    },
    data() {
        return {}
    },
    head() {
        return {
            title: this.content.metaTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.content.metaDescription
                }
            ]
        }
    },
    computed: {
        content() {
            return pages.home
        },
        competence() {
            return pages.home.competence
        },
        competenceString() {
            return this.competence.map((x) => x + ' // ').join('')
        }
    },
    mounted() {}
}
</script>

<style lang="scss" scoped>
.marquee {
    height: 100px;
    width: 100vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.marquee__track {
    height: 100%;
    width: max-content;
    display: grid;
    grid-auto-flow: column;
}

.marquee__content {
    width: max-content;
    height: 100%;
    font-size: base(3.6);
    color: $color-secondary-dark;
    animation: marquee 25s linear infinite;
    padding: 0 10px;
}

.marquee--reverse {
    .marquee__content {
        animation: marqueeboo 15s linear infinite;
    }
}

.marquee--primary {
    .marquee__content {
        color: $color-primary;
    }
}
.marquee--primary-dark {
    .marquee__content {
        color: $color-primary-dark;
    }
}

.marquee--slow {
    .marquee__content {
        animation-duration: 30s !important;
    }
}
.marquee--fast {
    .marquee__content {
        animation-duration: 20s !important;
    }
}
@keyframes marquee {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}
@keyframes marqueeboo {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.graffiti-2 {
    max-width: base(19);
    margin: auto;
    margin-top: -#{base(9)};
    position: relative;

    @media screen and (max-width: map-get($breakpoints, md)) {
        max-width: base(9);
        margin-top: 0;
    }
}

.double-slash {
    height: 1em;
    width: 0.75em;
    display: inline-block;
    position: relative;
    &:before {
        left: 0.5em;
    }
    &:after {
        left: 0.3em;
    }

    &:after,
    &:before {
        content: '';
        position: absolute;
        border: 1px solid currentColor;
        height: 100%;
        top: 0.2em;
        transform: rotate(30deg);
    }
}

.client-card {
    display: grid;
    row-gap: base();

    max-width: base(20);

    @media screen and (min-width: map-get($breakpoints, md)) {
        max-width: base(26);
    }

    p {
        margin-bottom: base(0.5);
    }
    h3 {
        margin: 0;
        margin-bottom: base(1.5);
    }

    &--reverse {
        @media screen and (min-width: map-get($breakpoints, md)) {
            .client-card__figure {
                grid-row-start: 2;
            }
            .client-card__body {
                grid-row-start: 1;
                display: grid;
                align-content: end;
                padding-top: base(7.5);
            }
        }
    }

    &:not(.client-card--reverse) {
        .client-card__body {
            @media screen and (min-width: map-get($breakpoints, md)) {
                padding-bottom: base(7.5);
            }
        }
    }
    &__figure {
        position: relative;
        width: 100%;
    }

    &__background {
        position: relative;
        display: block;
        width: 100%;
    }

    &__logo {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 80%;
        transform: translate(-50%, -50%);
        max-width: clamp(#{base(5)}, 50%, #{base(15)});
        max-height: base(10);
        object-fit: contain;
    }
}

.overflow-text-container {
    width: 100vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 10;
    overflow: hidden;
}

.overflow-text-item {
    white-space: nowrap;
    margin: 0;
    text-indent: -50%;
    font-size: base(3.6);
    color: $color-primary;
    display: block;
    @media screen and (max-width: map-get($breakpoints, md)) {
        font-size: base(2.5);
    }

    &:not(:first-of-type) {
        margin-top: 0.5em;
    }
    &:first-of-type {
        text-indent: -150%;
        color: $color-secondary-dark;
    }
    &:last-of-type {
        text-indent: -100%;
        color: $color-primary-dark;
        margin-bottom: 0.5em;
    }
}

.ingress {
    margin-top: base(15);
    @media screen and (max-width: map-get($breakpoints, sm)) {
        margin-top: base(10);
    }
}

.header-text {
    margin-top: base(11);
    @media screen and (max-width: map-get($breakpoints, xl)) {
        margin-top: base(5);
    }
}

.graffiti-1 {
    position: absolute;
    max-width: clamp(#{base(7)}, 40%, #{base(20)});
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
