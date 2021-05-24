// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./containers/home";
import Algorithm from './containers/algorithm/algorithm';
import './App.css';
import './styles/common.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/react">Home</Link></li>
            <li><Link to="/algorithm">算法</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/algorithm">
            <Algorithm/>
          </Route>
          <Route path="/react">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
