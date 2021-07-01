import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import CanvasList from "../views/canvas/canvas-list";
import Index3D from "../views/threejs/index-3d";
import LoadingEffect from '../views/canvas/loading-effect';
import EffectList from '../views/effect/effect-list';
import NeonLight from '../components/btns/neon-light';

Vue.use(VueRouter);

const routes = [
  {path: "/", name: "home", component: Home},
  {
    path: "/2d", name: "2d", component: CanvasList,
    children: [
      {path: 'loading', component: LoadingEffect}
    ]
  },
  {path: "/3d", name: "3d", component: Index3D},
  {
    path: "/css-effect", name: "css-effect", component: EffectList,
    children: [
      {path: 'neon-light', component: NeonLight}
    ]
  },
];
export default routes;
