import React from "react";
import reactImage from "../assets/react-core-concepts.png";
export default function Header() {
  const reactDescriptions = ["Fundamental", "Cruicial", "Core"];
  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandom(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
