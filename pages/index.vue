<template>
    <div class="index">
        <section>
            <div class="header">
                <Container narrow>
                    <div class="header__top">
                        <div class="header__hero-image">
                            <div class="header__image-wrapper">
                                <img
                                    class="header__image"
                                    src="~/assets/images/header-image-1.png"
                                    alt=""
                                />
                                <img
                                    class="header__graffiti"
                                    src="~/assets/images/graffiti.svg"
                                    alt=""
                                />
                            </div>
                            <div class="header__top-heading">
                                <div class="container--narrow">
                                    <h1>Lorem ipsum dolor sit amet.</h1>
                                    <Button>The agency</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container narrow>
                    <p class="paragraph-large">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas voluptate temporibus totam, veritatis consequatur
                        quasi itaque ab, commodi quibusdam rerum inventore
                        ullam, ratione atque laudantium.
                    </p>
                </Container>
            </div>
        </section>
        <section class="overflow-hidden">
            <Container>
                <div class="header__bottom">
                    <div class="header__hero-image-bottom">
                        <div class="header__image-bottom-wrapper">
                            <img
                                class="header__image-bottom"
                                src="~/assets/images/header-image-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="header__cool-text">
                        <h2 class="competence">
                            competence 1 // competence 2 // competence 3 //
                            competence 4 // competence 5
                        </h2>
                        <h2 class="competence">
                            competence 6 // competence 7 // competence 8 //
                            competence 9 // competence 10
                        </h2>
                        <h2 class="competence">
                            competence 11 // competence 12 // competence 13 //
                            competence 14 // competence 15
                        </h2>
                    </div>
                </div>
            </Container>
        </section>
        <section>
            <Container>
                <div class="clients">
                    <div class="client-card">
                        <div class="client-card__image-wrapper">
                            <img
                                class="client-card__background"
                                src="~/assets/images/client-background-1.svg"
                                alt=""
                            />
                            <img
                                class="client-card__logo"
                                src="~/assets/images/vipps.svg"
                                alt=""
                            />
                        </div>
                        <div class="client-card__body">
                            <p>Client</p>
                            <h3>Vipps</h3>
                        </div>
                    </div>
                    <div class="client-card client-card--reverse">
                        <div class="client-card__image-wrapper">
                            <img
                                class="client-card__background"
                                src="~/assets/images/client-background-1.svg"
                                alt=""
                            />
                            <img
                                class="client-card__logo"
                                src="~/assets/images/vipps.svg"
                                alt=""
                            />
                        </div>
                        <div class="client-card__body">
                            <p>Client</p>
                            <h3>Vipps</h3>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-card__image-wrapper">
                            <img
                                class="client-card__background"
                                src="~/assets/images/client-background-1.svg"
                                alt=""
                            />
                            <img
                                class="client-card__logo"
                                src="~/assets/images/vipps.svg"
                                alt=""
                            />
                        </div>
                        <div class="client-card__body">
                            <p>Client</p>
                            <h3>Vipps</h3>
                        </div>
                    </div>
                    <div class="client-card client-card--reverse">
                        <div class="client-card__image-wrapper">
                            <img
                                class="client-card__background"
                                src="~/assets/images/client-background-1.svg"
                                alt=""
                            />
                            <img
                                class="client-card__logo"
                                src="~/assets/images/vipps.svg"
                                alt=""
                            />
                            <img
                                class="graffiti-2"
                                src="~/assets/images/graffiti_2.svg"
                                alt=""
                            />
                        </div>
                        <div class="client-card__body">
                            <p>Client</p>
                            <h3>Vipps</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            competence: 15,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixins.scss';

