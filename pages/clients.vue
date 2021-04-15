<template>
  <div>
    <header>
      <Container narrower>
        <h1>Our clients</h1>
        <p class="paragraph-large">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ad ab tempore quisquam officia nesciunt quasi explicabo, aspernatur nemo facere neque repellat exercitationem aperiam id necessitatibus maxime, harum aliquam suscipit!
        </p>
      </Container>
    </header>
    <div class="clients">
      <template v-for="(client, index) in clients">
        <Card :key="client.name" :narrow="index % 2 !== 0" :right="index % 2 !== 0">
          <template #image>
            <div class="background">
              <img :src="client.background" alt="">
              <div class="logo">
                <img :src="client.logo" alt="">
              </div>
            </div>
          </template>
          <template #body>
            <p class="paragraph-small">
              Client
            </p>

            <h3>{{ client.name }}</h3>
            <p>{{ client.description }}</p>
            <a :href="client.link">
              <Button>Visit {{ client.name }}</Button>
            </a>
          </template>
        </Card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  data () {
    return {
      clients: [
        {
          name: 'Vipps',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
          link: 'http://vipps.no',
          background: require('~/assets/images/client-bg-wide.svg'),
          logo: require('~/assets/images/vipps.svg')
        },
        {
          name: 'Fiskeridirektoratet',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
          link: 'http://fdir.no',
          background: require('~/assets/images/client-bg-narrow.svg'),
          logo: require('~/assets/images/fdir.svg')
        },
        {
          name: 'Fjordtours',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
          link: 'http://fjordtours.no',
          background: require('~/assets/images/client-bg-wide-2.svg'),
          logo: require('~/assets/images/fjordtours.svg')
        },
        {
          name: 'TV 2',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
          link: 'http://tv2.no',
          background: require('~/assets/images/client-bg-narrow-2.svg'),
          logo: require('~/assets/images/tv2.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

  header {
    h1 {
      margin: 1em;
    }
  }

  .background {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>
