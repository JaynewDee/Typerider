import { useReducer, useEffect, useState } from "react";
import { timerReducer } from "../../utils/reducers";

const useTimerDispatch = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      let newTime = timer + 1;
      setTimer(newTime);
      clearInterval(interval);
    }, 1000);
  }, [timer]);

  return [timer];
};

export { useTimerDispatch };
