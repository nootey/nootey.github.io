<template>
    <footer class="border-accent bg-footer w-full border-t-4 py-8 text-center">
        <p class="text-sm font-light text-white/70">Copyright © {{ currentYear }} | Nootey | All Rights Reserved</p>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
