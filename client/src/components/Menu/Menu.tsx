import React, { useState } from "react";
import { MenuProps } from "./types";
const Menu: React.FC<MenuProps> = ({ setRound, mode, setMode }) => {
  const [menuState, setMenuState] = useState("main");
  const handleStart = (e: any) => {
    e.preventDefault();
    setRound(1);
  };
  const handleSelection = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value === "mode") {
      setMenuState("mode");
    }
  };

  const handleModeSet = (e: any) => {
    e.preventDefault();
    setMode(e.target.value);
    setMenuState("main");
  };

  const handleQuit = (e: any) => {
    e.preventDefault();
    window.close();
  };

  const menuSwitch = (menuState: string) => {
    switch (menuState) {
      case "main":
        return (
          <>
            <button className="start-btn" onClick={(e) => handleStart(e)}>
              START
            </button>
            <button
              value="mode"
              className="mode-btn"
              onClick={(e) => handleSelection(e)}
            >
              GAME MODE
            </button>
            <button className="quit-btn" onClick={handleQuit}>
              QUIT
            </button>
          </>
        );
      case "mode":
        return (
          <>
            <button
              value="default"
              onClick={handleModeSet}
              className="mode-btn"
            >
              DEFAULT
            </button>
            <button
              value="dictionary"
              onClick={handleModeSet}
              className="mode-btn"
            >
              DICTIONARY
            </button>
            <button
              value="hipster"
              onClick={handleModeSet}
              className="mode-btn"
            >
              HIPSTER
            </button>
            <button
              value="dinosaur"
              onClick={handleModeSet}
              className="mode-btn"
            >
              DINOSAUR
            </button>
            <button value="mongo" onClick={handleModeSet} className="mode-btn">
              MONGO
            </button>
          </>
        );
    }
  };
  return (
    <div className="menu-container">
      {menuSwitch(menuState)}
      <h5 className="mode-label">
        Mode: <span className="mode-name">{mode.toUpperCase()}</span>
      </h5>
    </div>
  );
};

export { Menu };
