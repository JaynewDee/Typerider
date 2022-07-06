import React, { Dispatch, ReactElement, SetStateAction } from "react";

import { Loading } from "./Loading";
import { Header } from "./Header/Header";
import { KeyBoard } from "./Keyboard/KeyBoard";
import { Victory } from "./Victory/Victory";
import { Menu } from "./Menu/Menu";
import ExitBtn from "./Menu/ExitBtn";
import StatusBar from "./StatusBar/StatusBar";
import { useScoreReducer } from "../utils/reducers";

interface MainDisplayProps {
  sentence: {
    loading: boolean;
    words: string[];
    solution: string;
    scrambled: string;
  };
  round: number;
  setRound: Dispatch<SetStateAction<any>>;
}
const Switch = (
  sentence: any,
  round: number,
  setRound: any,
  score: number,
  scoreDispatch: any
) => {
  if (round === 0) {
    return <Menu setRound={setRound} />;
  }
  if (sentence.loading) {
    return <Loading />;
  } else {
    if (round > 0 && round < 11) {
      return (
        <>
          <StatusBar score={score} />
          <Header sentence={sentence} />
          <KeyBoard sentence={sentence} setRound={setRound} round={round} />
          <ExitBtn setRound={setRound} />
        </>
      );
    } else {
      return <Menu setRound={setRound} />;
    }
  }
};

const Main: React.FC<MainDisplayProps> = ({
  sentence,
  round,
  setRound,
}): ReactElement => {
  const [score, scoreDispatch] = useScoreReducer(0);
  return Switch(sentence, round, setRound, score, scoreDispatch);
};

export { Main };
