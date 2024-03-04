import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
  }50%{
    border-radius: 100px;
  }
  100%{
    transform:rotate(360deg);

  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 52px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
