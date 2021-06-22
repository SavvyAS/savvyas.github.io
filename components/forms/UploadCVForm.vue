<template>
    <ThemedForm id="form" ref="form" @submit="onSubmit">
        <Input v-model="name" placeholder="Your name *" name="Name" />
        <Input v-model="telephone" placeholder="Phone" name="Telephone" />
        <Input v-model="message" placeholder="Message *" name="Message" />
        <div style="display: grid; justify-items: end">
            <a :href="body">
                <Button
                    type="button"
                    color="secondary"
                    button-type="arrow"
                    secondary
                >
                    Send
                </Button>
            </a>
        </div>
    </ThemedForm>
</template>

<script>
import ThemedForm from '~/components/forms/ThemedForm'
export default {
    name: 'UploadCVForm',
    components: { ThemedForm },
    data() {
        return {
            name: '',
            telephone: '',
            message: ''
        }
    },
    computed: {
        body() {
            return `
                mailto:hei@savvy.no?subject=Enquiry&body=Name: ${this.name}%0D%0DPhone: ${this.telephone}%0D%0DMessage: ${this.message}%0D%0D
            `
        }
    }
}
</script>
