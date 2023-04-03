import React, { useState, useMemo, useEffect } from "react";
import { scrambleWords } from "../utils/scramble";
import { withSpaces } from "../utils/withSpaces";
import { SentenceState } from "./types";
import { Main } from "./Main";
import StatusBar from "./StatusBar/StatusBar";
import { Menu } from "./Menu/Menu";
import { useScoreReducer } from "../utils/reducers";

const dictionaryArray = [
  "rapture",
  "solidarity",
  "belong",
  "vision",
  "courage",
  "marmalade",
  "autumn",
  "terrain",
  "subterfuge",
  "apoptosis"
];

const Window: React.FC = () => {
  const [round, setRound] = useState(0);
  const [mode, setMode] = useState("default");
  const [score, scoreDispatch] = useScoreReducer({ score: 0 });
  const [sentence, setSentence] = useState<SentenceState>({
    solution: "",
    scrambled: "",
    loading: true,
    words: []
  });

  const minimize = (string: string) => {
    const noSpecials = string.replace(/[^a-zA-Z0-9 ]/g, "");
    const array = noSpecials.split(" ");
    const shortenedArray = array.slice(0, 10);
    return shortenedArray;
  };

  useMemo((): void => {
    if (round === 10) return;
    const getSentence = () => {
      const current = dictionaryArray[round];
      const scrambled = scrambleWords(current);
      const solution = minimize(current);
      const formatted = withSpaces(solution);

      setSentence({
        solution: current,
        scrambled: scrambled,
        loading: false,
        words: formatted
      });
    };

    getSentence();
  }, [round]);

  useEffect(() => {
    setTimeout(() => {
      if (round === 10) {
        console.log("GAME OVER");
        return;
      }

      const focusField = document.getElementById(`0,0`);
      focusField?.focus();
    }, 500);
  }, [round]);

  return (
    <div className="board-box">
      {round > 0 && round < 10 ? (
        <>
          <StatusBar setRound={setRound} score={score} />
          <Main
            sentence={sentence}
            round={round}
            setRound={setRound}
            scoreDispatch={scoreDispatch}
          />
        </>
      ) : (
        <>
          <h5 className="mode-label">
            Mode: <span className="mode-name">{mode.toUpperCase()}</span>
          </h5>
          <Menu setRound={setRound} mode={mode} setMode={setMode} />
        </>
      )}
    </div>
  );
};

export default Window;
