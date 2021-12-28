import React from "react";
import "./ScoreCard.css";

interface Props {
  correct: number;
  wrong: number;
  dateSet: string;
}

const ScoreCard: React.FC<Props> = ({ correct, wrong, dateSet }) => {
  return (
    <div className="ScoreCard">
      <h2 className="ScoreCard__card-title">Result</h2>
      <h3 className="ScoreCard__WPM">{correct} WPM</h3>
      <div className="ScoreCard__stats-container">
        <p className="ScoreCard__date">{dateSet}</p>
        <p className="ScoreCard__stats">
          <span className="ScoreCard__stats-label">Raw WPM: </span>
          {correct + wrong} WPM
        </p>
        <p className="ScoreCard__stats">
          <span className="ScoreCard__stats-label">Accuracy: </span>
          {((correct / (correct + wrong)) * 100).toFixed(2)}%
        </p>
        <p className="ScoreCard__stats">
          <span className="ScoreCard__stats-label">Correct words: </span>
          {correct}
        </p>
        <p className="ScoreCard__stats">
          <span className="ScoreCard__stats-label">Wrong words: </span>
          {wrong}
        </p>
      </div>
    </div>
  );
};

export default ScoreCard;
