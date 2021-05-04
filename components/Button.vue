<template>
    <button class="button" :class="classes" @click="$emit('click', $event)">
        <div class="button__content">
            <slot />
        </div>
        <div class="button__icon">
            <i
                v-if="buttonType === 'arrow'"
                class="far fa-long-arrow-right fa-fw fa-md"
            />
            <i v-else class="far fa-plus fa-fw fa-md" />
        </div>
    </button>
</template>

<script>
const validateColorTheme = (theme) => {
    return [
        'primary',
        'primary-dark',
        'secondary',
        'secondary-dark',
        'secondary-darker',
        'background',
        'background-light'
    ].includes(theme)
}
export default {
    name: 'Button',
    props: {
        buttonType: {
            type: String,
            default: 'arrow',
            validator(val) {
                return ['arrow', 'plus'].includes(val)
            }
        },
        size: {
            type: String,
            default: 'medium',
            validator(val) {
                return ['small', 'medium', 'large'].includes(val)
            }
        },
        color: {
            type: String,
            default: 'primary',
            validator: validateColorTheme
        }
    },
    emits: ['click'],
    computed: {
        classes() {
            return {
                'button--arrow': this.buttonType === 'arrow',
                'button--plus': this.buttonType === 'plus',
                'button--small': this.size === 'small',
                'button--large': this.size === 'large',
                [`button--${this.color}`]: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    border: 0;
    padding: 0;
    background: transparent;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:focus {
        outline: 2px solid $color-secondary;
        outline-offset: base(0.5);
    }
    &__icon {
        width: 40px;
        height: 40px;
        border: 1px solid;
        border-radius: 50%;
        display: grid;
        place-content: center;
        i {
            transition: transform 0.3s ease;
        }
    }

    &--arrow {
        &:hover {
            .button__icon i {
                transform: translateX(5px);
            }
        }
    }
    &--plus {
        &:hover {
            .button__icon i {
                transform: translateY(-5px);
            }
        }
    }
    &--large {
        font-size: 72px;
        font-weight: normal;
        .button__icon {
            font-size: 22px;
            transform: translateY(-25px);
        }

        @media (max-width: 992px) {
            .button__icon {
                transform: translateY(-10px);
            }
            font-size: 42px;
        }
    }

    &--small {
        font-size: 16px;
        .button__icon {
            font-size: 22px;
            transform: translateY(0px);
        }
    }

    @each $color-name, $color in $colors {
        &--#{$color-name} {
            color: $color;
        }
    }
}
</style>
