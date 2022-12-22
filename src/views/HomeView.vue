<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();

</script>

<template>
    <main>
        <p>
            <button @click="flash('Home', 'It Works on the Home page!')">
                Click Me
            </button>
        </p>
    </main>
</template>
