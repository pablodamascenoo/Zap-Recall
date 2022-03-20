import styled from "styled-components";

export default function Button({ color }) {
  let btn;
  const Green = styled.button`
    background-color: #2fbe34;
  `;
  const Yellow = styled.button`
    background-color: #ff922e;
  `;
  const Red = styled.button`
    background-color: #ff3030;
  `;

  if (color === "red") btn = <Red className="flash-button">Não Lembrei</Red>;
  else if (color === "yellow")
    btn = <Yellow className="flash-button">Quase não lembrei</Yellow>;
  else if (color === "green")
    btn = <Green className="flash-button">Zap!</Green>;
  return btn;
}
