import React from "react";
import "./style.css";

const Navigation = (props) => {
  console.log(props)
  return (
    <nav>
      <a href="/about">About Me</a>

      <a href="/work">Work</a>
      <a href="/contact">Contact Me</a>
      <a href="/resume">Resume</a>
    </nav>
  );
};

export default Navigation;
