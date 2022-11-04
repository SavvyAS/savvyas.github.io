<template>
    <div class="clients container">
        <header>
            <div class="row">
                <h1 class="column-4 clients__heading">{{ content.heading }}</h1>
            </div>
            <div class="row">
                <p class="column-2 paragraph-large">
                    {{ content.ingress }}
                </p>
            </div>
        </header>
        <section class="clients-list">
            <h2 class="sr-only">Clients</h2>
            <div
                v-for="(client, index) in content.clients"
                :key="client.name"
                class="row clients-list__client"
            >
                <div :class="index % 2 === 0 ? 'column' : 'column-2'">
                    <Card :right="index % 2 !== 0">
                        <template #image>
                            <div class="background">
                                <NuxtImg
                                    :src="client.backgroundPath"
                                    alt=""
                                    format="webp"
                                />
                                <div class="logo">
                                    <NuxtImg
                                        :src="client.logoPath"
                                        :alt="client.name + ' logo'"
                                        format="webp"
                                    />
                                </div>
                            </div>
                        </template>
                        <template #body>
                            <div class="vertical-align-center">
                                <small style="display: block">Kunde</small>

                                <span class="h3">{{ client.name }}</span>

                                <p>{{ client.text }}</p>

                                <a :href="client.websiteUrl">
                                    <Button @click="modal = true">
                                        Besøk {{ client.name }}
                                    </Button>
                                </a>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { pages } from '~/static/content.json'
export default {
    name: 'Clients',
    data() {
        return {
            content: pages.clients
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
.clients {
    &__heading {
        margin-top: base(10);
        margin-bottom: base(5);
        @media screen and(max-width: map-get($breakpoints, md)) {
            margin-top: base(5);
        }
    }
}

.clients-list {
    &__client {
        margin-bottom: base(7.5);
    }

    h3 {
        margin-bottom: base(1.5);
    }
}
.background {
    position: relative;
}

.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
