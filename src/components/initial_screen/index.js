import styled from "styled-components";

export default function InitialScreen() {
  const Title = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    color: white;
    font-family: "Righteous";
    font-size: 45px;
  `;

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 150px;
  `;

  const Button = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #d70900;
    border-radius: 5px;
    color: #d70900;
    font-size: 18px;
    width: 192px;
    height: 41px;
    font-family: "Recursive", sans-serif;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Image = styled.img`
    width: 100px;
    height: 100px;
  `;

  return (
    <Container className="initial-screen">
      <Box>
        <Image src="assets/images/image 1.svg" alt="" />
        <Title>ZapRecall</Title>
      </Box>
      <Button>Iniciar Recall</Button>
    </Container>
  );
}
