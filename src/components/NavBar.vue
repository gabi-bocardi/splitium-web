<template>
    <v-app-bar :elevation="2">
        <v-container className="w-100 d-flex align-center justify-space-between pr-5">
            
            <v-button className="logo">
                <router-link to="/home">
                    <img :src="logo" justify="center"/>
                </router-link>
            </v-button>
            <v-container className="d-flex icons">
                <v-icon icon="mdi-plus-circle-outline" size="x-large" @click="goToCreateGroup"/>
                <v-icon icon="mdi-logout" size="x-large" @click="logout" />
            </v-container>
        </v-container>
    </v-app-bar>

</template>

<script lang="ts">
import Logo from '../assets/logo.png';

export default {
    name: 'NavBar',
    data(){
        return {
            logo: Logo
        }
    }, 
    methods: {
        logout(){
            localStorage.removeItem('user_id');
            this.$router.push({name: 'Login'});
        }, 
        goToCreateGroup(){
            this.$router.push({name: 'NewGroupPage'});
        }
    }
}
</script>

<style scoped>
    img {
        max-width: 100px;
        max-height: 64px;
    }
    .icons{
        gap: 15px;
    }
</style>