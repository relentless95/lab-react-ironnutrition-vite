import React, { useState } from "react";
import { Divider, Input } from "antd";

function Search({setSearchTerm, searchTerm}) {
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
