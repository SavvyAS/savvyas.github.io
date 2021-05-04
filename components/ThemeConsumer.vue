<script>
export default {
    name: 'ThemeConsumer',
    inject: ['theme'],
    render() {
        if (typeof this.$scopedSlots.default === 'function') {
            return this.$scopedSlots.default({
                theme: this.theme
            })
        } else {
            return this.$slots.default
        }
    }
}
</script>

<style></style>
