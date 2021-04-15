<template>
  <div>
    <Navbar />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '~/assets/css/_variables.scss';
html {
  font-size: 16px;
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

    content: "";
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
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
