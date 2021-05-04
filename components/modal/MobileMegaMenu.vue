<template>
    <BaseModal
        v-bind="$attrs"
        gradient
        color="background"
        @input="$emit('input')"
    >
        <nav>
            <NuxtLink to="/clients" class="h1">Clients</NuxtLink>
            <NuxtLink to="/agency" class="h1">Agency</NuxtLink>
            <NuxtLink to="/contact" class="h1">Contact</NuxtLink>
        </nav>
    </BaseModal>
</template>

<script>
import BaseModal from '~/components/modal/BaseModal'
export default {
    name: 'MobileMegaMenu',
    components: {
        BaseModal
    },
    emits: ['input'],
    watch: {
        $route() {
            this.$emit('input')
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    color: $color-secondary;
    margin-bottom: 1em;
}

nav {
    display: grid;
    justify-content: end;
    justify-items: end;
    padding-right: base(3.5);
    margin-top: base(5);
}
</style>
