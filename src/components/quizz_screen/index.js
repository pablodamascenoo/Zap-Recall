import React from "react";
import styled from "styled-components";
import Deck from "./Deck.js";
export default function QuizzScreen({ state, toggleScreen, rightAnswers }) {
  const [count, SetCount] = React.useState(0);
  const [ionicons, SetIonicons] = React.useState([]);

  function changeFooter(color, index) {
    let listColor = [...ionicons];
    SetCount(count + 1);
    SetIonicons([...listColor, { color: color, index: index }]);
  }

  const Alert = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap");
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    padding-top: 10px;
  `;

  const Image = styled.img`
    width: 52px;
    height: 60px;
  `;

  const Footer = styled.footer`
    position: fixed;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;
    min-height: 70px;
    gap: 14px;
    bottom: 0;
    left: 0;
    right: 0;
  `;

  const Box = styled.header`
    padding-top: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Title = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    color: white;
    font-family: "Righteous";
    font-size: 35px;
    margin-left: 12px;
  `;

  const Progress = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    text-align: center;
  `;

  const Reset = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
    width: 167px;
    height: 32px;
    margin-bottom: 21px;
    border: none;
    border-radius: 5px;
    background-color: #fb6b6b;
    font-size: 14px;
    color: white;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
      background-color: #d70900;
    }
  `;

  function hasRed() {
    if (count === 8) {
      let red = ionicons.filter((item) =>
        item.color === "red" ? true : false
      );
      if (red.length + rightAnswers <= 8) {
        return (
          <>
            <Alert>🥳 Parabéns!</Alert>
            <Progress>Você atingiu a sua meta de flashcard!</Progress>
          </>
        );
      } else {
        return (
          <>
            <Alert>😥 Putz...</Alert>
            <Progress>Ainda faltam alguns... Mas não desanime!</Progress>
          </>
        );
      }
    }
    return <></>;
  }

  return state ? (
    <main>
      <Box>
        <Image src="assets/images/image 1.svg" alt="" />
        <Title>ZapRecall</Title>
      </Box>
      <Deck changeFooter={changeFooter} colorList={ionicons} />
      <Footer>
        {hasRed()}
        <Progress>{`${count}/8 CONCLUÍDOS`}</Progress>
        <div>
          {ionicons.map((ionicon, index) => {
            let name = "";
            if (ionicon.color === "green") name = "checkmark-circle";
            else if (ionicon.color === "yellow") name = "help-circle";
            else name = "close-circle";
            return (
              <ion-icon
                key={index}
                class={ionicon.color}
                name={name}
              ></ion-icon>
            );
          })}
        </div>
        {count === 8 ? (
          <>
            <Reset
              onClick={() => {
                SetCount(0);
                SetIonicons([]);
                toggleScreen();
              }}
            >
              REINICIAR RECALL
            </Reset>
          </>
        ) : (
          <></>
        )}
      </Footer>
    </main>
  ) : (
    <></>
  );
}
