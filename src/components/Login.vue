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
</template>

<script lang="ts">
import { Login } from '../services/LoginService';
export default {
    name: 'Login',
    data() {
        return {
            userLogin: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            Login(this.userLogin)
                .then(() => {
                    this.$router.push('/home')
                })
                .catch(() => {
                    this.$router.push('/login')
                })
        }
    }
}
</script>