.header {
    position: relative;
    width: 100%;
    overflow: hidden;

    &__top {
        position: relative;
        margin-bottom: 400px;
    }

    &__hero-image {
        position: relative;
    }
    &__image-wrapper {
        margin-left: auto;
        position: relative;
        // object-fit: cover;
        // display: block;
        // width: 100%;
        // height: 100%;
        width: 50%;
        min-width: 360px;
        height: auto;
        @media (max-width: 992px) {
            width: 360px;
            height: 450px;
            transform: translateX(40%);
        }
    }
    &__image {
        width: 100%;
    }
    &__graffiti {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
        width: 50%;
        @media (max-width: 992px) {
            position: static;
            transform: translate(-50%, -25%);
        }
    }
    &__top-heading {
        position: absolute;
        top: 25%;
        left: 0;
        width: 100%;
    }

    &__bottom {
        position: relative;
        margin-bottom: 200px;
        margin-top: 200px;
    }

    &__hero-image-bottom {
        position: relative;
    }
    &__image-bottom-wrapper {
        margin-left: auto;
        position: relative;

        width: 360px;
        height: 450px;
        transform: translateX(40%);
        @include breakpoint-up-md {
            transform: translateX(0);
            width: 50%;
            height: auto;
        }
    }
    &__image-bottom {
        width: 100%;
    }

    &__cool-text {
        position: absolute;
        bottom: 10%;
        text-align: center;
    }
}

// .header__thing {
//     position: relative;
//     // margin-top: -400px;
//     // @include breakpoint-up-md {
//     //   margin-top: -450px;
//     // }
//     // @include breakpoint-up-lg {
//     //   margin-top: -550px;
//     // }
// }

// .header__cool-text {
//     margin-top: -450px;
//     margin-top: 0px;
//     padding-bottom: 200px;
// }

.competence {
    font-size: 42px;
    line-height: 1.5;
    white-space: nowrap;
    width: 100vw;
    animation: float 10s infinite linear;
    z-index: 100;
    @include breakpoint-up-md {
        font-size: 72px;
    }
}
.competence:first-child {
    color: #830a77;
    text-indent: -55%;
}
.competence:nth-child(2) {
    color: #712cff;
    text-indent: -25%;
}
.competence:last-child {
    color: #420cb1;
    text-indent: -55%;
}
// .cool {
//   position: relative;
//   overflow: hidden;
//   height: 100px;
//   .test {
//     display: block;
//     overflow: hidden;
//     font-size: 72px;
//     font-weight:300;
//     width: 200%;
//     position: absolute;
//     animation: m1 5s linear infinite;
//     &-1 {
//       float: left;
//       width: 50%;
//     }
//     &-2 {
//       float: left;
//       width: 50%;
//       // animation: m2 10s linear infinite;
//       // animation-delay: 25s;
//     }

//     @keyframes m1 {
//       0% {
//         left: 0;
//       }
//       100% {
//         left: -100%;
//       }
//     }

//     @keyframes m2 {
//       from {
//         transform: translateX(100%);
//       }
//       to {
//         transform: translateX(-100%);
//       }
//     }
//   }
// }

h2.competence {
    font-weight: 100;
}

.graffiti {
    margin-top: -200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    position: relative;
}
.clients {
    display: grid;
    grid-auto-flow: column;
    overflow: auto;
    column-gap: 20px;
    width: 100%;
    @include breakpoint-up-md {
        // column-gap: 120px;
        grid-auto-flow: row;
        column-gap: 10%;
        grid-template-columns: repeat(2, 1fr);
    }
}

.client-card {
    display: grid;
    row-gap: 20px;
    @include breakpoint-up-md {
        width: 100%;
    }
    &__image-wrapper {
        position: relative;
        // width: 250px;
        .grafitti-2 {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    &__background {
        width: 100%;
        object-fit: cover;
    }

    &__logo {
        position: absolute;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &--reverse {
        @include breakpoint-up-md {
            .client-card__image-wrapper {
                grid-row-start: 2;
            }
            .client-card__body {
                align-content: end;
            }
        }
    }
}

.client-card__body {
    height: 260px;
    display: grid;
    align-content: start;
}
.client-card__body h2 {
    color: #712cff;
    font-size: 42px;
}
.client-card__body p {
    margin: 0;
}

// h1 {
//     color: #712CFF;
//     font-size: 72px;
//     line-height: 1.5;
// }
// p {
//     color: #FCEAFC;
//     font-size: 32px;
//     line-height: 1.5;
//     margin-top: 1rem;
// }

@keyframes float {
    0% {
        left: 0;
    }
    100% {
        left: -200%;
    }
}
</style>
