import { reactive } from "vue";

export const store = reactive({
    isDarkMode: true,
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
    },
})