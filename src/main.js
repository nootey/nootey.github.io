import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router/router";
import { createPinia } from "pinia";
import "./style/tailwind.css";
import "./style/app.css";

createApp(App).use(createPinia()).use(router).mount("#app");
