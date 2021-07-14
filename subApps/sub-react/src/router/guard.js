import NotFound from "./not-found";

const Guard = (props) => {
  const {location, routeConfig, isLogin} = props
  const targetPath = location && location.pathname
  const targetRoute = routeConfig.find(item => targetPath && Guard.switchRoute(item.path, targetPath))
  if (!targetRoute) {
    return <NotFound/>
  }
  if (isLogin) {
    return <LoginHandler targetRoute={targetRoute}></LoginHandler>
  } else {
    return <NotLoginHandler targetRoute={targetRoute}></NotLoginHandler>
  }
}

//已经登陆的状态下，处理路由
function LoginHandler(props) {
  const {targetRoute} = props
  const {path} = targetRoute
  if (path === '/login') {
    return <Redirect to="/console/main"></Redirect>
  } else {
    return <Route path={targetRoute.path} render={props => (
      <targetRoute.component {...props} childRoutes={targetRoute.childRoutes}></targetRoute.component>)}></Route>
  }
}

//未登录状态下，处理路由
function NotLoginHandler(props) {
  const {targetRoute} = props
  const {auth} = targetRoute
  if (auth) {
    return <Redirect to="/login"></Redirect>
  } else {
    return <Route path={targetRoute.path} render={props => (
      <targetRoute.component {...props} childRoutes={targetRoute.childRoutes}></targetRoute.component>)}></Route>
  }
}

export default Guard
