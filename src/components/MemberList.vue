<template>
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
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';
import randomColor from 'randomcolor';
import { avatarText } from '@/utils/avatar';
import { computeMemberBalance } from '@/utils/calculator';

export default {
    name: 'MemberList',
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
    },
    methods: {
        randomColor,
        avatarText,
        computeMemberBalance,
    },

}

</script>