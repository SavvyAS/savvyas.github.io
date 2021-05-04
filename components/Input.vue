<template>
    <input v-bind="$attrs" />
</template>

<script>
export default {
    name: 'Input'
}
</script>

<style lang="scss" scoped>
input {
    border: 0;
    border-radius: 0;
    width: 100%;
    display: block;
    background: transparent;
    color: $color-secondary;
    border-bottom: 1px solid $color-primary-dark;
    font-size: 18px;
    line-height: 1.5;
    font-weight: normal;
    padding-top: base(0.5);
    padding-bottom: base(0.5);

    &:not(:last-child) {
        margin-bottom: base(1.5);
    }

    &:focus,
    &:active {
        outline: 0;
    }

    &::placeholder {
        color: $color-secondary;
    }

    &:hover {
        // border-bottom-color: $color-secondary;
        // box-shadow: 1px 1px 1px 1px $color-primary-dark;
    }

    &[type='file'] {
    }
}
</style>
