import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./Home.css";
import Result from "./components/Result";
import TypingTest from "./components/TypingTest";

const Home: React.FC = () => {
  const [showScore, setShowScore] = useState(false);
  const [{ correct, wrong }, setCount] = useState({ correct: 0, wrong: 0 });
  const dateSet = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    if (showScore) {
      const currLocalScores = JSON.parse(
        localStorage.getItem("LOCAL_SCORES") || "[]"
      );
      localStorage.setItem(
        "LOCAL_SCORES",
        JSON.stringify([
          ...currLocalScores,
          { id: nanoid(), correct: correct, wrong: wrong, date: dateSet },
        ])
      );
    }
  }, [showScore, dateSet, correct, wrong]);

  useEffect(() => {
    if (!showScore) setCount({ correct: 0, wrong: 0 });
  }, [showScore]);

  return (
    <div className="Home">
      {showScore ? (
        <Result
          correct={correct}
          wrong={wrong}
          setShowScore={setShowScore}
          dateSet={dateSet}
        />
      ) : (
        <TypingTest setShowScore={setShowScore} setCount={setCount} />
      )}
    </div>
  );
};

export default Home;
