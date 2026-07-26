<template>
    <Home :dark-mode="darkMode" />
    <About :dark-mode="darkMode" />
    <Experience />
    <Projects :dark-mode="darkMode" />
    <Contact :dark-mode="darkMode" />
</template>

<script setup>
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

const props = defineProps(["darkMode"]);
</script>

<style scoped></style>
