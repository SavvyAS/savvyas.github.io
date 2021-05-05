<template>
    <div class="marquee">
        <div class="marquee__inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Marquee',
    mounted() {
        // const self = this
        // const update = () => {
        //     self.$children.forEach((child) => {
        //         child.$el.style.left = 5
        //     })
        //     requestAnimationFrame(update)
        // }
        // requestAnimationFrame(update)
    }
}
</script>

<style lang="scss" scoped>
.marquee {
    position: relative;
    height: 60px;
    &__inner {
        height: 60px;
        background: rgba(red, 0.2);
        position: absolute;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        font-size: 42px;
    }
}
</style>
