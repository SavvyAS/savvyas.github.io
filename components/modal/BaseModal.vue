<template>
    <vue-final-modal
        v-bind="$attrs"
        :classes="{
            'modal-container': true
        }"
        :content-class="{
            'modal-content': true,
            [`modal-content--bg-${color}`]: true
        }"
        :esc-to-close="true"
        @input="$emit('input')"
    >
        <div v-if="gradient" class="gradient" />
        <button class="close-button" :class="borderColor" @click="close">
            <i class="far fa-times"></i>
        </button>
        <div class="content">
            <slot></slot>
        </div>
    </vue-final-modal>
</template>

<script>
export default {
    name: 'BaseModal',
    props: {
        gradient: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary',
            validator(val) {
                return [
                    'primary',
                    'primary-dark',
                    'secondary',
                    'secondary-dark',
                    'secondary-darker',
                    'background',
                    'background-light'
                ].includes(val)
            }
        }
    },
    emits: ['input'],
    computed: {
        borderColor() {
            return {
                'button-border-primary': this.color === 'primary-dark',
                'button-border-primary-dark': this.color === 'primary',
                // 'button-border-magenta': this.color === 'secondary-darker',
                'button-border-magenta': this.color === 'secondary-dark'
            }
        }
    },
    methods: {
        close() {
            this.$emit('input')
        }
    }
}
</script>

<style lang="scss" scoped>
.gradient {
    position: absolute;
    top: 0;
    left: 0;
    height: base(25);
    width: 100%;
    background: linear-gradient($color-secondary-darker, transparent);
}
.content {
    position: absolute;
    top: base(3.5);
    left: 0;
    width: 100%;
    height: calc(100% - #{base(3.5)});
    padding: base(1.5);
}

.close-button {
    border: 1px solid white;
    margin: 0;
    width: base(2);
    height: base(2);
    border-radius: 50%;
    outline: 0;
    background: transparent;
    color: white;
    top: base(1.5);
    right: base(1);
    position: absolute;
    cursor: pointer;

    &.button-border-primary {
        border-color: $color-primary;
    }
    &.button-border-magenta {
        border-color: $color-magenta;
    }
    &.button-border-primary-dark {
        border-color: $color-primary-dark;
    }
    &.button-border-secondary-dark {
        border-color: $color-secondary-dark;
    }
    &.button-border-secondary-darker {
        border-color: $color-secondary-darker;
    }
}
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
}
::v-deep .modal-content {
    position: relative;
    margin: base(1.5);
    padding: base(1.5);
    height: calc(100vh - #{base(3)});
    width: 100vw;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
        margin: 0;
        width: 100vw;
        height: 100vh;
    }
}
::v-deep .modal-content {
    &--bg-primary {
        background-color: $color-primary;
    }
    &--bg-primary-dark {
        background-color: $color-primary-dark;
    }
    &--bg-secondary {
        background-color: $color-secondary;
    }
    &--bg-secondary-dark {
        background-color: $color-secondary-dark;
    }
    &--bg-secondary-darker {
        background-color: $color-secondary-darker;
    }
    &--bg-background {
        background-color: $color-background;
    }
    &--bg-background-light {
        background-color: $color-background-light;
    }
}
</style>
