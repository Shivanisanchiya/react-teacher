import React from "react";
import Location_temp from "./Location_temp";
import location_data from "./location_data.json";

function locationSearch() {
  return (
    <div className="search">
      <Location_temp placeholder="Enter Skill..." data={location_data} />
    </div>
  );
}

export default locationSearch;
