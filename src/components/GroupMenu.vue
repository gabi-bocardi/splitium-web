<template>
    <v-container className="align-self-end">
        <v-menu open-on-click>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list min-width="200">
                <v-dialog
                    v-model="addFormDialog"
                    activator="parent"
                    width="auto"
                    >
                    <template v-slot:activator="{props}">
                        <v-list-item>
                            <v-list-item-title className="text-h6" @click="setShowMemberForm">Add Member</v-list-item-title>
                        </v-list-item>
                    </template>
                    <AddMemberForm :group="group"/>
                </v-dialog>
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
import AddMemberForm from './AddMemberForm.vue';

export default{
    name: "GroupMenu",
    props: {
        group: {
            type: Object as PropType<IGroup>,
            required: true
        },
    },
    components: { 
        AddMemberForm,
     },
    data() {
        return {
            showMemberForm: false,
            addFormDialog: false,
        };
    },
    methods: {
        setShowMemberForm() {
            if (this.showMemberForm) {
                this.showMemberForm = false;
            }
            else {
                this.showMemberForm = true;
            }
        },
    },
}
</script>