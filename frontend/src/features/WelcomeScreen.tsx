import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ECSSLogo } from "../images/ecss-logo.svg";
import { ReactComponent as HackasotonLogo } from "../images/hackasoton-logo.svg";
import { ReactComponent as DevECSLogo } from "../images/devecs-logo.svg";
import { ReactComponent as FutureWorldsLogo } from "../images/future-worlds-logo.svg";
import { ReactComponent as EmpowerLogo } from "../images/empower-logo.svg";
import { ReactComponent as RoboSocLogo } from "../images/robosoc-logo.svg";
import { ReactComponent as ToastrackLogo } from "../images/toastrack-logo.svg";
import { ReactComponent as SoapboxRacersLogo } from "../images/soapbox-logo.svg";
import { ReactComponent as SUCSSLogo } from "../images/cyber-sec-soc-logo.svg";
import { ReactComponent as SUSFLogo } from "../images/susf-logo.svg";
import { ReactComponent as SROLogo } from "../images/sro-logo.svg";
import { ReactComponent as ECSSFC } from "../images/ecss-fc-logo.svg";
import { ReactComponent as SUWSLogo } from "../images/suws-logo.svg";
import { ReactComponent as USAISLogo } from "../images/usais-logo.svg";
import { ReactComponent as MedTechLogo } from "../images/medtech-logo.svg";

const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

const BasePanel = styled.div`
  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  border-radius: 1%;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const SocietyPanel = styled(BasePanel)`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(5, 1fr);

  flex: 7;
  margin-right: 1%;
  overflow-y: auto;
  padding: 2% 2%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex: 1;
    width: 100%
    margin-right: 0px;
    padding: 0px 0px;
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

const WelcomePanel = styled(BasePanel)`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 3;
  overflow-y: auto;
  margin-right: 1%;
  padding: 2% 2%;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-bottom: 1rem;
    padding: 1rem 1rem;
  }
`;

const JustifiedText = styled.p`
  font-size: 12pt;
`;

const Card = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  text-decoration: none;
  color: white;

  background-color: #3e3e3e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  width: 100%;
  height: 100%;
  padding: 15% 5%;

  -webkit-animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (max-width: 800px) {
    border-radius: 0px;
    max-height: 300px;
    padding: 5px 5px;
    margin: 10px 0px;
  }

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

const BetterCard = styled(Card)`
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);
`;

const CardText = styled.div`
  text-align: center;
  font-size: 14pt;
  padding-top: 5%;
  min-height: 2em;

  @media screen and (max-width: 800px) {
    min-height: 0px;
  }
`;

const WelcomeTitle = styled.div`
  font-size: 36pt;
  font-weight: 500;
  margin-bottom: 5%;
  font-family: "Built Titling Bold";
`;

const WelcomeDivider = styled.div`
  width: 100%;
  border-bottom: solid 1px gray;
  margin-bottom: 5%;
`;

function WelcomeScreen() {
  return (
    <>
      <WelcomePanel>
        <WelcomeTitle>ECS Expo 2020</WelcomeTitle>
        <WelcomeDivider />
        <JustifiedText>
          Welcome to the ECS Expo 2020! Brought to you by ECSS, this is our
          digital solution for the ECS Bunfight of previous years hosted during
          JumpStart. (This site is live until Friday 2nd October 2020.)
        </JustifiedText>
        <JustifiedText>
          The Expo is a showcase of many of the electronics- and/or
          computing-related societies here at the University for you to
          consider. Most are run primarily by ECS students, offering unique
          opportunities to engage in tech: learn more about and network within
          relevant industries, explore skills and specialisms for your
          professional development, and/or tinker even outside a lab!
        </JustifiedText>
        <JustifiedText>
          On each society's page, you'll be able to view their introductions in
          video or presentation format, post questions directly for them to
          answer on a public pinboard, and view information on scheduled
          meet-and-greet sessions—if this is a virtual meet-and-greet, you'll
          also be able to attend directly from their page. Each page will also
          allow you to sign up to the society directly via their preferred
          method, e.g. through the SUSU platform or by subscribing to an
          independent mailing list.
        </JustifiedText>
        <JustifiedText>
          Enjoy browsing the Expo! If you run into any difficulties, contact us
          at society@ecs.soton.ac.uk.
        </JustifiedText>
      </WelcomePanel>
      <SocietyPanel>
        <BetterCard
          to={
            "/" + "ECSS".replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase()
          }
        >
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="white"></circle>
            <ECSSLogo x="11" y="11" width={"80%"} height={"80%"} />
          </svg>
          <CardText>ECSS</CardText>
        </BetterCard>
        <SocietyCard
          name="Hackasoton"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <HackasotonLogo x="23" y="23" width={"55%"} height={"55%"} />
            </svg>
          }
        />
        <SocietyCard
          name="DevECS"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <DevECSLogo x="15" y="3" width={"95%"} height={"95%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Future Worlds"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <FutureWorldsLogo x="22" y="20" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Wireless Society (SUWS)"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <SUWSLogo x="20" y="22" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="RoboSoc"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <RoboSocLogo x="21" y="16" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Toastrack"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <ToastrackLogo x="20" y="18" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Soapbox Racers"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <SoapboxRacersLogo x="21" y="20" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Cyber Security Society (SUCSS)"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <SUCSSLogo x="15" y="16" width={"70%"} height={"70%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Spaceflight Society (SUSF)"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <SUSFLogo x="20" y="20" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="Robotics Outreach (SRO)"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <SROLogo x="21" y="20" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="ECSS FC"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <ECSSFC x="20" y="18" width={"65%"} height={"65%"} />
            </svg>
          }
        />
        <SocietyCard
          name="ECS Empower"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <EmpowerLogo x="17" y="15" width={"65%"} height={"65%"} />
            </svg>
          }
        />
        <SocietyCard
          name="AISoc (USAIS)"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <USAISLogo x="20" y="20" width={"60%"} height={"60%"} />
            </svg>
          }
        />
        <SocietyCard
          name="MedTech"
          logo={
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="white"></circle>
              <MedTechLogo x="18" y="17" width={"65%"} height={"65%"} />
            </svg>
          }
        />
      </SocietyPanel>
    </>
  );
}

function SocietyCard({ name, logo }) {
  return (
    <Card
      to={"/" + name.replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase()}
    >
      {logo}
      <CardText>{name}</CardText>
    </Card>
  );
}

export default WelcomeScreen;
