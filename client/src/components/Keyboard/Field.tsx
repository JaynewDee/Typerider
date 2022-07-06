import React from "react";
import { FieldProps } from "./types";

const Field: React.FC<FieldProps> = ({
  fieldIdx,
  rowIdx,
  letter,
  round,
  setRound,
}) => {
  //
  //
  const handleKeyPress = (e: any) => {
    let current = e.currentTarget;
    let nextRow = document.getElementById(`${0},${rowIdx + 1}`);
    if (e.key === current.value) {
      current.className = "solved";
      if (current.nextSibling === null && nextRow === null && round < 11) {
        setRound(round + 1);
      } else if (current.nextSibling === null) {
        let nextField = document.getElementById(`${0},${rowIdx + 1}`);
        nextField?.focus();
      } else if (current.nextSibling.value === " ") {
      }
      let nextField = current.nextSibling;
      nextField?.focus();
    }
    return;
  };

  return (
    <input
      onKeyDown={(e) => {
        e.preventDefault();
        handleKeyPress(e);
      }}
      onChange={(e) => {
        e.preventDefault();
      }}
      id={`${fieldIdx},${rowIdx}`}
      value={letter}
      type="text"
      className={letter === " " ? "space-field" : "letter-field"}
    ></input>
  );
};

export { Field };
