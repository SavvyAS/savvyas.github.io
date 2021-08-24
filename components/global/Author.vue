<template>
    <div>
        <Card :right="true">
            <template #image>
                <div class="card-image-wrapper">
                    <NuxtImg
                        :src="author.image"
                        alt=""
                        format="webp"
                        quality="100"
                        sizes="sm:400px md:100% lg:800px"
                    />
                    <div v-if="index === 1" class="graffiti">
                        <NuxtImg
                            src="/images/graffiti_2.svg"
                            format="webp"
                            width="379"
                            quality="100"
                            height="431"
                            alt=""
                        />
                    </div>
                    <div v-if="index === 3" class="graffiti">
                        <NuxtImg
                            src="/images/graffiti.svg"
                            format="webp"
                            quality="100"
                            width="413"
                            height="408"
                            alt=""
                        />
                    </div>
                </div>
            </template>
            <template #body>
                <div class="vertical-align-center">
                    <h3 class="mb-1\/2">
                        {{ author.name }}
                    </h3>
                    <p>
                        {{ author.bio }}
                    </p>
                    <Button @click="showSendMessageModal"> Ask for cv </Button>
                    <div v-if="index === 1" class="graffiti-mobile">
                        <NuxtImg
                            src="/images/graffiti_2.svg"
                            format="webp"
                            quality="100"
                            width="379"
                            :style="{ position: 'relative' }"
                            height="431"
                            alt=""
                        />
                    </div>
                    <div v-if="index === 3" class="graffiti-mobile">
                        <NuxtImg
                            src="/images/graffiti.svg"
                            format="webp"
                            width="413"
                            quality="100"
                            height="408"
                            :style="{ position: 'relative' }"
                            alt=""
                        />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    props: {
        author: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.card-image-wrapper {
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .graffiti {
        position: absolute;
        z-index: 1;
        width: 60%;
        bottom: 0;
        left: 0;
        transform: translate(-30%, 60%) scaleX(-1);
        img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: map-get($breakpoints, md)) {
            display: none;
        }
    }
}
</style>
