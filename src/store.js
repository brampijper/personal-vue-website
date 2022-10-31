import { reactive } from "vue";

export const store = reactive({
    darkMode: false,
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }
})