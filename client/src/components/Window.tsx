import React, { useState, useMemo, useEffect } from "react";
import { fetchSentence } from "../api/fetch";
import { getOneSentence } from "../utils/dbAPI/sentence";
import { scrambleWords } from "../utils/scramble";
import { withSpaces } from "../utils/withSpaces";
import { SentenceState } from "./types";
import { Main } from "./Main";

const publicUrl = `https://api.hatchways.io/assessment/sentences/`;

const Window: React.FC = () => {
  const [round, setRound] = useState(0);
  const [sentence, setSentence] = useState<SentenceState>({
    solution: "",
    scrambled: "",
    loading: true,
    words: [],
  });

  useEffect(() => {
    getOneSentence()
      .then(async (response) => {
        console.log(response);
      })
      .then((data) => console.log(data));
  });

  useMemo((): void => {
    const getSentence = () => {
      if (round > 0) {
        fetchSentence(publicUrl, round).then((sentence: string) => {
          console.log(sentence);
          let scrambled = scrambleWords(sentence);
          let words = sentence.split(" ");
          let formatted = withSpaces(words);
          setSentence({
            solution: sentence,
            scrambled: scrambled,
            loading: false,
            words: formatted,
          });
        });
      }
    };
    getSentence();
  }, [round]);

  useEffect(() => {
    setTimeout(() => {
      let focusField = document.getElementById(`0,0`);
      focusField?.focus();
      if (round === 11) {
        setRound(0);
        window.addEventListener("keydown", (e) => {});
      }
    }, 300);
  }, [round]);

  return (
    <div>
      <Main sentence={sentence} round={round} setRound={setRound} />
    </div>
  );
};

export { Window };
