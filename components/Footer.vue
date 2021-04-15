<template>
  <footer>
    <Container narrow>
      <div class="footer__top">
        <h3 class="color-secondary">
          Want to collaborate with us?
        </h3>
        <Button>Contact us</Button>
      </div>
    </Container>
    <Container>
      <div class="footer__bottom">
        <div class="footer__grid">
          <address>
            <div>Lars Hilles gate 30</div>
            <div>5008 Bergen</div>
            <div>hei@savvy.no</div>
          </address>
          <div class="social">
            <div>LinkedIn</div>
            <div>Instagram</div>
            <div>Facebook</div>
          </div>
          <div class="links">
            <div>Clients</div>
            <div>Agency</div>
            <div>Contact</div>
          </div>
        </div>
        <div class="copyright">
          &#169;{{ new Date().getFullYear() }} All Rights Reserved
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_mixins.scss';
@import '~/assets/css/_variables.scss';
footer {
    color: $color-secondary;
    position: relative;
}

.footer__top {
    padding-top: 150px;
    padding-bottom: 150px;
    @include breakpoint-down-md {
      padding-bottom: 50px;
    }
}
.footer__bottom {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    padding-bottom: 50px;
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@include breakpoint-down-md {
  .footer__bottom {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
  .footer__grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 30px;
  }
}
</style>
