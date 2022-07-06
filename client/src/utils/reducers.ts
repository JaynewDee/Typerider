import { PENALTY, INCREASE } from "./actions";

const scoreReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case PENALTY: {
      const newScore = state.score - payload;
      return {
        ...state,
        score: newScore,
      };
    }
    case INCREASE: {
      const newScore = state.score + payload;
      return {
        ...state,
        score: newScore,
      };
    }
  }
};

export { scoreReducer };
