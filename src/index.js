import InitialScreen from "./components/initial_screen";
import QuizzScreen from "./components/quizz_screen";
import reactDom from "react-dom";
import React from "react";
import "./App.css";

function App() {
  const [stateScreen, SetStateScreen] = React.useState(false);

  function toggleScreen() {
    SetStateScreen(!stateScreen);
  }

  return (
    <>
      <InitialScreen toggleScreen={toggleScreen} state={stateScreen} />{" "}
      <QuizzScreen state={stateScreen} toggleScreen={toggleScreen} />
    </>
  );
}

let root = document.querySelector(".root");
reactDom.render(<App />, root);
