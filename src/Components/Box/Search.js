import React from "react";
import SearchBar from "./SearchBar";
import Data from "./Data.json";

function Search() {
  return (
    <div className="search">
      <SearchBar placeholder="Enter Skill..." data={Data} />
    </div>
  );
}

export default Search;
