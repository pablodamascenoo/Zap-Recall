import styled from "styled-components";
export default function QuizzScreen({ state }) {
  const Container = styled.div``;

  const Footer = styled.div`
    position: fixed;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  `;

  const Box = styled.div`
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

  return state ? (
    <Container>
      <Box>
        <img src="assets/images/image 1.svg" alt="" />
        <Title>ZapRecall</Title>
      </Box>
      <Footer>
        <p>0/4 CONCLUÍDOS</p>
      </Footer>
    </Container>
  ) : (
    <></>
  );
}
