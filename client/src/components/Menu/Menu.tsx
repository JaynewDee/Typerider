import React from "react";
import { MenuProps } from "./types";
const Menu: React.FC<MenuProps> = ({ setRound }) => {
  const handleStart = (e: any) => {
    e.preventDefault();
    setRound(1);
  };

  return (
    <div className="menu-container">
      <h3 className="menu-header">Menu</h3>
      <button className="start-btn" onClick={(e) => handleStart(e)}>
        START
      </button>
    </div>
  );
};

export { Menu };
