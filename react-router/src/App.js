import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./components/Home"
import User from "./components/User"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* Explain why Link is used instead of <a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Explain "exact" and the order of Routes in a Switch */}
      <Switch>
          <Route path="/user" component = {User} />
          <Route path="/" component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;
