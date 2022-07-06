import React from "react";
import { Row } from "./Row";
import { BoardProps } from "./types";

const KeyBoard: React.FC<BoardProps> = ({
  sentence,
  setRound,
  round,
  scoreDispatch,
}) => {
  return (
    <>
      <form key={sentence.words.at(0)} className="keyboard">
        {sentence.words.map((word: any, idx: number) => {
          return (
            <Row
              round={round}
              setRound={setRound}
              rowIdx={idx}
              fieldIdx={word}
              id={word}
              key={idx + 50}
              word={[...word]}
              scoreDispatch={scoreDispatch}
            />
          );
        })}
      </form>
    </>
  );
};

export default React.memo(KeyBoard);
