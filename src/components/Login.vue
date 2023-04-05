<template>
    <v-form @submit.prevent>
        <v-text-field
            v-model="userLogin.username"
            label="Username"
            required
        ></v-text-field>
        <v-text-field
            v-model="userLogin.password"
            label="Password"
            type="password"
            required
        ></v-text-field>
        <v-btn
            color="primary"
            @click="login"
        >Login</v-btn>
    </v-form>
    <p class="text-h5 red-darken-3" v-if="errorMessage"> {{ errorMessage }}</p>
</template>

<script lang="ts">
import LoginService from '../services/LoginService';
export default {
    name: 'Login',
    data() {
        return {
            userLogin: {
                username: '',
                password: ''
            },
            errorMessage: '',
        }
    },
    methods: {
        login(){
            LoginService.login(this.userLogin)
            .then((response) => {
                let user = response.data;
                localStorage.setItem('user_id', user.id);
                this.$router.push({name: 'Home'});
            })
            .catch((error) => {
                console.log(error);
                this.errorMessage = error.response.data.message;
            })
        }
       
    }
}

</script>
