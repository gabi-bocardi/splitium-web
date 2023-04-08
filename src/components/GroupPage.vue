<template>
    <div v-if="group">
        <GroupDescription :group="group" :balance="balance" />
        <v-container className="d-flex justify-space-evenly">
            <MemberList :group="group"/>
            <PaymentsList :group="group"/>
        </v-container>
    </div>

</template>

<script lang="ts">

import randomColor from 'randomcolor';
import {avatarText} from '@/utils/avatar';
import {computeGroupBalance, computeMemberBalance} from '@/utils/calculator';
import GroupService from '@/services/GroupService';
import type { IGroup } from '@/api/interfaces';
import GroupDescription from './GroupDescription.vue';
import MemberList from './MemberList.vue';
import PaymentsList from './PaymentsList.vue';


export default {
    name: "GroupPage",
    components: {
    GroupDescription,
    MemberList,
    PaymentsList,
},
    data() {
        return {
            group: undefined as IGroup | undefined,
            avatarColor: randomColor(),
            balance: 0,
            showPayments: false,
        };
    },
    methods: {
        retrieveGroup() {
            let groupId = this.$route.params.id as string;
            GroupService.getGroup(groupId)
                .then((response) => {
                this.group = response.data;
                this.balance = computeGroupBalance(this.group!);
            }).catch((error) => {
                console.log(error);
            });
        },
        setPayments() {
            if (this.showPayments) {
                this.showPayments = true;
            }
            else {
                this.showPayments = false;
            }
        },
        computeMemberBalance,
        randomColor,
        avatarText,
    },
    computed: {
        balanceClass() {
            if (!this.group)
                return "";
            return this.balance >= 0 ? "text-h4 text-success" : "text-h4 text-error";
        },
        avatar() {
            if (!this.group?.name)
                return;
            return avatarText(this.group.name);
        },
    },
    mounted() {
        this.retrieveGroup();
    },
}
</script>
<style>
    .gap{
        gap: 15px;
    }
    .list-item{
        font-size: 1.5rem;
    }
</style>