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

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    color: #2c3e50;
    //justify-content: center;
    align-items: center;
    width: 100%;
}

html {
    scroll-behavior: smooth;
}

.content-wrapper {
    flex: 1;
    padding-top: 80px;
    //margin-bottom: 80px;
    width: 100%;
    /* background: var(--background-color-secondary); */
}

.main-content {
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    position: sticky;
}

.title {
    font-size: 1.4rem;
    font-weight: 1000;
    margin-bottom: 20px;
}
</style>
