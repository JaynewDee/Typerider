import React from "react";
import { Score } from "./Score";
import { Timer } from "./Timer";

const StatusBar = ({ score }: { score: any }) => {
  return (
    <div className="status-bar">
      <Score score={score} />
      <Timer />
    </div>
  );
};

export default StatusBar;
