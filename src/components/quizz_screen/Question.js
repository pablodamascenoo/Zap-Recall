import React from "react";
import styled from "styled-components";
import FlashCard from "./FlashCard";

export default function Question({ question }) {
  const [play, SetPlay] = React.useState(false);

  function playCard() {
    SetPlay(!play);
  }

  const Container = styled.div`
    height: 40px;
    background-color: white;
    width: 80%;
    max-width: 350px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 6px;
  `;

  return !play ? (
    <Container>
      <p>{`Pergunta ${question}`}</p>
      <ion-icon onClick={playCard} name="play-outline"></ion-icon>
    </Container>
  ) : (
    <FlashCard />
  );
}
