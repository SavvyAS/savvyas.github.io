<template>
    <span class="h1 perspective-container">
        {{ prepend }}
        <transition name="animation" mode="out-in">
            <template v-for="(word, index) in words">
                <span v-if="current === index" :key="word">{{ word }}</span>
            </template> </transition
        >{{ append }}
    </span>
</template>

<script>
export default {
    name: 'AnimatedHeading',
    props: {
        append: {
            type: String,
            default: ''
        },
        prepend: {
            type: String,
            default: 'We are savvy'
        }
    },
    data() {
        return {
            words: [
                'people.',
                'consultants.',
                'developers.',
                'designers.',
                'disruptors.',
                'innovators.',
                'dreamers.',
                'specialists.'
            ],
            current: 0
        }
    },

    mounted() {
        setInterval(
            () =>
                (this.current =
                    this.current >= this.words.length - 1
                        ? 0
                        : this.current + 1),
            3000
        )
    }
}
</script>

<style lang="scss" scoped>
$animationDuration: 0.7s;

.animation-enter-active {
    display: inline-block;
    transform-origin: bottom;
    animation: rotate-in 1s ease-out;
    transform-style: preserve-3d;
}
.animation-leave-active {
    display: inline-block;
    transform-origin: bottom;
    animation: rotate-out $animationDuration ease-in-out;
    transform-style: preserve-3d;
}

.perspective-container {
    perspective: 300px;
    // perspective-origin: 50% 50%;
}

@keyframes rotate-out {
    0% {
        transform: rotateX(0deg);
    }
    30% {
        transform: rotateX(-25deg);
    }
    80% {
        opacity: 0.05;
    }
    100% {
        transform: rotateX(180deg);
        opacity: 0;
    }
}
@keyframes rotate-in {
    0% {
        transform: rotateX(-180deg);
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
}
</style>
