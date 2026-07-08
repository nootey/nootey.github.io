<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-if="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
    animationType: {
        type: String,
        default: "fade",
    },
});

const target = ref(null);
const animate = ref(false);

const observer = new IntersectionObserver(
    ([entry]) => {
        animate.value = entry.isIntersecting;
    },
    {
        threshold: 0.5,
    },
);

onMounted(() => {
    if (target.value) {
        observer.observe(target.value);
    }
});
</script>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
    transition: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
    transition: transform 300ms ease;
}

.zoom-enter-from,
.zoom-leave-to {
    transform: scale(0.9);
}
</style>
