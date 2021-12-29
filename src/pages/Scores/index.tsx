import React, { useState, useEffect } from "react";
import ScoreCard from "../../components/ScoreCard";
import ScoreItem from "./components/ScoreItem";
import "./Scores.css";

interface Score {
  id: string;
  correct: number;
  wrong: number;
  date: string;
}

const nullScore = {
  id: "N/A",
  correct: NaN,
  wrong: NaN,
  date: "N/A",
};

const Scores = () => {
  // SORTED by WPM
  const [scores, setScores] = useState<Score[]>(() => {
    const unsortedScores = JSON.parse(
      localStorage.getItem("LOCAL_SCORES") || "[]"
    );
    return unsortedScores.sort((a: Score, b: Score) => b.correct - a.correct);
  });
  const [currentScore, setCurrentScore] = useState<Score>(nullScore);

  const displayScore = (id: string) => {
    setCurrentScore(scores.find((score) => score.id === id) || nullScore);
  };

  const deleteScore = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    setScores((currScores) => currScores.filter((score) => score.id !== id));
    if (currentScore.id === id) setCurrentScore(nullScore);
  };

  useEffect(() => {
    localStorage.setItem("LOCAL_SCORES", JSON.stringify(scores));
  }, [scores]);

  return (
    <div className="Scores">
      <div
        className="Scores__scores-container"
        style={scores.length === 0 ? { display: "none" } : {}}
      >
        {scores.map((score, index) => (
          <ScoreItem
            key={score.id}
            rank={index + 1}
            {...score}
            isSelected={currentScore.id === score.id}
            onClick={displayScore}
            deleteFn={deleteScore}
          />
        ))}
      </div>
      {currentScore.id !== nullScore.id && (
        <ScoreCard
          correct={currentScore.correct}
          wrong={currentScore.wrong}
          dateSet={currentScore.date}
        />
      )}
    </div>
  );
};

export default Scores;
