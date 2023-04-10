<template>
    <v-form @submit.prevent>
        <v-text-field
            v-model="newUser.name"
            label="Name"
            required
        ></v-text-field>
        <v-text-field
            v-model="newUser.username"
            label="Username"
            required
        ></v-text-field>
        <v-text-field
            v-model="newUser.password"
            label="Password"
            type="password"
            required
        ></v-text-field>
        <v-btn
            color="primary"
            @click="register"
        >Register</v-btn>
    </v-form>

    <p class="text-h5 text-red-darken-3" v-if="errorMessage"> {{ errorMessage }}</p>
    <p class="text-h6 mt-10"> Already a user? 
        <router-link to='/login'> Login!</router-link>
    </p>
    <h2 class="text-h2 mt-10 text-purple-darken-3" v-if="successMessage"> {{ successMessage }}</h2>

</template>
<script lang="ts">
import UserService from '@/services/UserService';

export default {
    name: 'RegistrationPage',
    data() {
        return {
            newUser: {
                name: '',
                username: '',
                password: ''
            },
            errorMessage: '',
            successMessage: '',

            
        }
    },
    methods: {
        register(){ 
            UserService.addUser(this.newUser)
            .then((response) => {
                this.successMessage = 'Welcome to Splitium \uD83D\uDE00'
                setTimeout(() => {
                    this.successMessage = ''
                    this.$router.push({name: 'Login'});
                }, 3000)
            }).catch((error) => {
                console.log(error);
                this.errorMessage = error.response.data.message;
            })
        },
    },
}
</script>