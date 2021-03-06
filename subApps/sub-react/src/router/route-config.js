import Login from "../pages/login/login";
import DashBoard from "../pages/dashboard/dashboard";
import DocPage from "../pages/doc/doc-page";
import User from "../pages/user/user";
import NotFound from "./not-found";

const routeConfig = [
  {path: '/login', component: Login, auth: false},
  {
    path: '/admin', component: DashBoard, auth: true,
    childRoutes: [
      {path: '/admin/doc', component: DocPage, auth: true},
      {path: '/admin/user', component: User, auth: true},
    ]
  }, {
    path: '/not-found', component: NotFound
  }
]
export default routeConfig
