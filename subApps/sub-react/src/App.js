import './styles/common.less';
import './App.less';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import DashBoard from './pages/dashboard/dashboard';
import User from './pages/user/user';
import DocPage from './pages/doc/doc-page';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-list">
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/doc">看板</Link>
            </li>
            <li>
              <Link to="/user">用户</Link>
            </li>
          </ul>
        </nav>
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <DashBoard />
            </Route>
            <Route path="/doc">
              <DocPage />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
