import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import About from "./About";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../App";

const Navbar = () => {
  let login = useContext(loginContext);

  return (
    <Router>
      <div>
        <section className="navbar">
          <div className="nav-element">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-element">
            {login.loginStatus ? (
              <Link to="/Dashboard">Dashboard</Link>
            ) : (
              <Link to="/">Dashboard</Link>
            )}
          </div>
          <div className="nav-element">
            {login.loginStatus ? (
              <Link to="/Profile"> Profile</Link>
            ) : (
              <Link to="/">Profile</Link>
            )}
          </div>
          <div className="nav-element">
            <Link to="/About">About</Link>
          </div>
        </section>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {login.loginStatus && (
            <Route path="/profile" exact>
              <Profile />
            </Route>
          )}
          {login.loginStatus && (
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          )}
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Navbar;
