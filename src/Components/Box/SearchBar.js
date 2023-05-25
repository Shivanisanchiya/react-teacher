import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Data from "./Data.json";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <Autocomplete
          style={{ backgroundColor: "white" }}
          id="combo-box-demo"
          options={data}
          sx={{ width: 300}}
          getOptionLabel={(option) => option.skill}
          renderInput={(params) => <TextField {...params} label="Skill" />}
          required
        />
      </div>
    </div>
  );
}

export default SearchBar;
