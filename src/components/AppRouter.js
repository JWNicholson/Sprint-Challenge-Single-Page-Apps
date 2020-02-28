import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

export default function AppRouter() {
    return (
      <div>     
        <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/charcters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/characters" component={CharacterList} />
          <Route component={WelcomePage} />
        </Switch>
      </div>
    </Router>
      </div>
    );
  }