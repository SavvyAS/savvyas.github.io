<template>
    <div class="card" :class="alignment">
        <div class="card__figure">
            <slot name="image" />
        </div>
        <div class="card__body">
            <slot name="body" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        right: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        alignment() {
            return {
                'card--right': this.right
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    $module: 'card';
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 5%;

    @media screen and (max-width: map-get($breakpoints, md)) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        row-gap: base();
    }

    &__body {
        // display: grid;
        // align-content: center;
        // justify-content: start;
    }

    &--right {
        &.#{$module} {
            grid-template-columns: 2fr 3fr;
            .#{$module}__figure {
                grid-column-start: 2;
                grid-row-start: 1;
            }
            .#{$module}__body {
                grid-column-start: 1;
                grid-row-start: 1;
            }
            @media screen and (max-width: map-get($breakpoints, md)) {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr auto;
                .#{$module}__body {
                    grid-column-start: 1;
                    grid-row-start: 2;
                }
                .#{$module}__figure {
                    grid-column-start: 1;
                    grid-row-start: 1;
                }
            }
        }
    }
}
</style>
