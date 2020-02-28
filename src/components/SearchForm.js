import React from "react";
import styled from "styled-components";

const SearchBox = styled.div`
    margin:24px;
`;

export default function SearchForm(props) {
  return (
    <SearchBox>
      <input
      className="searchInput"
        onChange={props.handleChange}
        type="text"
        name="search"
        placeholder="Search for Name"
        name="name"
        autoComplete="off"
      />
    </SearchBox>
  );
}