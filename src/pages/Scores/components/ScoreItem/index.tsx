import React from "react";
import "./ScoreItem.css";

interface Props {
  id: string;
  rank: number;
  correct: number;
  wrong: number;
  date: string;
  isSelected?: boolean;
  onClick?: (id: string) => void;
  deleteFn?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
}

const ScoreItem: React.FC<Props> = ({
  id,
  rank,
  correct,
  wrong,
  date,
  isSelected,
  onClick,
  deleteFn,
}) => {
  return (
    <div
      className={`ScoreItem ${isSelected ? "ScoreItem--selected" : ""}`}
      onClick={() => (onClick ? onClick(id) : null)}
    >
      <h3 className="ScoreItem__rank">{rank}</h3>
      <div className="ScoreItem__stats">
        <h3 className="ScoreItem__WPM">{correct} WPM</h3>
        <p className="ScoreItem__date">{date}</p>
      </div>
      {deleteFn && (
        <div
          className="ScoreItem__delete-button"
          onClick={(e) => deleteFn(e, id)}
        >
          <i className="fas fa-trash"></i>
        </div>
      )}
    </div>
  );
};

export default ScoreItem;
