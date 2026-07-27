<template>
    <div class="progress-bar fixed top-0 left-0 z-[1000] h-[3px]" :style="{ width: `${scroll_progress}%` }" />

    <header class="header fixed inset-x-0 top-0 z-[900] h-16 flex items-center" :class="{ 'is-scrolled': scrolled }">
        <div class="mx-auto flex w-[90%] max-w-[1100px] items-center justify-between gap-6">
            <a href="/#home" class="flex shrink-0 items-center" @click="closeMobileNav">
                <img :src="darkMode ? nLight : nDark" class="h-[33px] w-auto" alt="Home" />
            </a>

            <nav
                class="nav flex items-center max-md:fixed max-md:inset-x-0 max-md:top-16 max-md:bottom-0 max-md:z-[800] max-md:justify-center max-md:bg-primary"
                :class="{ 'is-open': mobile_nav }"
            >
                <ul class="flex items-center gap-8 max-md:flex-col max-md:gap-7">
                    <li v-for="item in nav_items" :key="item.id">
                        <a
                            class="nav-link text-muted max-md:text-xl"
                            :class="{ 'is-active': active_id === item.id }"
                            :href="`/#${item.id}`"
                            @click="closeMobileNav"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="-mr-2 flex items-center gap-2">
                <button
                    class="icon-btn inline-flex items-center justify-center"
                    :aria-label="darkMode ? 'Switch to light theme' : 'Switch to dark theme'"
                    @click="callEmit"
                >
                    <svg
                        v-if="darkMode"
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path
                            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                        />
                    </svg>
                    <svg
                        v-else
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>

                <button
                    class="icon-btn inline-flex items-center justify-center md:hidden"
                    aria-label="Toggle menu"
                    :aria-expanded="String(mobile_nav)"
                    @click="toggleNavbar"
                >
                    <svg
                        v-if="mobile_nav"
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <svg
                        v-else
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import nLight from "../assets/images/n-light.png";
import nDark from "../assets/images/n-dark.png";

defineProps({
    darkMode: Boolean,
});
const emit = defineEmits(["changeTheme"]);

const nav_items = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const mobile_nav = ref(false);
const scrolled = ref(false);
const scroll_progress = ref(0);
const active_id = ref("");

const spy_ids = ["home", ...nav_items.map((item) => item.id)];

function onScroll() {
    scrolled.value = window.scrollY > 8;

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scroll_progress.value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    updateActive();
}

/*
 * Looked up fresh, not cached: sections are rendered by sibling components, so a
 * re-render swaps the nodes and a held reference goes stale. The line sits a third
 * of the way down rather than under the header: sections carry 6rem of top padding,
 * so a section's top edge trails its visible heading by roughly that much.
 */
function updateActive() {
    let current = "";
    const line = Math.max(96, window.innerHeight * 0.35);

    for (const id of spy_ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
    }

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable > 0 && window.scrollY >= scrollable - 2) current = spy_ids[spy_ids.length - 1];

    active_id.value = current;
}

function toggleNavbar() {
    mobile_nav.value = !mobile_nav.value;
    document.body.style.overflow = mobile_nav.value ? "hidden" : "";
}

function closeMobileNav() {
    mobile_nav.value = false;
    document.body.style.overflow = "";
}

function callEmit() {
    emit("changeTheme");
    closeMobileNav();
}

onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    document.body.style.overflow = "";
});
</script>

<style scoped>
.progress-bar {
    background-image: linear-gradient(90deg, var(--accent-color), var(--accent-2-color));
}

/*
 * The blur sits on a ::before layer rather than on .header itself: a
 * backdrop-filter on .header would make it a containing block for its
 * position:fixed descendants, collapsing the mobile nav overlay into the
 * 64px header box instead of the viewport.
 */
.header::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-color: color-mix(in srgb, var(--background-color-primary) 65%, transparent);
    backdrop-filter: blur(14px) saturate(150%);
    -webkit-backdrop-filter: blur(14px) saturate(150%);
}

.header {
    border-bottom: 1px solid transparent;
    transition:
        border-color 0.35s ease,
        box-shadow 0.35s ease;
}

.header.is-scrolled {
    border-bottom-color: var(--border-subtle);
    box-shadow: var(--shadow);
}

.icon-btn {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--text-color-secondary);
    cursor: pointer;
    transition:
        color 0.25s ease,
        background-color 0.25s ease,
        transform 0.25s ease;
}

.icon-btn:hover {
    color: var(--accent-color);
    background-color: color-mix(in srgb, var(--accent-color) 10%, transparent);
    transform: translateY(-1px);
}

.nav-link {
    position: relative;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.25s ease;
}

.nav-link::after {
    content: "";
    position: absolute;
    inset-inline: 0;
    bottom: -6px;
    height: 2px;
    border-radius: 2px;
    background-image: linear-gradient(90deg, var(--accent-color), var(--accent-2-color));
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}

.nav-link:hover,
.nav-link.is-active {
    color: var(--text-color-primary);
}

.nav-link:hover::after,
.nav-link.is-active::after {
    transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
    .nav-link::after {
        transition: none;
    }
}

@media (max-width: 767px) {
    .nav {
        transform: translateX(100%);
        transition: transform 0.35s ease;
    }

    .nav.is-open {
        transform: translateX(0);
    }
}
</style>
