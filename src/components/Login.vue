<template>
    <v-form @submit.prevent>
        <v-text-field
            v-model="username"
            label="Username"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
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
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log('login')
        }
    }
}
</script>
