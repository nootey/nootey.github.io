<template>
    <section id="home" class="section flex min-h-svh flex-col justify-center">
        <div class="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div class="order-2 flex flex-col gap-4 text-center md:order-1 md:text-left">
                <animated-component>
                    <h1 class="text-[2rem] font-[1000] tracking-[0.1em] sm:text-[2.5rem] lg:text-5xl">Nootey</h1>
                </animated-component>

                <p class="text-muted text-lg sm:text-xl">
                    I build
                    <span class="text-accent">{{ typed_role }}</span>
                    <span
                        class="caret ml-[3px] inline-block h-[1em] w-0.5 bg-accent align-text-bottom"
                        aria-hidden="true"
                    />
                </p>

                <p class="text-muted font-light">
                    I’m a backend software engineer, with a strong foundation in full stack development. I use good
                    coding practices and write clean, test-driven code. I’m constantly learning while exploring personal
                    projects in my spare time.
                </p>

                <div class="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <a href="#contact" class="w-50">
                        <button class="main-button" tabIndex="-1">Contact</button>
                    </a>
                </div>
            </div>

            <div class="order-1 grid place-items-center md:order-2 md:justify-items-end">
                <div class="relative grid place-items-center">
                    <span
                        class="pointer-events-none absolute aspect-square w-[128%] translate-x-[9%] translate-y-[11%] rounded-full bg-[radial-gradient(circle,var(--hero-glow)_0%,transparent_65%)] blur-[26px]"
                        aria-hidden="true"
                    />
                    <img
                        :src="nLogo"
                        alt="Penguin logo"
                        class="hero-img relative w-full max-w-[200px] rounded-full border border-subtle bg-[var(--hero-plate)] p-4 shadow-[8px_12px_22px_-6px_var(--hero-glow),var(--shadow)] sm:max-w-[260px] md:max-w-[320px]"
                    />
                </div>
            </div>
        </div>

        <a
            href="#about"
            class="relative mx-auto mt-20 h-11 w-8 text-faint transition-colors hover:text-accent"
            aria-label="Scroll to about"
        >
            <svg
                v-for="i in 2"
                :key="i"
                class="chevron absolute inset-x-0 top-0 h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </a>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";
import nLogo from "../assets/images/n-logo.png";

defineProps({
    darkMode: Boolean,
});

const roles = ["distributed systems.", "automation scripts.", "full stack products."];
const typed_role = ref("");

let phrase_index = 0;
let char_index = 0;
let deleting = false;
let timer = null;

/* setTimeout, not a steps() keyframe: the phrases differ in length and this deletes. */
function tick() {
    const phrase = roles[phrase_index];

    if (deleting) {
        char_index -= 1;
        typed_role.value = phrase.slice(0, char_index);

        if (char_index === 0) {
            deleting = false;
            phrase_index = (phrase_index + 1) % roles.length;
            timer = setTimeout(tick, 300);
            return;
        }

        timer = setTimeout(tick, 30);
        return;
    }

    char_index += 1;
    typed_role.value = phrase.slice(0, char_index);

    if (char_index === phrase.length) {
        deleting = true;
        timer = setTimeout(tick, 1600);
        return;
    }

    timer = setTimeout(tick, 55);
}

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        typed_role.value = roles[0];
        return;
    }

    tick();
});

onUnmounted(() => clearTimeout(timer));
</script>

<style scoped>
.caret {
    animation: caret-blink 0.8s steps(1) infinite;
}

@keyframes caret-blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.hero-img {
    animation: bob 6s ease-in-out infinite;
}

@keyframes bob {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-12px);
    }
}

.chevron {
    animation: chase 2.4s ease-in-out infinite;
}

.chevron:last-child {
    animation-delay: -1.2s;
}

@keyframes chase {
    0% {
        opacity: 0;
        transform: translateY(-6px);
    }
    35% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(14px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .hero-img,
    .chevron,
    .caret {
        animation: none;
    }

    .chevron:last-child {
        display: none;
    }
}
</style>
