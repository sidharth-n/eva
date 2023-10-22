// ThemeMessage.js
import React from "react";
import "./ThemeMessage.css";

function ThemeMessage({ message }) {
  return (
    <div className="theme-message">
      <h1>{message}</h1>
    </div>
  );
}

export default ThemeMessage;
