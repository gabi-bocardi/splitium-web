<template>
    <v-container fluid className="'.d-flex'">
        <v-avatar>
            <span class="text-h5"></span>
        </v-avatar>
        <p class="text-subtitle-1">{{group.name}}</p>
        <p class="text-h4">{{group.balance.toFixed(2)}}</p>
    </v-container>

</template>

<script lang="ts">
export default {
    name: 'Card',
    data(){
        return {
            group: {
                name: "groupName",
                balance: 0.00
            }
        }
    }
}
</script>