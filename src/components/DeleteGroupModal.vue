<template v-slot:default="{ isActive }">
    <v-card >
        <v-card-text>
            <v-container>
                <p class="text-h4">Are you sure you want to delete {{group?.name}}?</p>
                <v-btn type="submit" @click="handleDelete">Delete Group</v-btn>
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
                    Group Deleted Successfully
                    <v-icon icon="mdi-check-circle" size="80px" color="primary" />
                </v-card-text>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import GroupService from '@/services/GroupService';
import type { PropType } from 'vue';


export default {
    name: "DeleteGroupModal",
    data(){
        return{
            onSuccess: false,
        }
    },
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true,
        } 
    },
    methods: {
        handleDelete(){
            if(!this.group?.id) return;
            GroupService.deleteGroup(this.group!.id)
            .then((response) => {
                this.onSuccess = true;
                setTimeout(() => {
                    this.onSuccess = false;
                    this.$router.push({name: "Home"});
                }, 2000);
            })
            .catch((error) => {
                console.log(error)
            })
        }, 
    }
}
</script>