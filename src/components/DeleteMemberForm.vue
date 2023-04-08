<template v-slot:default="{ isActive }">
    <v-card >
        <v-card-text>
            <v-container>
                <p class="text-h4">Are you sure you want to delete {{member?.user.name}}?</p>
                <v-btn type="submit" @click="handleDelete">Delete Member</v-btn>
            </v-container>
        </v-card-text>
    </v-card>
    <v-dialog
    v-model="onSuccess"
    width="auto"
    >
        <v-card variant="elevated">
            <v-container>
                <v-card-text className="text-h4" color="white"> 
                    Member Deleted Successfully
                    <v-icon icon="mdi-check-circle" size="80px" color="primary" />
                </v-card-text>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import type { IGroupMember } from '@/api/interfaces';
import type { PropType } from 'vue';
import GroupService from '@/services/GroupService';

export default {
    name: 'DeleteMemberForm',
    data(){
        return {
            memberToDelete: '',
            onSuccess: false
        }
    },
    props:{
        member: {
            type: Object as PropType<IGroupMember>,
        }
    },
    methods: {
        // handleSubmit(){
        //     const data = {
        //         name: this.name,
        //         username: this.username,
        //         userId: this.userId,
        //         amount: this.amount
        //     }
        //     this.$emit('add-member', data);
        //     this.onSuccess = true;
        // }
        handleDelete(){
            if(this.member == null) return;
            GroupService.deleteMember(this.member!.id)
            .then(() => {
                this.onSuccess = true;
                setTimeout(() => {
                    this.onSuccess = false;
                    this.$router.go(0);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>