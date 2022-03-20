import "./FlashCard.css";
import React from "react";
import Button from "./Button.js";

export default function FlashCard({ question, answer, toggleColor }) {
  const [flip, SetFlip] = React.useState("");

  function toggleFlip() {
    if (flip === "") SetFlip("rotate");
    else SetFlip("");
  }

  return (
    <div className="container">
      <div className={`inner-content ${flip}`}>
        <div className="flip-card-front">
          <p>{question}</p>
          <ion-icon onClick={toggleFlip} name="arrow-undo"></ion-icon>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
          <div className="button-wrap">
            <Button toggleColor={toggleColor} color="yellow" />
            <Button toggleColor={toggleColor} color="green" />
            <Button toggleColor={toggleColor} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}
