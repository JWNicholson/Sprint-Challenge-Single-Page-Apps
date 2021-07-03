import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
 background:darkslategrey;
 height:36px;
 padding:10px;
 display:flex;
 align-items:center;
`;



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

   
      <NavBar>
        <NavLink exact activeClassName="activeLink" to={"/"}>
          Home
        </NavLink>
      
        <NavLink exact activeClassName="activeLink" to={"/characters"}>
          Characters
        </NavLink>
       
      </NavBar>
    </header>
  );
}