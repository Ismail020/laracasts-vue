<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue';
import { ref } from 'vue';

let comment = ref('test value');
</script>

<template>
    <main>
        <form action="">
            <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" />
        </form>
    </main>
</template>
