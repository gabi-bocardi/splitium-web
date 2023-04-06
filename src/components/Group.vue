<template>
    <v-sheet className="d-flex flex-column justify-space-evenly align-center elevation-3 py-7 rounded-lg">
        <v-avatar :color="avatarColor" size="x-large" variant="elevated">
            <!-- <span class="text-h5">{{ avatarText }}</span> -->
        </v-avatar>
        <!-- <p class="text-h4">{{group.name}}</p>
        <p :class="balanceClass">{{group.balance.toFixed(2)}}</p>
        <p class="text-h5">{{ group.description }}</p> -->
    </v-sheet>

</template>

<script lang="ts">
import randomColor from 'randomcolor';
import {computeGroupBalance} from '@/utils/calculator';
import UserService from '@/services/UserService';


export default {
    name: 'GroupPage',
    data(){
        return {
            group: {},
            avatarColor: randomColor(),
            avatarText: this.group.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .substring(0, 2),
            balance: 0,
        }
    },
    methods: {
        retrieveGroup(){
            let groupId = this.$route.params.id as string;
            console.log(groupId);
            UserService.getGroup(groupId)
            .then((response) => {
                this.group = response.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        calculateBalance(){
            if(this.group){
                // this.balance = computeGroupBalance(this.group!);
                // return this.balance >= 0 ? 'text-h4 text-success' : 'text-h4 text-error';
            }
        }
    },
    mounted(){
        this.retrieveGroup();
    },

}
</script>