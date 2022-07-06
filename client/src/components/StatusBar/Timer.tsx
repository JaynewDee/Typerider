import React, { useEffect, useReducer, useState } from "react";

import { useTimerDispatch } from "./timerHook";
const Timer = () => {
  const [time] = useTimerDispatch();
  return <span className="timer">{time}</span>;
};

export { Timer };
