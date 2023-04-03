
<template>
    <v-app>
        <v-container fluid className="ma-16 pa-16">
            <NavBar />
            <router-view />
        </v-container>
    </v-app>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
export default {
    name: 'App',
    components: {
        NavBar,
    }
}
</script>

