<template>
    <div v-if="group">
        <GroupDescription :group="group" :balance="balance" />
        <v-container className="d-flex justify-space-evenly">
            <v-sheet className="elevation-3 py-7 rounded-lg d-flex flex-column justify-space-evenly align-center elevation flex-grow-1">
                <p class="text-h4"> Members</p>
                <v-list lines="two" className="'elevated'">
                    <v-list-item
                    v-for="member in group.groupMember"
                    :key="member.id"
                    className="my-8 d-flex justify-space-between align-center"
                    minWidth="300"
                    >
                        <template v-slot:prepend>
                            <v-avatar :color="randomColor()" size="x-large">
                                <span class="text-h5">{{ avatarText(member.user.name) }}</span>
                             </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6">
                            {{member.user.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            This member owns ${{computeMemberBalance(member, group.payments).toFixed(2)}} of ${{ member.amount.toFixed(2) }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>    
            </v-sheet>

            <v-sheet className="elevation-3 py-7 rounded-lg d-flex flex-column justify-space-evenly align-center elevation flex-grow-1">
                <p class="text-h4"> Payments</p>
                <v-list lines="two" v-if="group.payments.length > 0" className="elevated">
                    <v-list-item
                    v-for="payment in group.payments"
                    :key="payment.userId"
                >
                    <v-list-item-title class="text-h6">
                        From {{payment.user.name}} of ${{payment.amount.toFixed(2)}}
                    </v-list-item-title>
                </v-list-item>
                </v-list>    
                <p v-else> No payments made yet</p>
            </v-sheet>

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


export default {
    name: "GroupPage",
    components: {
        GroupDescription,
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