import { reactive, watch } from "vue";

export const store = reactive({
    isDarkMode: false,
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark', this.isDarkMode)
    },
})

if (store.isDarkMode) {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}