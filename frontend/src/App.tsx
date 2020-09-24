import React from "react";
import styled from "styled-components";
import WelcomeScreen from "./features/WelcomeScreen";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 10vh 8vw;

  background-image: radial-gradient(
      circle at 16% 83%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 50%,
      rgba(63, 63, 63, 0.06) 50%,
      rgba(63, 63, 63, 0.06) 100%
    ),
    radial-gradient(
      circle at 68% 87%,
      rgba(66, 66, 66, 0.06) 0%,
      rgba(66, 66, 66, 0.06) 50%,
      rgba(105, 105, 105, 0.06) 50%,
      rgba(105, 105, 105, 0.06) 100%
    ),
    radial-gradient(
      circle at 38% 50%,
      rgba(123, 123, 123, 0.06) 0%,
      rgba(123, 123, 123, 0.06) 50%,
      rgba(172, 172, 172, 0.06) 50%,
      rgba(172, 172, 172, 0.06) 100%
    ),
    linear-gradient(90deg, hsl(18, 0%, 1%), hsl(18, 0%, 1%));
`;

function App() {
  return (
    <AppContainer>
      <WelcomeScreen />
    </AppContainer>
  );
}

export default App;
