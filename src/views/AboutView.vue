<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();

</script>

<template>
    <main>
        <p>
            <button @click="flash('About', 'It Works on the about page!', 'info')">
                Click Me
            </button>
        </p>
    </main>
</template>
