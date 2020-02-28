import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  width:380px;
  margin-bottom:48px;
  border:1px solid grey;
  border-radius:8px;
  text-align:center;
  background-color:ghostwhite;
  -webkit-box-shadow: -2px 8px 8px -4px rgba(0,0,0,0.54); 
box-shadow: -2px 8px 8px -4px rgba(0,0,0,0.54);
`;

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <>
      {characterData.map(character => {
        return (
          <CharacterWrapper>
            <h1>Name-  {character.name}</h1>
            <img src={character.image} />
            <p>Status - {character.status}</p>
            <p>Species - {character.species}</p>
          </CharacterWrapper>
        );
      })}
    </>
  );
}
