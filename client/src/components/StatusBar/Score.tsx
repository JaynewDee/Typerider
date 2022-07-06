import React, { useState } from "react";

const Score = ({ score }: { score: { score: number } }) => {
  return <span className="score">Score: {score.score}</span>;
};

export { Score };
