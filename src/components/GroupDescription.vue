<template>
    <v-sheet className="d-flex flex-column justify-space-evenly align-center elevation-3 py-7 px-7 rounded-lg gap">
            <GroupMenu :group="group"/>
            <v-avatar :color="randomColor()" size="x-large" variant="elevated" >
                <span class="text-h5">{{ avatarText(group.name) }}</span>
            </v-avatar>
            <p class="text-h4">{{group.name}}</p>
            <p :class="balanceClass()">{{balance.toFixed(2)}}</p>
            <p class="text-h5">{{ group.description }}</p>
        </v-sheet>
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';
import randomColor from 'randomcolor';
import { avatarText } from '@/utils/avatar';
import GroupMenu from './GroupMenu.vue';
export default {

    name: 'GroupDescription',
    components: {
        GroupMenu,
    },
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
        balance: {
            type: Number,
            required: true
        },
    },
    methods: {
        randomColor,
        avatarText,
        balanceClass() {
            if(!this.group) return '';
            return this.balance >= 0 ? 'text-h4 text-success' : 'text-h4 text-error';
        },
    },
}
</script>