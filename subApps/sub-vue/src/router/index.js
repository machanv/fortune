import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import IndexCanvas from "../views/canvas/index-canvas";
import Index3D from "../views/threejs/index-3d";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/2d", name: "2d", component: IndexCanvas },
  { path: "/3d", name: "3d", component: Index3D },
];
export default routes;
