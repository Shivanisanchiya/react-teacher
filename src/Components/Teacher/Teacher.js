import * as React from "react";
import "./Teacher.css";
import Button from "@mui/material/Button";

function Teacher() {
  return (
    <div className="teacher_details">
      <Button
        variant="contained"
        size="large"
        style={{ height: "4vw", width: "30vw", fontSize: "1.2vw" }}
      >
        Want to be a Teacher
      </Button>
    </div>
  );
}

export default Teacher;
