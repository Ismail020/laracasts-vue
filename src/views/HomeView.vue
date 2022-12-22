<script setup>
import TheWelcome from "../components/TheWelcome.vue";


let message = $ref("Hello World");

setTimeout(() => {
    message = "Hello Vue 3";
}, 2000);
</script>

<template>
    <main>
        <TheWelcome />
        <p>{{ message }}</p>
        <p>
            <input type="text" v-model="message">
        </p>
    </main>
</template>
