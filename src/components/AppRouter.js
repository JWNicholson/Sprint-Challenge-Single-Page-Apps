import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

export default function AppRouter() {
    <div>
        <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route component={WelcomePage} />
        </Switch>
    </div>
}