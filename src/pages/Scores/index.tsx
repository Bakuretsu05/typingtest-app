import React, { useState } from "react";
import ScoreCard from "../../components/ScoreCard";
import ScoreItem from "./components/ScoreItem";
import "./Scores.css";

interface Score {
  id: string;
  correct: number;
  wrong: number;
  date: string;
}

const nullScore = { id: "N/A", correct: NaN, wrong: NaN, date: "N/A" };

const Scores = () => {
  // SORTED by WPM
  // TODO: Feature to remove a score
  const [scores] = useState<Score[]>(() => {
    const unsortedScores = JSON.parse(
      localStorage.getItem("LOCAL_SCORES") || "[]"
    );
    return unsortedScores.sort((a: Score, b: Score) => b.correct - a.correct);
  });
  const [showScore, setShowScore] = useState<{ show: Boolean; score: Score }>({
    show: false,
    score: nullScore,
  });

  const displayScore = (id: string) => {
    setShowScore({
      show: true,
      score: scores.find((score) => score.id === id) || nullScore,
    });
  };

  return (
    <div className="Scores">
      <div className="Scores__scores-container">
        {scores.map((score, index) => (
          <ScoreItem
            key={score.id}
            rank={index + 1}
            {...score}
            onClick={displayScore}
          />
        ))}
      </div>
      {showScore.show && (
        <ScoreCard
          correct={showScore.score.correct}
          wrong={showScore.score.wrong}
          dateSet={showScore.score.date}
        />
      )}
    </div>
  );
};

export default Scores;
