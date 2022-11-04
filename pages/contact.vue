<template>
    <div class="overflow-hidden">
        <div class="container">
            <header>
                <h1 class="sr-only">{{ content.title }}</h1>
                <div class="row">
                    <div class="column grid-layout">
                        <NuxtImg
                            class="grid-layout__image"
                            src="/images/header-image-1.png"
                            alt=""
                            format="webp"
                            width="628"
                            height="790"
                            quality="100"
                        />
                        <p class="paragraph-large grid-layout__ingress">
                            {{ content.text }}
                        </p>
                        <div class="grid-layout__contact">
                            <a :href="`tel:${telephone}`">
                                <h3>{{ telephone }}</h3>
                            </a>
                            <a :href="`mailto:${email}`">
                                <h3>{{ email }}</h3>
                            </a>
                        </div>
                        <address class="grid-layout__address">
                            <h3>{{ address }}</h3>
                            <h3>{{ postal }}</h3>
                        </address>

                        <NuxtImg
                            class="grid-layout__graffiti"
                            src="/images/graffiti_2.svg"
                            format="webp"
                            width="379"
                            height="431"
                            quality="100"
                            alt=""
                        />
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
import { pages, globals } from '~/static/content.json'
export default {
    name: 'Contact',
    data() {
        return {
            content: pages.contact,
            address: globals.footer.address,
            email: globals.footer.email,
            postal: globals.footer.postal,
            telephone: globals.footer.telephone
        }
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
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    display: block;
    height: auto;
}
.grid-layout {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(16, 1fr);

    &__image {
        grid-column: 13 / 25;
        grid-row: 1 / 13;
        @media screen and (max-width: map-get($breakpoints, md)) and (min-width: map-get($breakpoints, sm)) {
            grid-column: 8 / 25;
        }
        @media screen and (max-width: map-get($breakpoints, sm)) {
            grid-column: 6 / 25;
            grid-row: 1 / 12;
            margin-left: 40%;
            min-height: base(22.5);
        }
    }

    &__graffiti {
        transform: scaleX(-1);
        grid-column: 15 / 23;
        grid-row: 10 / 17;
        @media screen and (max-width: map-get($breakpoints, md)) and (min-width: map-get($breakpoints, sm)) {
            grid-column-end: 25;
        }
        @media screen and (max-width: 575px) {
            grid-row: 12 / 17;
            grid-column: 14 / 25;
        }
    }

    &__ingress {
        grid-column: 3 / 25;
        grid-row: 3 / span 5;
        max-width: 40ch;
        @media screen and (max-width: map-get($breakpoints, md)) and (min-width: map-get($breakpoints, sm)) {
            grid-column: 1 / 25;
        }
        @media screen and (max-width: map-get($breakpoints, sm)) {
            grid-row: 2 / 6;
            grid-column: 1 / 25;
        }
    }

    &__contact {
        grid-column: 5 / 13;
        grid-row: 7 / span 3;
        @media screen and (max-width: map-get($breakpoints, xl)) and (min-width: map-get($breakpoints, md)) {
            grid-column: 3 / 13;
        }
        @media screen and (max-width: map-get($breakpoints, md)) and (min-width: map-get($breakpoints, sm)) {
            grid-column: 1 / 13;
            grid-row: 13 / 17;
        }
        @media screen and (max-width: map-get($breakpoints, sm)) {
            grid-row: 6 / 10;
            grid-column: 1 / 25;
        }
    }
    &__address {
        grid-column: 13 / 25;
        grid-row: 7 / span 3;
        @media screen and (max-width: map-get($breakpoints, md)) and (min-width: map-get($breakpoints, sm)) {
            grid-column: 1 / 25;
            grid-row: 9 / 12;
        }
        @media screen and (max-width: map-get($breakpoints, sm)) {
            grid-row: 9 / 12;
            grid-column: 1 / 25;
        }
    }

    // &__address,
    // &__contact {
    //     * {
    //         margin: 0;
    //     }
    // }
}
</style>
