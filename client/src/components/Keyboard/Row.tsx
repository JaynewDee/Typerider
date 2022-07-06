import React from "react";
import { RowProps } from "./types";
import { Field } from "./Field";
// $btn: #388e3c;
//
//
const Row: React.FC<RowProps> = ({ word, rowIdx, round, setRound }) => {
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
    >
      {word.map((letter: string, idx: number) => {
        return (
          <Field
            round={round}
            setRound={setRound}
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
