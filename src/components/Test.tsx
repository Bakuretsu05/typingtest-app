import React from "react";
import useTimer from "../hooks/useTimer";

const Test: React.FC = () => {
  const { start, pause, reset, time } = useTimer({
    endTime: 10,
    onTimeOver: () => console.log("Time Over"),
  });

  return (
    <div>
      <h2 style={{ color: "white" }}>Time: {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Test;
