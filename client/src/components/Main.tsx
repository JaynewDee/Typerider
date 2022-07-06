import React, { Dispatch, ReactElement, SetStateAction } from "react";

import { Loading } from "./Loading";
import { HeaderMemo } from "./Header/Header";
import KeyBoard from "./Keyboard/KeyBoard";

interface MainDisplayProps {
  sentence: {
    loading: boolean;
    words: string[];
    solution: string;
    scrambled: string;
  };
  scoreDispatch: any;
  round: number;
  setRound: Dispatch<SetStateAction<any>>;
}
const Switch = (
  sentence: any,
  round: number,
  setRound: any,
  scoreDispatch: any
) => {
  if (sentence.loading) {
    return <Loading />;
  } else {
    if (round > 0 && round < 11) {
      return (
        <>
          <div className="play-field">
            <HeaderMemo sentence={sentence} />
            <KeyBoard
              sentence={sentence}
              setRound={setRound}
              round={round}
              scoreDispatch={scoreDispatch}
            />
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  }
};

const Main: React.FC<MainDisplayProps> = ({
  sentence,
  round,
  scoreDispatch,
  setRound,
}): ReactElement => {
  return Switch(sentence, round, setRound, scoreDispatch);
};

export { Main };
