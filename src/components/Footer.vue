<template>
    <footer class="footer">
        <div style="font-size: 1rem; background: var(--footer-color); color: white" class="align-items-center;">
            Copyright © {{ currentYear }} | Nootey | All Rights Reserved
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
    border-top: 20px solid var(--accent-color);
    margin-top: -140px;
    background: var(--footer-color);
    color: var(--text-color-primary);
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 100%;
    height: 150px;
}
</style>
