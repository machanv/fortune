// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.less';
import './styles/common.less';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-list">
          <ul>
            <li><Link to="/inde">Home</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/inde">

          </Route>
        </Switch>
      </div>
    </Router>
  )
}
