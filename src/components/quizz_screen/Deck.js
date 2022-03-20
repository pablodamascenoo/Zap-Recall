import styled from "styled-components";
import Question from "./Question";
export default function Deck({ changeFooter, colorList }) {
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
      answer:
        "passar AÇSLKDJSAÇLDKJSAÇLDKJASÇLDKJSAÇDLKASJÇDLSAKJDÇLASKDASÇLDKJSAÇLDKJdiferentes informações para componentes ",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  if (colorList.length === 0) {
    deck.sort(() => {
      return Math.random() > 0.5 ? 1 : -1;
    });
  }

  const Container = styled.article`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 100px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Container>
      {deck.map((card, index) => {
        let filteredColorList;
        filteredColorList = colorList.filter((item) =>
          item.index === index ? true : false
        );
        if (filteredColorList[0] === undefined) filteredColorList = "";
        else filteredColorList = filteredColorList[0].color;
        return (
          <Question
            index={index}
            changeFooter={changeFooter}
            key={index}
            number={index + 1}
            question={card.question}
            answer={card.answer}
            color={filteredColorList}
          />
        );
      })}
    </Container>
  );
}
