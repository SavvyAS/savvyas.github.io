<template>
    <div>
        <div class="container">
            <div
                class="row"
                :style="{
                    position: 'relative'
                }"
            >
                <div
                    class="image-wrapper column column--span-1/2 column--offset-1/2"
                >
                    <slot name="image" />
                    <div
                        :style="{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%'
                        }"
                    >
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HalfImageLayout'
}
</script>

<style lang="scss" scoped>
.image-wrapper > img {
    min-width: base(22.5);
}
</style>
