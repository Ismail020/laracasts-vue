import {
    ref,
    watch
} from "vue";

export function useStorage(key, value = null) {
    let storedValue = read();

    if (storedValue) {
        value = ref(storedValue);
    } else {
        value = ref(value);

        write();
    }

    watch(value, write);

    function read() {
        return localStorage.getItem(key);
    }

    function write() {
        if (value.value == null || value.value == "") {
            localStorage.removeItem(key);
            return;
        } else {
            localStorage.setItem(key, value.value);
        }
    }

    return value;
}
