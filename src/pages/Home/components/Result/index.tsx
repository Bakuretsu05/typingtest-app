import React from "react";
import "./Result.css";

interface Props {
  correct: number;
  wrong: number;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Result: React.FC<Props> = ({ correct, wrong, setShowScore }) => {
  return (
    <div className="Result">
      <div className="Result__card">
        <h2 className="Result__card-title">Result</h2>
        <h3 className="Result__WPM">{correct} WPM</h3>
        <div className="Result__stats-container">
          <p className="Result__stats">
            <span className="Result__stats-label">Raw WPM: </span>
            {correct + wrong} WPM
          </p>
          <p className="Result__stats">
            <span className="Result__stats-label">Accuracy: </span>
            {((correct / (correct + wrong)) * 100).toFixed(2)}%
          </p>
          <p className="Result__stats">
            <span className="Result__stats-label">Correct words: </span>
            {correct}
          </p>
          <p className="Result__stats">
            <span className="Result__stats-label">Wrong words: </span>
            {wrong}
          </p>
        </div>
      </div>
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
