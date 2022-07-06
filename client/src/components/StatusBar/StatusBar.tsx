import React, { Dispatch, SetStateAction } from "react";
import ExitBtn from "./ExitBtn";
import { Score } from "./Score";
import { Timer } from "./Timer";

interface StatusBarProps {
  score: any;
  setRound: Dispatch<SetStateAction<number>>;
}
const StatusBar: React.FC<StatusBarProps> = ({ score, setRound }) => {
  return (
    <>
      <h4 style={{ marginRight: "0" }} className="game-title">
        <em>TypeRider 9000</em>
        <ExitBtn setRound={setRound} />
      </h4>
      <div className="status-bar">
        <Timer />

        <Score score={score} />
      </div>
    </>
  );
};

export default StatusBar;
