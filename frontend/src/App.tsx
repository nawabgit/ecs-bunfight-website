import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import WelcomeScreen from "./features/WelcomeScreen";
import DevECS from "./features/DevECS";

const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

const BasePanel = styled.div`
  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1%;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

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

const SelectedPanel = styled(BasePanel)`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(5, 1fr);

  flex: 7;
  margin-right: 1%;
  overflow-y: auto;
  padding: 2% 2%;
`;

function App() {
  const [selectedSoc, setSelectedSoc] = useState("");

  return (
    <AppContainer>
      {!selectedSoc && <WelcomeScreen setSelectedSoc={setSelectedSoc} />}
      {selectedSoc === "DevECS" && (
        <SelectedPanel>
          <DevECS />
        </SelectedPanel>
      )}
    </AppContainer>
  );
}

export default App;
