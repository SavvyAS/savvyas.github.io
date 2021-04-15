<template>
  <button class="button" :class="classes">
    <div class="button__content">
      <slot />
    </div>
    <div class="icon-wrapper">
      <i v-if="type === 'arrow'" class="far fa-long-arrow-right fa-fw fa-md" />
      <i v-else class="far fa-plus fa-fw fa-md" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'arrow',
      validator (val) {
        return ['arrow', 'plus'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    primary: {
      type: Boolean,
      default: false
    },
    primaryDark: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    secondaryDark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'button--arrow': this.type === 'arrow',
        'button--plus': this.type === 'plus',
        'button--small': this.size === 'small',
        'button--large': this.size === 'large',
        'button--primary': this.primary,
        'button--primary-dark': this.primaryDark,
        'button--secondary': this.secondary,
        'button--secondary-dark': this.secondaryDark
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';
.button {
  border: 0;
  padding: 0;
  background: transparent;
  color: #712CFF;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 1em;
  .icon-wrapper {
    width: 40px;
    height: 40px;
    border: 1px solid #712CFF;
    border-radius: 50%;
    display: grid;
    place-content: center;

    i {
      transition: transform .3s ease;
    }
  }

  &--arrow {
    &:hover {
      .icon-wrapper i {
        transform: translateX(5px);
      }
    }
  }
  &--plus {
    &:hover {
      .icon-wrapper i {
        transform: translateY(-5px);
      }
    }
  }
  &--large {
    font-size: 72px;
    font-weight: normal;
    .icon-wrapper {
      font-size: 22px;
      transform: translateY(-25px);
    }

    @media (max-width: 992px) {
      .icon-wrapper {
        transform: translateY(-10px);
      }
      font-size: 42px;
    }
  }

  &--small {
    font-size: 16px;
    .icon-wrapper {
      font-size: 22px;
      transform: translateY(0px);
    }
  }

  &--primary {
    color: $color-primary;
    .icon-wrapper {
      border-color: $color-primary;
    }
  }

  &--secondary {
    color: $color-secondary;
    .icon-wrapper {
      border-color: $color-secondary;
    }
  }
  &--secondary-dark {
    color: $color-secondary-dark;
    .icon-wrapper {
      border-color: $color-secondary-dark;
    }
  }

  &--primary-dark {
    color: $color-primary-dark;
    .icon-wrapper {
      border-color: $color-primary-dark;
    }
  }
}
</style>
