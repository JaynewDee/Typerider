import React, { useEffect, useRef, useState } from "react";
import { FieldProps } from "./types";

const Field: React.FC<FieldProps> = ({
  fieldIdx,
  rowIdx,
  letter,
  round,
  setRound,
  scoreDispatch,
}) => {
  //
  const blink = {
    animation: `blink .6s ease-in-out`,
  };
  const [animateState, setAnimation] = useState({});
  const handleKeyPress = (e: any) => {
    let current = e.currentTarget;
    let nextRow = document.getElementById(`${0},${rowIdx + 1}`);
    if (e.key === current.value) {
      scoreDispatch({ type: "INCREASE", payload: 2 });
      current.className = "solved";
      if (current.nextSibling === null && nextRow === null && round < 11) {
        setRound(round + 1);
      } else if (current.nextSibling === null) {
        scoreDispatch({ type: "INCREASE", payload: 10 });
        let nextField = document.getElementById(`${0},${rowIdx + 1}`);
        nextField?.focus();
      } else if (current.nextSibling.value === " ") {
      }
      let nextField = current.nextSibling;
      nextField?.focus();
    } else if (e.key !== current.value && e.which !== 16) {
      setAnimation(blink);
      scoreDispatch({ type: "PENALTY", payload: 5 });
    }
    setTimeout(() => {
      setAnimation({});
    }, 1000);
  };
  const rejectSelect = () => {
    return false;
  };
  return (
    <input
      style={animateState}
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
      onSelect={rejectSelect}
    ></input>
  );
};

export { Field };
