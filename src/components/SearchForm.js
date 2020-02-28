import React, { useState } from "react";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <section className="search-form">
     <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search for name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}