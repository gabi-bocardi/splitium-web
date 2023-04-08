<template>
    <v-container className="align-self-end">
        <v-menu open-on-click>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list min-width="200">
                <v-list-item>
                    <v-dialog
                        v-model="addFormDialog"
                        activator="parent"
                        width="auto"
                        >
                        <template v-slot:activator="{props}">
                                <v-list-item-title className="text-h6">Add Member</v-list-item-title>
                        </template>
                            <AddMemberForm :group="group"/>
                        </v-dialog>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title className="text-h6">Add Payment</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-dialog
                        v-model="deleteGroupDialog"
                        activator="parent"
                        width="auto"
                        >
                            <template v-slot:activator="{props}">
                                <v-list-item-title className="text-h6">Delete Group</v-list-item-title>
                            </template>
                            <DeleteGroupModal :group="group" />
                        </v-dialog>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>
<script lang="ts">
import type { IGroup } from '@/api/interfaces';
import type { PropType } from 'vue';
import AddMemberForm from './AddMemberForm.vue';
import DeleteGroupModal from './DeleteGroupModal.vue';
import DeleteMemberForm from './DeleteMemberForm.vue';


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
    DeleteMemberForm,
    DeleteGroupModal,
},
    data() {
        return {
            deleteFormDialog: false,
            addFormDialog: false,
            deleteGroupDialog: false,
        };
    },
    methods: {
    },
}
</script>