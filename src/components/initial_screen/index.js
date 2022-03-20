import React from "react";
import styled from "styled-components";

export default function InitialScreen(props) {
  const { state, toggleScreen } = props;

  const Title = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    color: white;
    font-family: "Righteous";
    font-size: 36px;
  `;

  const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 15px;
  `;

  const Button = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #d70900;
    border-radius: 5px;
    color: #d70900;
    font-size: 18px;
    width: 246px;
    height: 54px;
    font-family: "Recursive", sans-serif;
    transition: 0.8s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    margin-bottom: 15px;
  `;

  const Image = styled.img`
    width: 136px;
    height: 161px;
  `;

  const NumberInput = styled.input`
    width: 246px;
    height: 43px;
    border: none;
    background-color: white;
    border-radius: 5px;
    padding-left: 15px;
    color: #fb6b6b;
    font-size: 14px;

    &::placeholder {
      color: #adadad;
      font-size: 16px;
    }
  `;

  let value = 0;

  return !state ? (
    <Container className="initial-screen">
      <Box>
        <Image src="assets/images/image 1.svg" alt="" />
        <Title>ZapRecall</Title>
      </Box>
      <NumberInput
        min="0"
        max="8"
        placeholder="Digite sua meta de zaps..."
        type="number"
        onChange={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          else if (e.target.value > 8) e.target.value = 8;
          value = e.target.value;
        }}
      />
      <Button
        onClick={() => {
          toggleScreen(parseInt(value));
        }}
      >
        Iniciar Recall
      </Button>
    </Container>
  ) : (
    <></>
  );
}
