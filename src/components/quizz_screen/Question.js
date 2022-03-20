import React from "react";
import FlashCard from "./FlashCard";
import "./Question.css";

export default function Question({
  number,
  question,
  answer,
  changeFooter,
  index,
  color,
}) {
  const [play, SetPlay] = React.useState(false);
  let card;

  function playCard() {
    SetPlay(!play);
  }

  function toggleColor(colorName, index) {
    changeFooter(colorName, index);
  }

  if (!play)
    card = (
      <section className="question-container">
        <p>{`Pergunta ${number}`}</p>
        <ion-icon onClick={playCard} name="play-outline"></ion-icon>
      </section>
    );
  else
    card = (
      <FlashCard
        index={index}
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
      <section className={`question-container ${color}`}>
        <p>{`Pergunta ${number}`}</p>
        <ion-icon name={ionName}></ion-icon>
      </section>
    );
  }

  return card;
}
