import React from "react";
import Header from "./components/Header.js";
// import CharacterList from "./components/CharacterList";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <AppRouter />
      <SearchForm />
      {/* <CharacterList /> */}
    </main>
  );
}
