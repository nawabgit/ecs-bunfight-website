import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

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

const Panel = styled.div`
  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1%;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const SocietyPanel = styled(Panel)`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(5, 1fr);

  flex: 7;
  margin-right: 1%;
  overflow-y: auto;
  padding: 2% 2%;
`;

const WelcomePanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 3;
  overflow-y: auto;
  margin-left: 1%;
  padding: 2% 2%;
`;

const CenteredText = styled.div`
  text-align: center;
  font-size: 1vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  background-color: #3e3e3e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  width: 100%;
  height: 100%;
  padding: 15% 5%;

  -webkit-animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &:hover {
    cursor: pointer;
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
  width: 50%;
  border-radius: 50%;
  margin-bottom: 10%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const CardText = styled(CenteredText)`
  min-height: 2em;
`;

const WelcomeTitle = styled.div`
  font-size: 3vw;
  font-weight: 500;
  margin-bottom: 5%;
  font-family: "Built Titling Bold";
`;

const WelcomeDivider = styled.div`
  width: 100%;
  border-bottom: solid 1px gray;
  margin-bottom: 5%;
`;

function App() {
  return (
    <AppContainer>
      <SocietyPanel>
        <SocietyCard name="ECSS" />
        <SocietyCard name="Hackasoton" />
        <SocietyCard name="DevECS" />
        <SocietyCard name="FutureWorlds" />
        <SocietyCard name="Wireless Society (SUWS)" />
        <SocietyCard name="RoboSoc" />
        <SocietyCard name="Toastrack" />
        <SocietyCard name="Soapbox Racers" />
        <SocietyCard name="Cyber Security Society (SUCCS)" />
        <SocietyCard name="Spaceflight Society (SUSF)" />
        <SocietyCard name="Robotics Outreach (SRO)" />
        <SocietyCard name="ECSS FC" />
        <SocietyCard name="ECS Empower" />
        <SocietyCard name="AISoc (USAIS)" />
        <SocietyCard name="MedTech" />
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

function SocietyCard({ name }) {
  return (
    <Card>
      <SocietyAvatar />
      <CardText>{name}</CardText>
    </Card>
  );
}

export default App;
