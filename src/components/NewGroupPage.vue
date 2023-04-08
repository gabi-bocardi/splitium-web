<template>
  <v-form @submit.prevent>
        <v-text-field
            v-model="newGroupRequest.name"
            label="Group Name"
            required
        ></v-text-field>
        <v-text-field
            v-model="newGroupRequest.description"
            label="A brief description of the group"
            required
        ></v-text-field>
        <v-text-field
            v-model="newGroupRequest.total"
            label="How much the own you?"
            type="number"
            required
        ></v-text-field>
        <v-text-field
            v-model="userShare"
            label="How much the is your share?"
            type="number"
            required
        ></v-text-field>
        <v-btn
            color="primary"
            @click="createGroup"
        >Create</v-btn>
        <v-btn
            color="primary"
            type="reset"
        >Clear</v-btn>
    </v-form>
    <h2 class="text-h2 mt-10 text-purple-darken-3" v-if="successMessage"> {{ successMessage }}</h2>
    <p class="text-h5 text-red-darken-3" v-if="errorMessage"> {{ errorMessage }}</p>
</template>
<script lang="ts">
import GroupService from '@/services/GroupService';
import UserService from '../services/UserService';
import type { IUser } from '@/api/interfaces';

export default {
    name: 'NewGroupPage',
    data() {
        return {
            newGroupRequest: {
                name: '',
                description: '',
                total: 0
            },
            errorMessage: '',
            user: {} as IUser,
            userShare: 0,
            successMessage: '',
        }
    },
    methods:{
        createGroup(){
            UserService.createGroup(this.newGroupRequest)
                .then((response) => {
                    const group = response.data;
                    const newMember = {
                        user: this.user,
                        amount: this.userShare
                    }
                    GroupService.addMember(group, newMember)
                        .then((response) => {
                            this.successMessage = 'Group create successfully \uD83D\uDE00'
                            setTimeout(() => {
                                this.successMessage = ''
                                this.$router.push({name: 'GroupPage', params: {id: group.id}})
                            }, 3000)
                        })
                        .catch((error) => {
                            this.errorMessage = error.response.data.message
                        })
                })
                .catch((error) => {
                    this.errorMessage = error.response.data.message
                })
        }, 
        retrieveUser(){
            let userId = localStorage.getItem('user_id')!;
            UserService.getUser(userId)
            .then((response) => {
                this.user = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
    mounted(){
        this.retrieveUser();
    }
}
</script>
