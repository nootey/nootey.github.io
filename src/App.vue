<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "./services/store/theme";

import Navbar from "../src/components/Navbar.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";

const themeStore = useThemeStore();

onMounted(() => {
    themeStore.applyTheme();
});

const toggleDarkMode = () => {
    themeStore.toggleDarkMode();
    themeStore.applyTheme();
};
</script>

<template>
    <div id="app">
        <Navbar :dark-mode="themeStore.darkMode" @change-theme="toggleDarkMode" />
        <router-view :dark-mode="themeStore.darkMode" />
        <Footer />
    </div>
</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    align-items: center;
    width: 100%;
}

html {
    scroll-behavior: smooth;
}

.content-wrapper {
    flex: 1;
    padding-top: 80px;
    width: 100%;
}

.main-content {
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    position: sticky;
}
</style>
