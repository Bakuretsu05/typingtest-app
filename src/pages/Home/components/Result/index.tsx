import React from "react";
import ScoreCard from "../../../../components/ScoreCard";
import "./Result.css";

interface Props {
  correct: number;
  wrong: number;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  dateSet: string;
}

const Result: React.FC<Props> = ({ correct, wrong, setShowScore, dateSet }) => {
  return (
    <div className="Result">
      <ScoreCard correct={correct} wrong={wrong} dateSet={dateSet} />
      <button
        className="Result__play-button"
        onClick={() => setShowScore(false)}
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
