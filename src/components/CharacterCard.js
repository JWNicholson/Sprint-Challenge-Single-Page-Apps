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

const ImageWrapper = styled.div`
  width:100%;
  text-align:center;
`;
 
const CardImage = styled.img`
  border:1px solid grey;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.36); 
  box-shadow: 1px 1px 6px -1px rgba(0,0,0,0.36);
`;

 export default function CharacterCard(props) {
   return(
     <CardWrapper>
      <h2>Name: {props.name}</h2>
      <ImageWrapper>
      <CardImage src={props.image} />
      </ImageWrapper>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
     </CardWrapper>
   );
 }
