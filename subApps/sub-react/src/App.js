// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.less';
import './styles/common.less';
import Login from './containers/login/login';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/index">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
