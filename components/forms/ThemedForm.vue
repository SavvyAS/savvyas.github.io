<template>
    <form
        v-bind="$attrs"
        :class="themeClass"
        @submit.prevent="$emit('submit', $event)"
    >
        <slot />
    </form>
</template>

<script>
export default {
    name: 'ThemedForm',
    inject: ['theme'],
    computed: {
        themeClass() {
            return {
                [`form--theme-${this.theme}`]: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
form,
.form {
    min-width: min(520px, 100%);

    &--theme-primary-dark {
        input {
            border-color: $color-primary;
        }
        ::v-deep .button__icon {
            border-color: $color-primary;
        }
    }

    &--theme-secondary-dark {
        input {
            border-color: $color-magenta;
        }
        ::v-deep .button__icon {
            border-color: $color-magenta;
        }
    }
    &--theme-primary {
        input {
            border-color: $color-primary-dark;
        }
        ::v-deep .button__icon {
            border-color: $color-primary-dark;
        }
    }
}
</style>
