<template>
    <v-sheet className="d-flex flex-column justify-space-evenly align-center elevation-3 py-7 rounded-lg">
        <!-- <v-avatar :color="avatarColor" size="x-large" variant="elevated">
            <span class="text-h5">{{ avatarText }}</span>
        </v-avatar> -->
        <p class="text-h4">{{group.name}}</p>
        <p :class="balanceClass">{{group.balance.toFixed(2)}}</p>
    </v-sheet>

</template>

<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';


export default {
    name: 'Group',
    data(){
        return {
            group: {
                name: "Test Group",
                balance: 5,
            }
        }
    },
    computed: {
        balanceClass(): string {
            return this.group.balance > 0 ? 'text-h4 text-success' : 'text-h4 text-error';
        }
    }
}
</script>