<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food', 'pizza');
let age = useStorage('age', 21);
</script>

<template>
    <main>
        <p>
            What is your favorite food? <input type="text" v-model="food">
        </p>

        <p>
            How old are you? <input type="text" v-model="age">
        </p>
    </main>
</template>
