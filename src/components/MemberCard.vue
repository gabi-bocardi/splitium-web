<template>
</template>
<script lang="ts">
import type { IGroupMember } from '@/api/interfaces';
import type { PropType } from 'vue';


export default {
    name: 'MemberCard',
    props: {
        member: {
            type: Object as PropType<IGroupMember>,
            required: true
        },
    },
}

</script>