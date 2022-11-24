import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import microApps from "./micro-app";
import { registerMicroApps } from "qiankun";

const app = createApp(App);
registerMicroApps(microApps, {});
app.use(createPinia());
app.use(router);

app.mount("#app");
