<template>
    <v-container v-if="user" class="d-flex flex-column align-center w-100">
        <h1 class="text-h2  align-center">Welcome 
            <span @click="isShowUserInfo = !isShowUserInfo" className="name">
                {{ user.name }}!
            </span>
        </h1>
        <v-container v-if="isShowUserInfo" class="d-flex flex-column align-center w-100 mt-5">

            <p  class="text-h5"> Username: {{ user.username }} </p>
            <p  class="text-h5"> User ID: {{ user.id }}</p>
        </v-container>

       <GroupCard v-for="(group, index) in userGroups" :key="index" :group="group"/>
       <p v-if="!userGroups.length" class="text-h4 mt-10"> You have no groups yet.</p>
    </v-container>
</template>

<script lang="ts">
import GroupCard from './GroupCard.vue';
import UserService from '../services/UserService';
import type { IGroup, IUser } from '@/api/interfaces';

export default {
    name: 'Home',
    components: {
        GroupCard,
    }, 
    data() {
        return{
            user: {} as IUser,
            userGroups: [] as IGroup[],
            isShowUserInfo: false,
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
    },
}

</script>
<style scoped>

.name{
    cursor: pointer;
    color: #6A1B9A;
    text-decoration: underline;
}

</style>