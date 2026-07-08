import { createRouter, createWebHistory } from "vue-router";
import App from "../../App.vue";
import ProjectDisplay from "../../components/ProjectDisplay.vue";
import Main from "../../components/Main.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Main,
    },
    {
        path: "/project-view",
        name: "project-view",
        component: ProjectDisplay,
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
