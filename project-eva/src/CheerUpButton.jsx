// CheerUpButton.js
import React, { useState, useEffect } from "react";
import "./CheerUpButton.css";

function CheerUpButton({ onCheerUp }) {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleClick = () => {
    onCheerUp();
    setDialogVisible(true);
    setTimeout(() => {
      setDialogVisible(false);
    }, 3000); // hide the dialogue box after 3 seconds
  };

  return (
    <div>
      <div className={`dialog ${isDialogVisible ? "" : "hidden"}`}>
        Thanks for giving me two days energy!
      </div>
      <button className="cheer-up-button" onClick={handleClick}>
        Cheer Up
      </button>
    </div>
  );
}

export default CheerUpButton;
