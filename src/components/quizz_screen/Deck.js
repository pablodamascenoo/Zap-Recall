import styled from "styled-components";
import Question from "./Question";
export default function Deck() {
  let deck = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const Container = styled.div`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 100px;
    overflow: scroll;
  `;

  return (
    <Container>
      {deck.map((card, index) => {
        return (
          <Question
            number={index + 1}
            question={card.question}
            answer={card.answer}
          />
        );
      })}
    </Container>
  );
}
