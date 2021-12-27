import React, { useCallback, useEffect, useState } from "react";
import "./TypingTest.css";
import useQueue from "../../../../hooks/useQueue";
import useTimer from "../../../../hooks/useTimer";
import { getWord } from "../../../../wordsData";
import WordsDisplay from "./components/WordsDisplay";

interface Props {
  setCount: React.Dispatch<
    React.SetStateAction<{
      correct: number;
      wrong: number;
    }>
  >;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypingTest: React.FC<Props> = ({ setCount, setShowScore }) => {
  const [input, setInput] = useState("");
  const { enqueue, dequeue, queue, setQueue } = useQueue(getWord(18));

  const onTimeOver = (): void => {
    setShowScore(true);
  };

  const { start, reset, time, status } = useTimer({
    endTime: 0,
    timerType: "DECREMENT",
    initialTime: 60,
    onTimeOver: onTimeOver,
  });

  const cycleWords = useCallback(() => {
    enqueue(getWord()[0]);
    dequeue();
    setInput("");
  }, [enqueue, dequeue]);

  const retry = useCallback(() => {
    setInput("");
    reset();
    setQueue(getWord(18));
    setCount({ correct: 0, wrong: 0 });
  }, [reset, setQueue, setCount]);

  useEffect(() => {
    if (input.endsWith(" ")) {
      if (input.length > 1) {
        setCount((currCount) => {
          return input.trim() === queue[0]
            ? { ...currCount, correct: currCount.correct + 1 }
            : { ...currCount, wrong: currCount.wrong + 1 };
        });
        cycleWords();
      } else {
        setInput("");
      }
    }
  }, [input, cycleWords, queue, setCount]);

  useEffect(() => {
    if (input.length > 0 && status === "PAUSED") start();
  }, [input, status, start]);

  return (
    <div className="TypingTest">
      <h1 className="TypingTest__timer">{time}</h1>
      <WordsDisplay input={input} words={queue} />
      <div className="TypingTest__input-group">
        <input
          className="TypingTest__input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="TypingTest__retry-button" onClick={retry}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default TypingTest;
