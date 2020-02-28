import React from "react";
import Header from "./components/Header.js";
// import CharacterList from "./components/CharacterList";
import AppRouter from "./components/AppRouter.js";


export default function App() {
  return (
    <main>
      <Header />
      <AppRouter />
      {/* <CharacterList /> */}
    </main>
  );
}
