<template>
    <div class="d-flex flex-row w-100 position-fixed z-3">
        <div class="navbar">
            <!-- logo -->
            <div class="logo flex flex-row text-center align-items-center mt-1">
                <img :src="darkMode ? nLight : nDark" height="33" />
            </div>

            <!-- nav -->
            <ul v-show="!mobile" class="links">
                <li class="link-item"><a href="/#home">Home</a></li>
                <li class="link-item"><a href="/#about">About</a></li>
                <li class="link-item"><a href="/#projects">Projects</a></li>
                <li class="link-item"><a href="/#contact">Contact</a></li>
                <li class="link-item" :class="{ 'hover-dark': darkMode, 'hover-light': !darkMode }">
                    <font-awesome-icon
                        class="mobile-icon-link"
                        :icon="darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
                        @click="callEmit"
                    />
                </li>
            </ul>

            <div class="toggle-btn">
                <font-awesome-icon
                    class="mobile-icon-link"
                    :icon="nav_open ? ['fas', 'xmark'] : ['fas', 'bars']"
                    @click="toggleNavbar"
                />
            </div>
        </div>
        <transition name="mobile-fade-slide">
            <div v-show="mobile_nav" class="dropdown-menu open">
                <li><a href="/#home" @click="closeMobileNav">Home</a></li>
                <li><a href="/#about" @click="closeMobileNav">About</a></li>
                <li><a href="/#projects" @click="closeMobileNav">Projects</a></li>
                <li><a href="/#contact" @click="closeMobileNav">Contact</a></li>
                <li :class="{ 'hover-dark': darkMode, 'hover-light': !darkMode }">
                    <font-awesome-icon
                        class="mobile-icon-link"
                        :icon="darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
                        @click="callEmit"
                    />
                </li>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import nLight from "../assets/images/n-light.png";
import nDark from "../assets/images/n-dark.png";

const props = defineProps({
    darkMode: Boolean,
});
const emit = defineEmits(["changeTheme"]);

const nav = ref(false);
const mobile = ref(false);
const mobile_nav = ref(false);
const window_width = ref(window.innerWidth);
const nav_open = ref(false);

const onWidthChange = () => {
    window_width.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", onWidthChange);
    watchWidth(); // Initialize on mount
});

onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
});

watch(window_width, () => {
    watchWidth();
});

function watchWidth() {
    if (window_width.value <= 750) {
        mobile.value = true;
    } else {
        mobile.value = false;
        mobile_nav.value = false;
        nav_open.value = false;
    }
}

function toggleNavbar() {
    mobile_nav.value = !mobile_nav.value;
    nav_open.value = !nav_open.value;
}

function callEmit() {
    emit("changeTheme");
    closeMobileNav();
}

function closeMobileNav() {
    mobile_nav.value = false;
    nav_open.value = false;
}
</script>

<style scoped>
.navbar {
    z-index: 2;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 100%;
    height: 60px;
    max-width: 1625px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}

.navbar .logo {
    align-items: center;
}

.navbar .logo a {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar .links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
}

.navbar .links .link-item {
    margin-left: 10px;
    margin-right: 10px;
}

.navbar .toggle-btn {
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
}

.logo {
    height: 40px;
    width: 40px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    font-size: 1rem;
    color: var(--text-color-primary);
}

a:hover {
    color: var(--accent-color);
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(var(--background-color-primary), 0.25);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
    overflow: hidden;
    max-height: 0;
    z-index: 3;
}

.dropdown-menu.open {
    max-height: 500px;
}

.dropdown-menu li {
    display: flex;
    padding: 1rem 0;
    text-align: center;
    background: transparent;
    margin: 0;
}

.dropdown-menu li a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: var(--text-color-primary);
    font-size: 1rem;
    padding: 0;
    margin: 0;
    background: transparent;
}

.navbar .links {
    margin-top: 1rem;
    align-items: center;
}

.dropdown-menu li a:hover {
    color: var(--accent-color);
}

.navbar .links li:after,
.dropdown-menu li a:after {
    content: "";
    display: block;
    margin: auto;
    height: 2px; /* Unified height; adjust to 3px if preferred */
    width: 0;
    background: transparent;
    transition:
        width 0.5s ease,
        background-color 0.5s ease;
}

.navbar .links li:hover:after,
.dropdown-menu li a:hover:after {
    width: 100%;
    background: var(--accent-color);
}

li:hover {
    cursor: pointer;
}

.mobile-icon-link {
    color: var(--text-color-primary);
}

.hover-light:hover .mobile-icon-link {
    color: #ffb10f;
}

.hover-dark:hover .mobile-icon-link {
    color: #ff4f0f;
}

.mobile-fade-slide-enter-active,
.mobile-fade-slide-leave-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

.mobile-fade-slide-enter-from,
.mobile-fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.mobile-fade-slide-enter-to,
.mobile-fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 992px) {
    .navbar {
        justify-content: space-between;
    }

    .navbar .links {
        display: none;
    }

    .navbar .toggle-btn {
        display: block;
    }

    .dropdown-menu {
        display: block;
    }

    .dropdown-menu li {
        display: block;
        width: 100%;
    }

    .dropdown-menu li a {
        display: inline-block;
        width: auto;
    }

    .dropdown-menu li:before,
    .dropdown-menu li:after {
        display: none;
    }
}

@media only screen and (max-width: 850px) {
    .navbar {
        height: 50px;
        width: 99%;
        margin-bottom: 0;
    }
}

@media only screen and (max-width: 1750px) {
    .navbar {
        width: 90%;
    }
}
</style>
