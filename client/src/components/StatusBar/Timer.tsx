import React, { useEffect, useReducer, useState } from "react";

import { useTimerDispatch } from "./timerHook";
const Timer = () => {
  const [time] = useTimerDispatch();

  return (
    <span className="timer">
      Time Elapsed:{" "}
      <span
        style={
          time < 120
            ? { color: `rgba(${time * 3},255,0,.9)` }
            : { color: `rgba(255, ${255 - time / 2}, 0, .9)` }
        }
        className="time-digit"
      >
        {time}
      </span>
      s
    </span>
  );
};

export { Timer };
