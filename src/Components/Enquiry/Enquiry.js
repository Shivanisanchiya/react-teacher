import * as React from "react";
import "./Enquiry.css";
import Button from "@mui/material/Button";

function Enquiry() {
  return (
    <div className="enquiry_details">
      <Button
        variant="contained"
        size="large"
        style={{ height: "4vw", width: "30vw", fontSize: "1.2vw" }}
      >
        Didn't find any teacher?
      </Button>
    </div>
  );
}

export default Enquiry;
