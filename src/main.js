import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router/router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/tailwind.css";
import "./style/app.css";

library.add(fas);
library.add(far);

createApp(App).use(createPinia()).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
