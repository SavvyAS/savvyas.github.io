<template>
    <div class="horizontal-scroll">
        <div class="row">
            <div class="column-1">
                <div class="horizontal-scroll__grid">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HorizontalScrollContainer'
}
</script>

<style lang="scss" scoped>
.column-1 {
    @media screen and (max-width: map-get($breakpoints, md )) {
        grid-column: 1 / 25;
    }
}
.horizontal-scroll {
    // Horizontal scroll on smaller devices and normal container over 992px
    width: 100vw;
    // overflow-y: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
    display: grid;
    grid-auto-flow: column;

    &__grid {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-auto-rows: 1fr;
        column-gap: base();
    }

    // Put spacing on edge of container
    &:before {
        content: '';
        display: inline-block;
        width: base(1);
        height: 100%;
    }
    &:after {
        content: '';
        display: inline-block;
        width: base(1);
        height: 100%;
    }

    @media screen and (min-width: map-get($breakpoints, md)) {
        @include container;
        overflow: initial;
        &__grid {
            grid-template-columns: repeat(2, minmax(0, auto));
            grid-auto-flow: row;
            grid-auto-columns: 1fr;
            grid-auto-rows: 1fr;
            justify-content: space-between;
        }
        &:before {
            display: none;
        }
        &:after {
            display: none;
        }
    }
}
</style>
