import React, { useEffect, useState } from "react";
import "./Home.css";
import Result from "./components/Result";
import TypingTest from "./components/TypingTest";

const Home: React.FC = () => {
  const [showScore, setShowScore] = useState(false);
  const [{ correct, wrong }, setCount] = useState({ correct: 0, wrong: 0 });

  useEffect(() => {
    if (!showScore) setCount({ correct: 0, wrong: 0 });
  }, [showScore]);

  return (
    <div className="Home">
      {showScore ? (
        <Result correct={correct} wrong={wrong} setShowScore={setShowScore} />
      ) : (
        <TypingTest setShowScore={setShowScore} setCount={setCount} />
      )}
    </div>
  );
};

export default Home;
