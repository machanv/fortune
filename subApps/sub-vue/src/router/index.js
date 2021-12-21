import Home from '../pages/home.vue';
import Login from '../pages/user/login.vue';
import IndexPage from '../pages/index-page.vue';
import CanvasPage from '../pages/canvas/canvas.vue';
import CanvasList from '../pages/canvas/canvas-list.vue';
import ThreeDPage from '../pages/three-d/three-d.vue';

const routers = [
  {
    path: '',
    component: Home,
  },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{ path: '', name: '', component: IndexPage }],
  },
  {
    path: '/canvas',
    component: CanvasPage,
    children: [{ path: '/', component: CanvasList }],
  },
  {
    path: '/three-d',
    component: ThreeDPage,
  },
];

export default routers;
