<template>
    <ThemedForm @submit="onSubmit" id="form" ref="form">
        <Input placeholder="Your name *" name="Name" />
        <Input placeholder="Phone" name="Telephone" />
        <Input type="email" placeholder="Mail *" name="E-mail" />
        <Input placeholder="Message *" name="Message" />
        <FileInput name="File" />
        <div style="display: grid; justify-items: end">
            <Button
                type="submit"
                color="secondary"
                button-type="arrow"
                secondary
            >
                Send request
            </Button>
        </div>
    </ThemedForm>
</template>

<script>
import ThemedForm from '~/components/forms/ThemedForm'
import FileInput from '~/components/FileInput'
export default {
    name: 'UploadCVForm',
    components: { ThemedForm, FileInput },
    methods: {
        onSubmit() {
            const form = this.$refs.form.$el
            const formData = new FormData(form)
            console.log(...formData)
        }
    }
}
</script>
