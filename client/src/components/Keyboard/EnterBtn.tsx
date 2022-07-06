import React from "react";
import { BtnProps } from "./types";
const EnterBtn: React.FC<BtnProps> = ({
  setRound,
  solved,
  setSolved,
  round,
}) => {
  return (
    <button
      style={
        solved ? { backgroundColor: "green" } : { backgroundColor: "gray" }
      }
      autoFocus={true}
      className="enter-btn"
      onKeyDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key === "Enter") {
          setRound(round + 1);
          setSolved(false);
        }
      }}
    >
      Next
    </button>
  );
};

export { EnterBtn };
