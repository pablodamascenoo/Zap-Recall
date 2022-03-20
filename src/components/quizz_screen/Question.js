import React from "react";
import FlashCard from "./FlashCard";
import "./Question.css";

export default function Question({ number, question, answer }) {
  const [play, SetPlay] = React.useState(false);
  const [color, SetColor] = React.useState("");

  let card;

  function playCard() {
    SetPlay(!play);
  }

  function toggleColor(colorName) {
    SetColor(colorName);
  }

  if (!play)
    card = (
      <div className="question-container">
        <p>{`Pergunta ${number}`}</p>
        <ion-icon onClick={playCard} name="play-outline"></ion-icon>
      </div>
    );
  else
    card = (
      <FlashCard
        question={question}
        answer={answer}
        toggleColor={toggleColor}
      />
    );

  if (color !== "") {
    let ionName;
    if (color === "green") ionName = "checkmark-circle";
    else if (color === "yellow") ionName = "help-circle";
    else ionName = "close-circle";
    card = (
      <div className={`question-container ${color}`}>
        <p>{`Pergunta ${number}`}</p>
        <ion-icon name={ionName}></ion-icon>
      </div>
    );
  }

  return card;
}
