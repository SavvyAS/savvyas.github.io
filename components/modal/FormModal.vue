<template>
    <BaseModal v-bind="$attrs" :color="color" @input="$emit('input')">
        <div class="form-content">
            <FormThemeProvider :theme="color">
                <slot></slot>
            </FormThemeProvider>
        </div>
    </BaseModal>
</template>

<script>
import BaseModal from '~/components/modal/BaseModal'
export default {
    name: 'FormModal',
    components: {
        BaseModal
    },
    props: {
        color: {
            type: String,
            required: true
        }
    },
    emits: ['input']
}
</script>

<style lang="scss" scoped>
.form-content {
    display: grid;
    place-items: center;
    height: 100%;
}
</style>
