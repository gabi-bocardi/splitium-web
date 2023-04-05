<template>
    <v-sheet className="d-flex flex-column justify-space-evenly align-center elevation-3 py-7 rounded-lg">
        <v-avatar :color="avatarColor" size="x-large" variant="elevated">
            <!-- <span class="text-h5">{{ avatarText }}</span> -->
        </v-avatar>
        <p class="text-h4">{{group.name}}</p>
        <p :class="balanceClass">{{group.balance.toFixed(2)}}</p>
        <p class="text-h5">{{ group.description }}</p>
    </v-sheet>

</template>

<script lang="ts">
import randomColor from 'randomcolor';

const group = {
    name: "Test Group",
    balance: 5,
    description: "This is a test group"
}

export default {
    name: 'Group',
    data(){
        return {
            group: {
                name: "Test Group",
                balance: 5,
                description: "This is a test group"
            },
            avatarColor: randomColor(),
            // avatarText: this.group.name
            //     .split(' ')
            //     .map((word) => word[0])
            //     .join('')
            //     .substring(0, 2),
        }
    },

    computed: {
        balanceClass(): string {
            return this.group.balance > 0 ? 'text-h4 text-success' : 'text-h4 text-error';
        }
    }
}
</script>