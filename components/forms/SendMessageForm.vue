<template>
    <ThemedForm>
        <Input placeholder="Your name *" name="user_name" required />
        <Input placeholder="Company " name="user_company" />
        <Input placeholder="Phone" name="user_telephone" />
        <Input type="email" placeholder="Mail *" name="user_mail" required />
        <Input placeholder="Message *" required name="user_message" />
        <div style="display: grid; justify-items: end">
            <Button type="submit" color="secondary" button-type="arrow">
                Send request
            </Button>
        </div>
    </ThemedForm>
</template>

<script>
// import emailjs from 'emailjs-com'
import ThemedForm from '~/components/forms/ThemedForm'

export default {
    name: 'SendMessageForm',
    components: { ThemedForm },
    methods: {
        // sendMail(e) {
        //     console.log('Submitted')
        //     emailjs
        //         .sendForm(
        //             'service_9arblur',
        //             'contact_form',
        //             e.target,
        //             'user_VIDAAWJJ7L7Q6qFTvSrz2'
        //         )
        //         .then(
        //             (result) => {
        //                 console.log('SUCCESS!', result.status, result.text)
        //             },
        //             (error) => {
        //                 console.log('FAILED...', error)
        //             }
        //         )
        // }
    }
}
</script>

<style lang="scss" scoped></style>
