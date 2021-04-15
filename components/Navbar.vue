<template>
  <nav class="navbar">
    <Container>
      <div class="navbar__inner">
        <div class="navbar__logo">
          <NuxtLink to="/">
            <img class="logo" src="~/assets/images/savvy-logo.svg" alt="Logo">
          </NuxtLink>
        </div>
        <div class="navbar__links">
          <NuxtLink to="/clients">
            Client
          </NuxtLink>
          <NuxtLink to="/agency">
            Agency
          </NuxtLink>
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </div>
        <div class="navbar__mobile-button">
          <i class="far fa-equals faw" />
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';
@import '~/assets/css/_mixins.scss';

.navbar__links {
  .nuxt-link-exact-active {
    &::before {
      content: "";
      background: url('~/assets/images/active-link.svg');
      background-repeat: no-repeat;
      width: 100px;
      height: 100px;
      display: block;
      position: absolute;
    }
    &:hover {
      color: inherit;
    }
  }
}

.navbar {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  a {
    font-size: 18px;
    letter-spacing: -.36px;
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: $color-primary;
    }
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr repeat(3, auto);
    align-items: center;
  }
  &__logo {}
  &__links {
    gap: 60px;
    grid-auto-flow: column;
    display: none;
  }

  &__mobile-button {
    border: 1px solid $color-secondary;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
  }

  @media (min-width: 992px) {
    padding-top: 60px;
    padding-bottom: 60px;
    &__mobile-button {
      display: none;
    }
    &__links {
      display: grid;
    }
  }
}
</style>
