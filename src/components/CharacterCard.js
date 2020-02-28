import React from "react";
import styled from "styled-components"

const CardWrapper = styled.div`
  border:1px solid grey;
  border-radius: 8px;
  margin: 24px auto;
  width: 360px;
  padding:18px;
  text-align:left;
  color:darkslategrey;
  background: ghostwhite;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.36); 
   box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.36);
`;

 export default function CharacterCard(props) {
   return(
     <CardWrapper>
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
     </CardWrapper>
   );
 }
