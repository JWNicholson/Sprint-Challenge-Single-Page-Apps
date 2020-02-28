import React from "react";

export default function SearchForm(props) {
  return (
    <div className="searhbox">
      <input
      className="searchInput"
        onChange={props.handleChange}
        type="text"
        name="search"
        placeholder="Search for Name"
        name="name"
        autoComplete="off"
      />
    </div>
  );
}