<template>
    <v-container fluid className=".d-flex">
        <v-avatar :color="avatarColor">
            <span class="text-h5">{{ avatarText }}</span>
        </v-avatar>
        <p class="text-subtitle-1">{{group.name}}</p>
        <p class="text-h4">{{group.balance.toFixed(2)}}</p>
    </v-container>

</template>

<script lang="ts">
import  randomColor  from 'randomcolor';
export default {
    name: 'Card',
    props: {
        group: Object
    },
    data(){
        return {
            avatarColor: randomColor(),
            avatarText: "",
            group: {
                name: "groupName",
                balance: 0.00
            }
        }
    },
}
</script>