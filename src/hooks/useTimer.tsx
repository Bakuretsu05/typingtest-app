import { useCallback, useReducer, useEffect } from "react";

type Status = "RUNNING" | "PAUSED";
type timerType = "INCREMENT" | "DECREMENT";
type reducerAction = "START" | "PAUSE" | "RESET" | "UPDATE_TIME";

type Config = {
  endTime: number | null;
  timerType: timerType;
  initialStatus: Status;
  initialTime: number;
  onTimeOver?: () => void;
};

interface ReturnValue {
  start: () => void;
  pause: () => void;
  reset: () => void;
  time: number;
  status: Status;
}

interface State {
  time: number;
  status: Status;
  timerType: timerType;
}

// TODO: Make a dynamic type based on the action type
const reducer = (
  state: State,
  action: { type: reducerAction; payload: { initialTime?: number } }
): State => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        status: "RUNNING",
        time: state.time,
      };
    case "PAUSE":
      return { ...state, status: "PAUSED" };
    case "RESET":
      return {
        ...state,
        time: action.payload.initialTime || 0,
        status: "PAUSED",
      };
    case "UPDATE_TIME":
      return {
        ...state,
        time: state.timerType === "INCREMENT" ? state.time + 1 : state.time - 1,
      };
    default:
      return state;
  }
};

const useTimer = ({
  endTime = null,
  timerType = "INCREMENT",
  initialStatus = "PAUSED",
  initialTime = 0,
  onTimeOver,
}: Partial<Config>): ReturnValue => {
  const [state, dispatch] = useReducer(reducer, {
    status: initialStatus,
    time: initialTime,
    timerType,
  });
  const { time, status } = state;

  const start = useCallback(() => {
    dispatch({ type: "START", payload: { initialTime } });
  }, [initialTime]);

  const pause = useCallback(() => {
    dispatch({ type: "PAUSE", payload: {} });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET", payload: { initialTime } });
  }, [initialTime]);

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;

    if (status === "RUNNING") {
      intervalId = setInterval(() => {
        dispatch({ type: "UPDATE_TIME", payload: {} });
      }, 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [status]);

  useEffect(() => {
    if (status === "RUNNING" && time === endTime) {
      dispatch({ type: "PAUSE", payload: {} });

      if (onTimeOver != null) onTimeOver();
    }
  }, [status, time, onTimeOver, endTime]);

  return { start, pause, reset, time, status };
};

export default useTimer;
