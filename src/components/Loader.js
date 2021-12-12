import React from "react";
import { Spinner } from "react-bootstrap";
function Loader() {
  return (
    <div>
      <Spinner
        animatio="border"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="sr-only"></span>
      </Spinner>
    </div>
  );
}

export default Loader;
