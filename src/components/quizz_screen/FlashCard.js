import "./FlashCard.css";
import React from "react";

export default function FlashCard() {
  const [flip, SetFlip] = React.useState("");

  function toggleFlip() {
    if (flip === "") SetFlip("rotate");
    else SetFlip("");
  }

  return (
    <div className="container">
      <div className={`inner-content ${flip}`}>
        <div className="flip-card-front">
          <p>O que é JSX?</p>
          <ion-icon onClick={toggleFlip} name="arrow-undo"></ion-icon>
        </div>
        <div className="flip-card-back">
          <p>Texto irado bla bla</p>
        </div>
      </div>
    </div>
  );
}
