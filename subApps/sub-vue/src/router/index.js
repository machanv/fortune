import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
Vue.use(VueRouter);

const routes = [{ path: "/", name: "home", component: Home }];
export default routes;