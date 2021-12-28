import React from "react";

interface Props {
  id: string;
  rank: number;
  correct: number;
  wrong: number;
  date: string;
  onClick?: (id: string) => void;
}

const ScoreItem: React.FC<Props> = ({
  id,
  rank,
  correct,
  wrong,
  date,
  onClick,
}) => {
  return (
    <div className="ScoreItem" onClick={() => (onClick ? onClick(id) : null)}>
      <h3 className="ScoreItem__rank">{rank}</h3>
      <h3 className="ScoreItem__WPM">{correct} WPM</h3>
      <p className="ScoreItem__date">{date}</p>
    </div>
  );
};

export default ScoreItem;
