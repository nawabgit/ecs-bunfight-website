import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiAt,
  mdiWeb,
  mdiFacebook,
} from "@mdi/js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  StyledTippy,
  TippyContent,
  TippyHeader,
  TippyButton,
  TippyPair,
  TippyHyperlink,
} from "../common/tippyComponents";

const IFrame = styled.iframe`
  border-radius: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  margin-right: 100px;
  margin-left: 40px;
`;

const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

const CenteredPanel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em 2em;

  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1em;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 70%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex: 0 0 10%;
  width: 90%;

  align-self: end;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 3.5rem;

  & > a {
    font-size: 24pt;
    font-weight: 500;

    color: white;
    text-decoration: none;
    border-bottom: solid 5px white;

    &:last-child {
      color: grey;
      text-decoration: none;
      border-bottom: none;

      margin-left: 2rem;
    }
  }
`;

const Presentation = styled.div`
  align-self: end;
  margin-right: 1rem;
  margin-left: 5rem;
  margin-top: 1rem;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-top: 5rem;
  margin-bottom: 1rem;

  & > div {
    margin: 1.5rem 0rem;

    &:first-child {
      margin-top: 0px;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 35px;

  background-color: #363636;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  cursor: pointer;
  &:hover {
    -webkit-filter: brightness(90%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;

function DevECS() {
  return (
    <CenteredPanel>
      <Wrapper>
        <Header>
          <Circle>
            <Icon path={mdiArrowLeftThick} size={1} />
          </Circle>
          <NavBar>
            <a href="">Presentation</a>
            <a href="">{"Q&A"}</a>
          </NavBar>
        </Header>
        <Presentation>
          <IFrame
            src="https://docs.google.com/presentation/d/e/2PACX-1vQTThN1xN66KghPWPSCVZzVmJ8sQmafWiUXzbcEDIwteQRy1E9mh-CpnH6dsM9IZA/embed?start=false&loop=false&delayms=5000"
            frameBorder="0"
            width="800"
            height="629"
            allowFullScreen={true}
          ></IFrame>
        </Presentation>
      </Wrapper>
      <Sidebar>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Meet-and-greet</TippyHeader>
              <p>
                This society is <strong>not</strong> hosting a meet-and-greet.
                Check their social media instead!
              </p>
            </TippyContent>
          }
          placement="left-start"
          arrow={true}
          interactive={true}
        >
          <Circle>
            <Icon path={mdiMessageVideo} size={1} />
          </Circle>
        </StyledTippy>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Sign up</TippyHeader>
              <p>
                Sign up to work opportunities with DevECS by clicking the button
                below!
              </p>
              <TippyButton
                href="https://tinyurl.com/devecs2020"
                target="_blank"
              >
                Sign Up
              </TippyButton>
            </TippyContent>
          }
          placement="left"
          arrow={true}
          interactive={true}
        >
          <Circle>
            <Icon path={mdiAccountPlus} size={1} />
          </Circle>
        </StyledTippy>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Social platforms</TippyHeader>
              <TippyPair>
                <Icon path={mdiAt} size={0.7} />
                <TippyHyperlink
                  href="mailto:devecs@soton.ac.uk"
                  target="_blank"
                >
                  devecs@soton.ac.uk
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink
                  href="https://devecs.ecs.soton.ac.uk/student/"
                  target="_blank"
                >
                  https://devecs.ecs.soton.ac.uk/student/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/devecs/"
                  target="_blank"
                >
                  https://www.facebook.com/devecs/
                </TippyHyperlink>
              </TippyPair>
            </TippyContent>
          }
          placement="left-end"
          arrow={true}
          interactive={true}
        >
          <Circle>
            <Icon path={mdiAccountGroup} size={1} />
          </Circle>
        </StyledTippy>
      </Sidebar>
    </CenteredPanel>
  );
}

export default DevECS;
