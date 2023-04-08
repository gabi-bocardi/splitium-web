<template>
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

</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';

export default {
    name: "PaymentsList",
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
    },
}
</script>