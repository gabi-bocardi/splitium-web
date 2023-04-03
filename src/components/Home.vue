<template>
    <Card :group="{name: 'Test Group', balance: 5}"/>
</template>

<script lang="ts">
import Card from './Card.vue';

export default {
    name: 'home',
    components: {
        Card
    }
}

</script>