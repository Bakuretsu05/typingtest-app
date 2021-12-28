import React from "react";
import "./WordsDisplay.css";

interface Props {
  words: string[];
  input: string;
}

const WordsDisplay: React.FC<Props> = (props) => {
  const renderCurrentWord = (): JSX.IntrinsicElements["p"] => {
    const currWord = props.words[0];
    const spanEl: JSX.IntrinsicElements["span"][] = [];

    for (let i = 0; i < currWord.length; i++) {
      spanEl.push(
        <span
          key={i + currWord[i]}
          className={
            props.input[i] != null
              ? props.input[i] === currWord[i]
                ? "WordsDisplay--correct"
                : "WordsDisplay--wrong"
              : ""
          }
        >
          {currWord[i]}
        </span>
      );
    }

    return (
      <p
        className={
          props.input !== "" &&
          props.input.trim() !== currWord.slice(0, props.input.length)
            ? "WordsDisplay--red-underline"
            : ""
        }
      >
        {spanEl}
      </p>
    );
  };

  return (
    <div className="WordsDisplay">
      <div className="WordsDisplay__words">
        {renderCurrentWord()}{" "}
        {props.words.slice(1).map((word, index) => (
          <React.Fragment key={word + index}>
            <p>{word}</p>{" "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WordsDisplay;
