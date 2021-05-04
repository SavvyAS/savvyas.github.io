<template>
    <div :style="{ overflowX: 'hidden' }">
        <Navbar />
        <div class="content">
            <Nuxt />
        </div>
        <Footer />
        <modals-container></modals-container>
    </div>
</template>

<style lang="scss">
html {
    font-size: $base-font-size;

    @media screen and (max-width: map-get($breakpoints, md)) {
        font-size: $base-font-size * 0.7;
    }

    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

    background: $color-background;
    min-height: 100vh;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient($color-secondary-darker, $color-background);
        height: 500px;
    }
}
.content {
    position: relative;
    // background: $color-background;
}
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style>
