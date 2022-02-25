import React from "react";
import "./style.css";

const Navigation = ({ setPage }) => {
  const handleClick = (e) => {
    setPage(e.target.textContent);
  };
  return (
    <nav>
      <span onClick={handleClick}>About Me</span>

      <span onClick={handleClick}>Work</span>
      <span onClick={handleClick}>Contact</span>
      <span onClick={handleClick}>Resume</span>
    </nav>
  );
};

export default Navigation;
