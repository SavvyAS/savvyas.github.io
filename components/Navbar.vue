<template>
    <nav class="navbar">
        <div class="container">
            <div class="column">
                <div class="navbar__inner">
                    <div class="navbar__logo">
                        <NuxtLink to="/">
                            <div>
                                <img
                                    class="logo"
                                    src="~/assets/images/savvy-logo.svg"
                                    alt="Savvy logo"
                                    width="105"
                                    height="35"
                                />
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="navbar__links">
                        <div class="link-wrapper">
                            <NuxtLink to="/clients">
                                <span>Clients</span>
                            </NuxtLink>
                            <div class="link-body">
                                <img
                                    src="~/assets/images/active-link.svg"
                                    alt=""
                                    width="140"
                                    height="42"
                                />
                            </div>
                        </div>
                        <div class="link-wrapper">
                            <NuxtLink to="/agency">
                                <span>Agency</span>
                            </NuxtLink>
                            <div class="link-body">
                                <img
                                    src="~/assets/images/active-link.svg"
                                    alt=""
                                    width="140"
                                    height="42"
                                />
                            </div>
                        </div>
                        <div class="link-wrapper">
                            <NuxtLink to="/news/">
                                <span>News</span>
                            </NuxtLink>
                            <div class="link-body">
                                <img
                                    src="~/assets/images/active-link.svg"
                                    alt=""
                                    width="140"
                                    height="42"
                                />
                            </div>
                        </div>
                        <div class="link-wrapper">
                            <NuxtLink to="/contact">
                                <span>Contact</span>
                            </NuxtLink>
                            <div class="link-body">
                                <img
                                    src="~/assets/images/active-link.svg"
                                    alt=""
                                    width="140"
                                    height="42"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        class="navbar__mobile-button"
                        aria-label="Open menu"
                        @click="openMegaMenu"
                    >
                        <i class="far fa-equals faw" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import MobileMegaMenu from '~/components/modal/MobileMegaMenu'
// const { pages } = require('~/static/content.json')

export default {
    name: 'Navbar',
    methods: {
        openMegaMenu() {
            this.$vfm.show({
                component: MobileMegaMenu
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.link-wrapper {
    position: relative;
    display: grid;
    place-items: center;
    .link-body {
        visibility: hidden;
        position: absolute;
        width: base(7);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    a.nuxt-link-active ~ .link-body {
        visibility: visible;
    }
    a {
        position: relative;
        z-index: 2;
    }

    a:not(.nuxt-link-active) {
        &:hover {
            color: $color-primary;
        }
    }
}

.navbar {
    position: relative;
    padding-top: base(1.5);
    padding-bottom: base(1.5);

    a {
        font-size: base(0.9);
        color: inherit;
        text-decoration: none;
        font-weight: bold;
    }

    &__inner {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: baseline;
        @media screen and (max-width: map-get($breakpoints, md)) {
            align-items: center;
        }
        width: 100%;
    }
    &__logo {
        width: base(5.5);
    }
    &__links {
        gap: base(3);
        grid-auto-flow: column;
        display: none;
    }

    &__mobile-button {
        border: 1px solid $color-secondary;
        border-radius: 50%;
        width: base(2);
        height: base(2);
        display: grid;
        place-items: center;
        background: transparent;
        color: $color-secondary;
    }

    @media screen and (min-width: map-get($breakpoints, 'md')) {
        padding-top: base(3);
        padding-bottom: base(3);
        &__mobile-button {
            display: none;
        }
        &__links {
            display: grid;
        }
    }
}
</style>
