<template>
    <ThemedForm>
        <Input
            v-model="name"
            placeholder="Your name"
            name="user_name"
            required
        />
        <Input v-model="company" placeholder="Company " name="user_company" />
        <Input v-model="telephone" placeholder="Phone" name="user_telephone" />
        <Input v-model="message" placeholder="Message" name="user_message" />
        <div style="display: grid; justify-items: end">
            <a :href="body">
                <Button color="secondary" type="button" button-type="arrow">
                    Send request
                </Button>
            </a>
        </div>
    </ThemedForm>
</template>

<script>
import ThemedForm from '~/components/forms/ThemedForm'

export default {
    name: 'SendMessageForm',
    components: { ThemedForm },
    data() {
        return {
            name: '',
            company: '',
            telephone: '',
            message: ''
        }
    },
    computed: {
        body() {
            return `
                mailto:hei@savvy.no?subject=Enquiry&body=Name: ${this.name}%0D%0DCompany: ${this.company}%0D%0DPhone: ${this.telephone}%0D%0DMessage: ${this.message}%0D%0D
            `
        }
    }
}
</script>

<style lang="scss" scoped></style>
