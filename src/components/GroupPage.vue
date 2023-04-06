<template>
    <v-sheet v-if="group" className="d-flex flex-column justify-space-evenly align-center elevation-3 py-7 rounded-lg">
        <v-avatar :color="avatarColor" size="x-large" variant="elevated">
            <span class="text-h5">{{ avatarText }}</span>
        </v-avatar>
        <p class="text-h4">{{group.name}}</p>
        <p :class="balanceClass">{{balance.toFixed(2)}}</p>
        <p class="text-h5">{{ group.description }}</p>
        <v-btn color="primary" @click="showPayments">Go to group</v-btn>
    </v-sheet>
    <Payments v-if="showPayments"/>

</template>

<script lang="ts">
import randomColor from 'randomcolor';
import {computeGroupBalance} from '@/utils/calculator';
import UserService from '@/services/UserService';
import type { IGroup } from '@/api/interfaces';


export default {
    name: 'GroupPage',
    data(){
        return {
            group: undefined as IGroup | undefined,
            avatarColor: randomColor(),
            balance: 0,
            showPayments: false,
        }
    },
    methods: {
        retrieveGroup(){
            let groupId = this.$route.params.id as string;
            UserService.getGroup(groupId)
            .then((response) => {
                this.group = response.data;
                this.balance = computeGroupBalance(this.group!);
            }).catch((error) => {
                console.log(error);
            })
        },
        setPayments(){
            if(this.showPayments){
                this.showPayments = true;
            }else{
                this.showPayments = false;
            }
        }
    },
    computed: {
        balanceClass() {
            if(!this.group) return '';
            return this.balance >= 0 ? 'text-h4 text-success' : 'text-h4 text-error';
        },
        avatarText() {
            if(!this.group?.name) return

            return this.group.name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .substring(0, 2);
        }
    },
    mounted(){
        this.retrieveGroup();
    },

}
</script>