import React from "react";
import Card from "react-bootstrap/Card";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import background from "../../assets/background_images/homepage.svg";

function FirstLanding() {
  return (
    <Card style={Cards}>
      <Card.Body style={CardStyle}>
        <Card.Title>
          <h1 style={H1Style}>Be truly borderless</h1>
        </Card.Title>
        <Card.Text>
          <p style={PStyle}>
            Send and receive money globally. Create virtual dollar cards that
            work anywhere online.
          </p>
        </Card.Text>
        <Card.Text style={Buttons}>
          <Button style={ButtonStyle}>
            <FaGooglePlay style={{ fontSize: "40px" }} /> Google Play
          </Button>
          <Button style={ButtonStyle}>
            <BsApple style={{ fontSize: "40px" }} /> App Store
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const ButtonStyle = {
  borderRadius: "3px",
  width: "170px",
  height: "50px",
  cursor: "pointer",
  backgroundColor: "transparent",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};
const H1Style = {
  fontSize: "60px",
  width: "100%",
  height: "100px",
};
const PStyle = {
  fontSize: "30px",
  width: "100%",
  height: "120px",
  textAlign: "center",
};
const CardStyle = {
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontWeight: "400",
  color: "#1d222c",
  margin: "auto",
  gap: "50px",
  padding: "0",
};
const Cards = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 160%",
  backgroundRepeat: "no-repeat",
  padding: "0",
  backgroundColor: "#fdefd8",
};

const Buttons = {
  display: "flex",
  gap: "30px",
};

export default FirstLanding;
