import React, { useReducer } from "react";

const Score = ({ score }: { score: number }) => {
  return <span className="score">{score}</span>;
};

export { Score };
