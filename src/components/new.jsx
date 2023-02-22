import React, { useState } from "react";
function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />{" "}
      <ul>
        {" "}
        {props.data
          .filter((item) => item.includes(searchQuery))
          .map((item) => (
            <li key={item}>{item}</li>
          ))}{" "}
      </ul>{" "}
    </div>
  );
}

export default SearchBar;
