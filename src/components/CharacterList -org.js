import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  // 
  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
       axios
         .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
          .then(response => {
            console.log("Response - ", response.data.results);
             setCharacters(response.data.results);

            // const characters = response.data.filter(character =>
            //   character.name.toLowerCase().includes(query.toLowerCase())
            // );
            // setData(characters);
          })
            .catch(error => {
              console.log("Error - ", error);
            })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
    <SearchForm />
      <CharacterCard characterData={characters} />
    </section>
  );
}
