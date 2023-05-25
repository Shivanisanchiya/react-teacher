import * as React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <h1
        style={{
          fontSize: "3vw",
          textShadow: "0.2vw 0.2vw #C0AFE2",
          fontFamily: "Verdana",
        }}
      >
        Find Your Ideal Teacher
      </h1>
    </div>
  );
}

export default Title;
