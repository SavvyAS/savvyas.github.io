<script>
export default {
    name: 'FormThemeProvider',
    provide() {
        return {
            theme: this.theme
        }
    },
    props: {
        theme: {
            type: String,
            required: true
        }
    },
    render() {
        return this.$slots.default
    }
}
</script>

<style></style>
