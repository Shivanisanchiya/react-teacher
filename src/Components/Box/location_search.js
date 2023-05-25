import React from "react";
import Location_temp from "./Location_temp";
import data from "./location_data.json";

function LocationSearch() {
  return (
    <div className="locationsearch">
      <Location_temp placeholder="Enter Location..." data={data} />
    </div>
  );
}

export default LocationSearch;
