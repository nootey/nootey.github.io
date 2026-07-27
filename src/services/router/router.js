import { createRouter, createWebHistory } from "vue-router";
import Main from "../../components/Main.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Main,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Always scroll to top
        return { top: 0 };
    },
});

export default router;
