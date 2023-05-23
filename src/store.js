import { reactive } from "vue";

export const store = reactive({
    isDarkMode: false,
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
    },
})