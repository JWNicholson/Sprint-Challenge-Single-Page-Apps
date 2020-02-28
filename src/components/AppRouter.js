import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

export default function AppRouter() {
    return (
      <div>     
        <nav className="main-nav">
          <ul>
            <li>
              <Link to=" /">Home</Link>
            </li>
            <li>
                <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
           <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/" component={WelcomePage} />
      </Switch>
      </div>
    );
  }