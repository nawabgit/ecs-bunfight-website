import React from "react";
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
import "tippy.js/dist/tippy.css";
import {
  StyledTippy,
  TippyContent,
  TippyHeader,
  TippyButton,
  TippyPair,
  TippyHyperlink,
} from "../common/tippyComponents";
import {
  CenteredPanel,
  Wrapper,
  Header,
  Circle,
  NavBar,
  Presentation,
  IFrame,
  Sidebar,
} from "../common/societyComponents";

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
                Sign up to receive work opportunities with DevECS by clicking
                the button below!
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
