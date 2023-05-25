import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Location_temp({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <Autocomplete
          style={{ backgroundColor: "white" }}
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.location}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />
      </div>
    </div>
  );
}

export default Location_temp;
