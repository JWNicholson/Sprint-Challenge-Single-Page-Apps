import React from "react";

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <>
      {characterData.map(character => {
        return (
          <div className="characterWrapper">
           
            <h1>{character.name}</h1>
            
          </div>
        );
      })}
    </>
  );
}
