<script setup>
defineProps({
    show: Boolean
});
</script>

<template>
    <Transition enter-from-class="opacity-0" enter-to-class="opacity-100" enter-active-class="transition duration-300"
        leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <main>
                    <slot>
                        Default Content
                    </slot>
                </main>

                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    color: black;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}

.modal-footer button {
    background: #ddd;
    padding: 0.25rem .75rem;
    border-radius: 20px;
}

.modal-footer button:hover {
    background: #c8c8c8;
}
</style>