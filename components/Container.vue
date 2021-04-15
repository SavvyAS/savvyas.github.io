<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    narrow: {
      type: Boolean,
      default: false
    },
    narrower: {
      type: Boolean,
      default: false
    },
    narrowest: {
      type: Boolean,
      default: false
    }

  },
  computed: {
    classes () {
      return {
        container: !this.narrow && !this.narrower && !this.narrowest,
        'container--narrow': this.narrow,
        'container--narrower': this.narrower,
        'container--narrowest': this.narrowest
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 575px) {
    max-width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  &--narrow {

    @extend .container;
    padding-left: 70px;
    padding-right: 70px;
    @media (max-width: 575px) {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      padding-left: 50px;
      padding-right: 50px;
    }

  }
  &--narrower {

    @extend .container;
    padding-left: 120px;
    padding-right: 120px;
    @media (max-width: 575px) {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      padding-left: 50px;
      padding-right: 50px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      padding-left: 70px;
      padding-right: 70px;
    }
  }
  &--narrowest {

    @extend .container;
    padding-left: 220px;
    padding-right: 220px;
    @media (max-width: 575px) {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      padding-left: 80px;
      padding-right: 80px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      padding-left: 150px;
      padding-right: 150px;
    }
  }
}

</style>
