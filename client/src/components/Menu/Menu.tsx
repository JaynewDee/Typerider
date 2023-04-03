import React, { useState } from "react";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = ({ setRound, setMode }) => {
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

  const MainMenu = (start: (e: any) => void, selection: (e: any) => void) => (
    <>
      <button className="start-btn" onClick={(e) => start(e)}>
        START
      </button>
      <button value="mode" className="mode-btn" onClick={(e) => selection(e)}>
        GAME MODE
      </button>
    </>
  );

  const ModeMenu = (setMode: (e: any) => void) => (
    <>
      <button value="dictionary" onClick={setMode} className="mode-btn">
        STANDARD
      </button>
      <button value="hipster" onClick={setMode} className="mode-btn">
        HIPSTER
      </button>
      <button value="dinosaur" onClick={setMode} className="mode-btn">
        DINOSAUR
      </button>
    </>
  );

  const menuSwitch = (menuState: string) => {
    switch (menuState) {
      case "main":
        return MainMenu(handleStart, handleSelection);
      case "mode":
        return ModeMenu(handleModeSet);
    }
  };
  return <div className="menu-container">{menuSwitch(menuState)}</div>;
};

export { Menu };
