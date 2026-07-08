import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        darkMode: localStorage.getItem("darkMode") !== "false", // Default to dark theme unless explicitly set to false
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem("darkMode", this.darkMode);
        },
        applyTheme() {
            const theme = this.darkMode ? "dark" : "light";
            document.documentElement.setAttribute("theme", theme);
        },
    },
});
