import React from "react";
import { RowProps } from "./types";
import { Field } from "./Field";
// $btn: #388e3c;
//
//
const Row: React.FC<RowProps> = ({
  word,
  rowIdx,
  round,
  setRound,
  scoreDispatch,
}) => {
  //
  //

  return (
    <section
      onChange={(e) => {
        e.preventDefault();
      }}
      key={rowIdx}
      className="word-row"
      spellCheck={false}
      style={{ animation: `slideIn .6s ease-in-out .${rowIdx}s forwards` }}
    >
      {word.map((letter: string, idx: number) => {
        return (
          <Field
            round={round}
            setRound={setRound}
            scoreDispatch={scoreDispatch}
            letter={letter}
            id={[idx, rowIdx]}
            fieldIdx={idx}
            rowIdx={rowIdx}
            key={idx * 10}
            className="letterField"
          ></Field>
        );
      })}
    </section>
  );
};

export { Row };
