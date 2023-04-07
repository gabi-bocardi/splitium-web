<template>
    <v-container className="align-self-end">
        <v-menu open-on-click>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list min-width="200">
                <v-list-item>
                    <v-list-item-title className="text-h6" @click="addMemberForm">Add Member</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title className="text-h6">Delete</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';

export default{
    name: 'GroupMenu',
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
    },
    methods: {
        addMemberForm() {
            console.log("Add Member Form");
        },
    },
}
</script>