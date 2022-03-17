import InitialScreen from "./components/initial_screen";
import reactDom from "react-dom";
import "./App.css";

function App() {
  return <InitialScreen />;
}

let root = document.querySelector(".root");
reactDom.render(<App />, root);
