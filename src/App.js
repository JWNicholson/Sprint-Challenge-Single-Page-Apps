import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <Route
        exact path="/"
        render={props => {
          
          return <WelcomePage {...props} />;
        }}
      ></Route>
      <Route 
      path="/characters"
        render={props => {
          return <CharacterList {...props} />;
        }}
      ></Route>
    </main>
  );
}