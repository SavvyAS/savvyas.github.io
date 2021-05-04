<template>
    <BaseModal v-bind="$attrs" :color="color" @input="$emit('input')">
        <div class="text-content">
            <p class="paragraph-large" style="max-width: 60ch">
                {{ content }}
            </p>
        </div>
    </BaseModal>
</template>

<script>
import BaseModal from '~/components/modal/BaseModal'
export default {
    name: 'TextModal',
    components: {
        BaseModal
    },
    props: {
        content: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    emits: ['input']
}
</script>

<style lang="scss" scoped>
.text-content {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
}
</style>
