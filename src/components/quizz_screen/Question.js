import React from "react";
import FlashCard from "./FlashCard";
import "./Question.css";

export default function Question({ number, question, answer }) {
  const [play, SetPlay] = React.useState(false);

  function playCard() {
    SetPlay(!play);
  }

  return !play ? (
    <div className="question-container">
      <p>{`Pergunta ${number}`}</p>
      <ion-icon onClick={playCard} name="play-outline"></ion-icon>
    </div>
  ) : (
    <FlashCard question={question} answer={answer} />
  );
}
