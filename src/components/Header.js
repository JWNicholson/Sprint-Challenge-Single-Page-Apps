import React from "react";
import { NavLink, Link, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>


      <div id="navbar">
        <NavLink exact activeClassName="activeLink" to={"/"}>
          Home
        </NavLink>
        <NavLink exact activeClassName="activeLink" to={"/characters"}>
          Characters
        </NavLink>
       
      </div>
    </header>
  );
}
