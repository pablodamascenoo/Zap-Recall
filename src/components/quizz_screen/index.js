import React from "react";
import styled from "styled-components";
import Deck from "./Deck.js";
export default function QuizzScreen({ state }) {
  const [count, SetCount] = React.useState(0);
  const [ionicons, SetIonicons] = React.useState([]);

  function changeFooter(color, index) {
    let listColor = [...ionicons];
    SetCount(count + 1);
    SetIonicons([...listColor, { color: color, index: index }]);
  }

  const Container = styled.main``;

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
    height: 70px;
    gap: 7px;
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
  `;

  return state ? (
    <Container>
      <Box>
        <Image src="assets/images/image 1.svg" alt="" />
        <Title>ZapRecall</Title>
      </Box>
      <Deck changeFooter={changeFooter} colorList={ionicons} />
      <Footer>
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
      </Footer>
    </Container>
  ) : (
    <></>
  );
}
