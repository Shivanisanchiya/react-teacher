import * as React from "react";
import ExpDrop from "./ExpDrop";
// import Location from './Location';

import "./BoxComponent.css";
import Search from "./Search";
import LocationSearch from "./location_search";
import Button from "@mui/material/Button";

function BoxComponent() {
  return (
    <navbar>
      <div className="box">
        <ul className="box_menu">
          <Search />
          <ExpDrop />
          <LocationSearch />
          <Button variant="contained" color="inherit">
            Search
          </Button>
          {/* <Location/> */}
        </ul>
      </div>
    </navbar>
  );
}

export default BoxComponent;
