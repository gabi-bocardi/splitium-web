<template>
    
    <v-list v-if="userGroups.length" variant="elevated">
       <GroupCard v-for="(group, index) in userGroups" :key="index" :group="group"/>
    </v-list>
</template>

<script lang="ts">
import GroupCard from './GroupCard.vue';
import UserService from '../services/UserService';

export default {
    name: 'Home',
    components: {
        GroupCard,
    }, 
    data() {
        return{
            user: {},
            userGroups: [],
        }
    },
    methods: {
        retrieveUser(){
            let userId = localStorage.getItem('user_id')!;
            UserService.getUser(userId)
            .then((response) => {
                this.user = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        retrieveUserGroups(){
            let userId = localStorage.getItem('user_id')!;
            UserService.getUserGroups(userId)
            .then((response) => {
                this.userGroups = response.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, 
    mounted(){
        this.retrieveUser();
        this.retrieveUserGroups();
    }
}

</script>