<template>
    <div class="agency container">
        <header>
            <div class="row">
                <h1 class="column-4 agency__heading">
                    {{ content.heading }}
                </h1>
            </div>
            <div class="row">
                <p class="column-2 paragraph-large">
                    {{ content.ingress }}
                </p>
            </div>
        </header>
        <div class="row">
            <NuxtImg
                class="column graffiti-top"
                src="/images/graffiti.svg"
                quality="100"
                format="webp"
                width="413"
                height="408"
                alt=""
            />
        </div>
        <div class="row">
            <p class="relative column-4">
                {{ content.text }}
            </p>
        </div>
        <section class="row">
            <div class="column">
                <Card>
                    <template #image>
                        <div class="card-image-wrapper">
                            <NuxtImg
                                src="/images/purple-room.png"
                                format="webp"
                                alt=""
                                quality="100"
                                width="790"
                                height="628"
                            />
                        </div>
                    </template>
                    <template #body>
                        <div class="vertical-align-center">
                            <span class="h3">{{ content.guilty.heading }}</span>
                            <p>
                                {{ content.guilty.text }}
                            </p>
                            <a
                                :href="content.guilty.webpageUrl"
                                style="width: auto"
                            >
                                <Button tabindex="-1">Besøk Guilty</Button>
                            </a>
                        </div>
                    </template>
                </Card>
            </div>
        </section>
        <section>
            <div class="row">
                <h2 class="column color-secondary">
                    {{ content.list.heading }}
                </h2>
            </div>
            <ul>
                <li
                    v-for="(item, index) in content.list.items"
                    :key="item.name"
                    class="row"
                >
                    <div class="column-4">
                        <Button
                            button-type="plus"
                            size="large"
                            :color="getColor(index)"
                            class="big-button"
                            @click="
                                () =>
                                    dynamic(item.modalContent, getColor(index))
                            "
                        >
                            {{ item.name }}
                        </Button>
                    </div>
                </li>
            </ul>
        </section>
        <section class="employees">
            <h2 class="sr-only">Employees</h2>
            <div
                v-for="(person, index) in content.team"
                :key="person.name"
                class="row employees__row"
            >
                <div :class="index % 2 === 0 ? 'column' : 'column-2'">
                    <Card :right="index % 2 !== 0">
                        <template #image>
                            <div class="card-image-wrapper">
                                <NuxtImg
                                    :src="person.imagePath"
                                    alt=""
                                    format="webp"
                                    quality="100"
                                    sizes="sm:400px md:100% lg:800px"
                                />
                                <div v-if="index === 1" class="graffiti">
                                    <NuxtImg
                                        src="/images/graffiti_2.svg"
                                        format="webp"
                                        width="379"
                                        quality="100"
                                        height="431"
                                        alt=""
                                    />
                                </div>
                                <div v-if="index === 3" class="graffiti">
                                    <NuxtImg
                                        src="/images/graffiti.svg"
                                        format="webp"
                                        quality="100"
                                        width="413"
                                        height="408"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </template>
                        <template #body>
                            <div class="vertical-align-center">
                                <small>
                                    {{ person.title }}
                                </small>
                                <h3 class="mb-1\/2">
                                    {{ person.name }}
                                </h3>
                                <p>
                                    {{ person.about }}
                                </p>
                                <a
                                    :href="`mailto:${person.email}`"
                                    class="color-primary paragraph-small"
                                >
                                    {{ person.email }}
                                </a>
                                <Button @click="showSendMessageModal">
                                    Be om CV
                                </Button>
                                <div v-if="index === 1" class="graffiti-mobile">
                                    <NuxtImg
                                        src="/images/graffiti_2.svg"
                                        format="webp"
                                        quality="100"
                                        width="379"
                                        :style="{ position: 'relative' }"
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
                                        :style="{ position: 'relative' }"
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

<script>
import SendMessageForm from '~/components/forms/SendMessageForm'
import FormModal from '~/components/modal/FormModal'
import TextModal from '~/components/modal/TextModal'
import { pages } from '~/static/content.json'
export default {
    name: 'Agency',
    data() {
        return {
            content: pages.agency
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
    },
    methods: {
        getColor(i) {
            switch (i) {
                case 0:
                    return 'secondary-dark'
                case 1:
                    return 'primary'
                case 2:
                    return 'primary-dark'
                default:
                    return 'primary'
            }
        },
        dynamic(content, color) {
            this.$vfm.show({
                component: TextModal,
                bind: {
                    content,
                    color
                }
            })
        },
        showSendMessageModal() {
            this.$vfm.show({
                component: FormModal,
                bind: {
                    color: 'primary-dark'
                },
                slots: {
                    default: {
                        component: SendMessageForm
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.agency {
    &__heading {
        margin-top: base(10);
        margin-bottom: base(5);
        @media screen and(max-width: map-get($breakpoints, md)) {
            margin-top: base(5);
        }
    }
}

.big-button {
    margin-bottom: base(2.5);
}
.employees {
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
