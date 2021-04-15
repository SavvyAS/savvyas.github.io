<template>
    <div>
        <header>
            <Container>
                <div class="image-wrapper">
                    <img
                        class="image-wrapper__main"
                        src="~/assets/images/header-image-1.png"
                        alt=""
                    >
                    <img
                        class="image-wrapper__graffiti"
                        src="~/assets/images/graffiti_2.svg"
                        alt=""
                    >
                </div>
            </Container>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
header {
    margin-bottom: 200px;
    position: relative;
    overflow-x: hidden;
    overflow-y: visible;
    .image-wrapper {
        position: relative;
        display: block;
        margin-left: auto;
        width: 50%;
        min-width: 450px;
        @media (max-width: 768px) {
            .image-wrapper__main {
                transform: translateX(50%);
            }
        }
        &__main {
            height: auto;
            width: 100%;
        }
        &__graffiti {
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%) scaleX(-1);
            width: 60%;
            @media (max-width: 768px) {
                position: static;
                margin-left: auto;
                margin-top: 20px;
                width: 50%;
                display: block;
                transform: translate(0) scaleX(-1);
            }
        }
    }
}
</style>
