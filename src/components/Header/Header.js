import React from "react";
import Navigation from "../Nav/Navigation";
import "./style.css";

const Header = (props) => {
  return (
    <header id="header">
      <h1>Kanwara Moore</h1>
      <Navigation page={props.page} setPage={props.setPage} />
    </header>
  );
};
export default Header;
