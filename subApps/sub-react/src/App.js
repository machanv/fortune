import './App.less';
import './styles/common.less';
import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import routeConfig from './router/route-config'
import FrontendAuth from './router/front-end-auth'

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <FrontendAuth routerConfig={routeConfig}/>
      </Switch>
    </BrowserRouter>
  )
}
