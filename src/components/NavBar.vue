<template>
    <v-app-bar :elevation="2" >
        <img :src="logo" justify="center"/>
        <v-app-bar-title>Splitium</v-app-bar-title>
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
    }
}
</script>

<style scoped>
    img {
        max-width: 100px;
        max-height: 64px;
    }
</style>