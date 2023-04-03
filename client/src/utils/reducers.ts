import { useReducer } from "react";
import { PENALTY, INCREASE, INCREMENT } from "./actions";

const scoreReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case PENALTY: {
      const newScore = state.score - payload;
      return {
        score: newScore,
      };
    }
    case INCREASE: {
      const newScore = state.score + payload;
      return {
        score: newScore,
      };
    }
  }
};

const timerReducer = (state: any, { type }: any) => {
  switch (type) {
    case INCREMENT: {
      const newTime = state.time + 1;
      return {
        time: newTime,
      };
    }
  }
};

export { timerReducer };
export function useScoreReducer(initialState: { score: number }) {
  return useReducer(scoreReducer, initialState);
}
