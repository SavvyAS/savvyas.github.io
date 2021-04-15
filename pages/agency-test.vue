
<template>
    <div>
        <header>
            <Container narrowest>
                <h1 class="my">
                    We are <br class="rwd-break">savvy people
                </h1>
            </Container>
            <Container narrower>
                <p class="paragraph-large my">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda eum debitis, rerum impedit officiis deserunt quaerat recusandae vero, nulla optio in? Fuga eligendi similique a explicabo nobis non quisquam!
                </p>
            </Container>
        </header>
        <img
            class="mx-auto graffiti-top"
            src="~/assets/images/graffiti.svg"
            alt=""
        >
        <Container narrowest>
            <p class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem maiores nobis aperiam accusantium impedit sapiente eum veniam incidunt, similique ad neque delectus harum! Iure corporis repellat ducimus eaque optio aliquid nobis laudantium doloremque eum neque quia, eligendi esse. A, placeat! Rerum voluptates, cum illo eaque eos labore beatae a laborum quas inventore sunt, nemo debitis. Porro omnis fuga vitae.
            </p>
        </Container>
        <section>
            <Card>
                <template #image>
                    <div class="card-image-wrapper">
                        <img
                            src="~/assets/images/purple-room.png"
                            alt=""
                        >
                    </div>
                </template>
                <template #body>
                    <h3>Savvy &amp; guilty</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <Button>Visit Guilty</Button>
                </template>
            </Card>
        </section>
        <section>
            <Container>
                <h2 class="color-secondary">
                    What's important for us;
                </h2>
            </Container>
            <ul>
                <li>
                    <Container narrowest>
                        <Button
                            type="plus"
                            size="large"
                            secondary-dark
                        >
                            Transparency
                        </Button>
                    </Container>
                    <Container narrowest />
                </li>
                <li>
                    <Container narrowest>
                        <Button
                            size="large"
                            type="plus"
                        >
                            Equality
                        </Button>
                    </Container>
                </li>
                <li>
                    <Container narrowest>
                        <Button
                            size="large"
                            type="plus"
                            primary-dark
                        >
                            Adventurous
                        </Button>
                    </Container>
                </li>
            </ul>
        </section>
        <section>
            <Card
                v-for="(employee, index) in employees"
                :key="employee.name"
                :narrow="index % 2 !== 0"
                :right="index % 2 !== 0"
            >
                <template #image>
                    <div class="card-image-wrapper">
                        <img
                            :src="employee.photo"
                            alt=""
                        >
                        <div
                            v-if="index === 1"
                            class="graffiti"
                        >
                            <img
                                src="~/assets/images/graffiti_2.svg"
                                alt=""
                            >
                        </div>
                        <div
                            v-if="index === 3"
                            class="graffiti"
                        >
                            <img
                                src="~/assets/images/graffiti.svg"
                                alt=""
                            >
                        </div>
                    </div>
                </template>
                <template #body>
                    <p class="paragraph-small">
                        {{ employee.title }}
                    </p>
                    <h3 class="mb-1\/2">
                        {{ employee.name }}
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <p class="color-primary my">
                        {{ employee.email }}
                    </p>
                    <Button>Ask for cv</Button>
                    <div
                        v-if="index === 1"
                        class="graffiti-mobile"
                    >
                        <img
                            src="~/assets/images/graffiti_2.svg"
                            alt=""
                        >
                    </div>
                    <div
                        v-if="index === 3"
                        class="graffiti-mobile"
                    >
                        <img
                            src="~/assets/images/graffiti.svg"
                            alt=""
                        >
                    </div>
                </template>
            </Card>
        </section>
    </div>
</template>

<script>
/* eslint-disable vue/no-v-for-template-key-on-child */
export default {
    name: 'Agency',
    data() {
        return {
            employees: [
                {
                    title: 'Saus',
                    name: 'Håkon Kaurel',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    email: 'hakon.kaurel@savvy.no',
                    photo: require('~/assets/images/hakon.png')
                },
                {
                    title: 'Title',
                    name: 'Joachim Carlsen',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    email: 'joachim.carlsen@savvy.no',
                    photo: require('~/assets/images/joachim.png')
                },
                {
                    title: 'Title',
                    name: 'Erlend Rekve',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    email: 'erlend.rekve@savvy.no',
                    photo: require('~/assets/images/employee-bg-wide.svg')
                },
                {
                    title: 'Title',
                    name: 'Abdullah Shaheen',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    email: 'abdullah.shaheen@savvy.no',
                    photo: require('~/assets/images/employee-bg-narrow.svg')
                },
                {
                    title: 'Title',
                    name: 'Håkon Trandal',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    email: 'hakon.trandal@savvy.no',
                    photo: require('~/assets/images/employee-bg-wide.svg')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .row {
        display: grid;
    }
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
@media (min-width: 992px) {
    .rwd-break {
        display: none;
    }
}
.graffiti-top {
    width: 40%;
    max-width: 420px;
    margin-top: 60px;
    margin-bottom: -100px;
    transform: scaleX(-1);
    @media (max-width: 992px) {
        margin-bottom: 60px;
    }
}
.card-image-wrapper {
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .graffiti {
        position: absolute;
        width: 60%;
        bottom: 0;
        left: 0;
        transform: translate(-30%, 60%) scaleX(-1);
        img {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 992px) {
            display: none;
        }
    }
}
.graffiti-mobile {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    img {
        width: 100%;
    }
    @media (min-width: 991px) {
        display: none;
        color: red;
    }
}
</style>
