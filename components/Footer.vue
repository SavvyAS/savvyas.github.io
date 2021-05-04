<template>
    <footer class="container">
        <div class="row">
            <div class="column footer__cta">
                <h3
                    v-if="$route.name === 'agency' || $route.name === 'contact'"
                    class="color-secondary"
                >
                    Want to be part of our team?
                </h3>
                <h3 v-else class="color-secondary">
                    Want to collaborate with us?
                </h3>

                <Button
                    v-if="$route.name === 'agency'"
                    @click="openUploadCVModal"
                >
                    Send your CV
                </Button>
                <Button v-else @click="openSendMessageModal">Contact us</Button>
            </div>
        </div>
        <div class="row">
            <div class="column footer__bottom">
                <div class="footer__grid">
                    <address>
                        <div>{{ footer.address }}</div>
                        <div>{{ footer.postal }}</div>
                        <div>{{ footer.email }}</div>
                    </address>
                    <div class="social">
                        <div>LinkedIn</div>
                        <div>Instagram</div>
                        <div>Facebook</div>
                    </div>
                    <nav class="links">
                        <NuxtLink to="/clients" class="color-secondary">
                            Clients
                        </NuxtLink>
                        <NuxtLink to="/agency" class="color-secondary">
                            Agency
                        </NuxtLink>
                        <NuxtLink to="/contact" class="color-secondary">
                            Contact
                        </NuxtLink>
                    </nav>
                </div>
                <div class="copyright">
                    &#169;{{ new Date().getFullYear() }} All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { globals } from '~/static/content.json'
import FormModal from '~/components/modal/FormModal'
import SendMessageForm from '~/components/forms/SendMessageForm'
import UploadCVForm from '~/components/forms/UploadCVForm'
export default {
    name: 'Footer',
    data() {
        return {
            footer: globals.footer
        }
    },
    methods: {
        openSendMessageModal() {
            this.$vfm.show({
                component: FormModal,
                bind: {
                    color: 'secondary-dark'
                },
                slots: {
                    default: {
                        component: SendMessageForm
                    }
                }
            })
        },
        openUploadCVModal() {
            this.$vfm.show({
                component: FormModal,
                bind: {
                    color: 'primary-dark'
                },
                slots: {
                    default: {
                        component: UploadCVForm
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    color: $color-secondary;
    position: relative;
}

.footer__cta {
    margin-bottom: base(7.5);
    @media screen and (max-width: map-get($breakpoints, md )) {
        margin-bottom: base(3);
    }
}

.footer__bottom {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    padding-bottom: base(2.5);
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.links,
.social,
address {
    > * {
        display: block;
        padding-top: base(0.6);
        padding-bottom: base(0.6);
    }
}

@media screen and (max-width: map-get($breakpoints, md )) {
    .footer__bottom {
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr;
        row-gap: base(1.5);
    }
    .footer__grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        row-gap: base(3);
    }
}
</style>
