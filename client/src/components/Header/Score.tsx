import React, { useReducer } from "react";
import { scoreReducer } from "../../utils/reducers";
const Score = ({ score }: { score: number }) => {
  const [scoreState, scoreDispatch] = useReducer(scoreReducer, {});
  return (
    <h4 className="score">
      <data>{score}</data>
    </h4>
  );
};

export { Score };
