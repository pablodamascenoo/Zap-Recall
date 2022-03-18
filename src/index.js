import InitialScreen from "./components/initial_screen";
import reactDom from "react-dom";
import React from "react";
import "./App.css";

function App() {
  const [stateScreen, SetStateScreen] = React.useState(false);

  function toggleScreen() {
    SetStateScreen(!stateScreen);
  }

  return <InitialScreen toggleScreen={toggleScreen} state={stateScreen} />;
}

let root = document.querySelector(".root");
reactDom.render(<App />, root);
