import "./FlashCard.css";
import React from "react";
import Button from "./Button.js";

export default function FlashCard({ question, answer, toggleColor, index }) {
  const [flip, SetFlip] = React.useState("");

  function toggleFlip() {
    if (flip === "") SetFlip("rotate");
    else SetFlip("");
  }

  return (
    <section className="container">
      <div className={`inner-content ${flip}`}>
        <div className="flip-card-front">
          <p>{question}</p>
          <ion-icon onClick={toggleFlip} name="arrow-undo"></ion-icon>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
          <div className="button-wrap">
            <Button index={index} toggleColor={toggleColor} color="yellow" />
            <Button index={index} toggleColor={toggleColor} color="green" />
            <Button index={index} toggleColor={toggleColor} color="red" />
          </div>
        </div>
      </div>
    </section>
  );
}
