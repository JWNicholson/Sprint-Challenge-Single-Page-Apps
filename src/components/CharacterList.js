import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data);
        const character = res.data.results.filter(a =>
          a.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(character);
        console.log(character);
      })
      .catch(err => console.log(err.response));
  }, [query]);

  return (
    <div>
      <SearchForm value={query} handleChange={handleChange} />
      <div>
        {characters.map(c => {
          return (
            <CharacterCard
              name={c.name}
              status={c.status}
              species={c.species}
            />
          );
        })}
      </div>
    </div>
  );
}