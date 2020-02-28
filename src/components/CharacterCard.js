import React from "react";

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <>
      {characterData.map(character => {
        return (
          <div className="characterWrapper">
            <h1>Name-  {character.name}</h1>
            <img src={character.image} />
            <p>Status - {character.status}</p>
            <p>Species - {character.species}</p>
          </div>
        );
      })}
    </>
  );
}
