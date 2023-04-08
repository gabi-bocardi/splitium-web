<template>
        <v-card >
            <v-card-text>
                <v-form>
                    <v-checkbox
                        v-model="isUser"
                        label="Is this new Member a part of Splitium Community?"
                        required
                    />
                    <v-container v-if="!isUser">
                        <v-text-field
                            v-model="name"
                            label="Name"
                            required
                        />
                        <v-text-field
                            v-model="username"
                            label="Username"
                            required
                        />
                        <v-text-field
                            v-model="amount"
                            label="How much the own you?"
                            required
                        />
                    </v-container>
                    <v-container v-else>
                        <v-text-field
                            v-model="userId"
                            label="User ID"
                            required
                        />
                        <v-text-field
                            v-model="amount"
                            label="How much the own you?"
                            required
                        />
                    </v-container>

                    <v-btn type="submit" @click="handleSubmit">Add Member</v-btn>
                    <v-btn type="reset">Clear</v-btn>
                </v-form>
            </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-card>
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import GroupService from '@/services/GroupService';
import UserService from '@/services/UserService';
import type { PropType } from 'vue';


export default {
    name: "AddMemberForm",
    data() {
        return {
            dialog: false,
            isUser: false,
            userId: "",
            name: "",
            username: "",
            amount: 0,
        };
    },
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
    },
    methods: {
        handleSubmit(event: Event){
            event.preventDefault();
            if (this.isUser) {
                UserService.getUser(this.userId)
                .then((response) => {
                    const user = response.data;
                    const newMember = {
                        user: user,
                        amount: this.amount,
                    }
                    GroupService.addMember(this.group, newMember )
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            }else{
                const newUser = {
                    name: this.name,
                    username: this.username,
                    password: "splitium",
                }
                UserService.addUser(newUser)
                .then((response) => {
                    const user = response.data;
                    const newMember = {
                        user: user,
                        amount: this.amount,
                    }
                    GroupService.addMember(this.group, newMember )
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            
        }
    },
}
</script>