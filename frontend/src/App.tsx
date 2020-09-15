import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 6em 8em;

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

const Panel = styled.div`
  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const SocietyPanel = styled(Panel)`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 10em);

  flex: 7;
  margin-right: 1em;
  overflow-y: auto;
  padding: 2em 2em;
`;

const WelcomePanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 3;
  overflow-y: auto;
  margin-left: 1em;
  padding: 2em 2em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  background-color: #3e3e3e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 10em;
  height: 11em;
  padding: 1.5em 1rem;

  &:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

const SocietyAvatar = styled.div`
  background-color: white;
  min-height: 5em;
  min-width: 5em;
  border-radius: 5em;
  margin-bottom: 1rem;
`;

const WelcomeTitle = styled.div`
  font-size: 32pt;
  font-weight: 550;
  margin-bottom: 1rem;
`;

const WelcomeDivider = styled.div`
  width: 100%;
  border-bottom: solid 1px gray;
  margin-bottom: 2rem;
`;

const CenteredText = styled.div`
  min-height: 2em;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <SocietyPanel>
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
        <SocietyCard />
      </SocietyPanel>
      <WelcomePanel>
        <WelcomeTitle>ECS Bunfight 2020</WelcomeTitle>
        <WelcomeDivider />
        <CenteredText>
          Welcome to the virtual ECS Bunfight 2020. The panel on the left
          contains all of the ECS-supported societies. Click on a society to
          view resources and links. Drop-in sessions through zoom are available.
        </CenteredText>
      </WelcomePanel>
    </AppContainer>
  );
}

function SocietyCard() {
  return (
    <Card>
      <SocietyAvatar />
      <CenteredText>Society Name</CenteredText>
    </Card>
  );
}

export default App;
