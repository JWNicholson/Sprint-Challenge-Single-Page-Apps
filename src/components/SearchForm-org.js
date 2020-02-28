// import React, { useState } from "react";

// export default function SearchForm(props) {
//   const [query, setQuery] = useState("");
//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };
//   return (
//     <section className="search-form">
//      <form className="search">
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           name="name"
//           tabIndex="0"
//           className="prompt search-name"
//           placeholder="search for name"
//           autoComplete="off"
//         />
//       </form>
//     </section>
//   );
// }

import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}