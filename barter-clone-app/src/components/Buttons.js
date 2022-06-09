import React from "react";
import Button from "react-bootstrap/Button";

function Buttons() {
  return (
    <Button variant="outline-secondary" style={ButtonStyle}></Button>
  );
}

const ButtonStyle = {
  borderRadius: "3px",
  color: "inherit",
  display: "inline-block",
  width: "170px",
  height: "50px",
  border: "2px solid #333",
  cursor: "pointer",
  backgroundColor: "transparent",
};
export default Buttons;
