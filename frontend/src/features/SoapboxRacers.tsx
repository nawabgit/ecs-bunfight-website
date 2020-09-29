import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
  mdiCalendar,
  mdiClockTimeFour,
  mdiMapMarker,
} from "@mdi/js";
import { Link, NavLink, Route, Switch, Redirect } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";

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
  Chatbox,
  MobileDescription,
} from "../common/societyComponents";

const SmallHeader = styled.h4`
  margin: 1rem 0rem 0.25rem;
`;

function SoapboxRacers() {
  return (
    <CenteredPanel>
      <Wrapper>
        <Header>
          <Link to="/">
            <Circle>
              <Icon path={mdiArrowLeftThick} size={1} />
            </Circle>
          </Link>
          <NavBar>
            <NavLink to="/soapbox-racers/video">Video</NavLink>
            <NavLink to="/soapbox-racers/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/soapbox-racers/video">
              <IFrame
                src="https://www.youtube.com/embed/aDlf7G4gz_c"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/soapbox-racers/qna">
              <Chatbox user={9} />
            </Route>
            <Redirect to="/soapbox-racers/video" />
          </Switch>
        </Presentation>
      </Wrapper>
      <Sidebar>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Meet-and-greet</TippyHeader>
              <SmallHeader>{"Online Q&A"}</SmallHeader>
              <TippyPair>
                <Icon path={mdiCalendar} size={0.7} />
                <span>Tuesday 29th September</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>16:00 - 18:00</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <TippyHyperlink
                  href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A00687f0db3c244f685e6d3f3312d602d%40thread.tacv2%2FGeneral%3FgroupId%3D40ff6040-d0cb-4961-99ea-6190f54f9dfd%26tenantId%3D4a5378f9-29f4-4d3e-be89-669d03ada9d8&type=channel&deeplinkId=936c95b1-1986-40b2-9035-2e563cf2137a&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                  target="_blank"
                >
                  Microsoft Teams
                </TippyHyperlink>
              </TippyPair>
              <SmallHeader>{"In-person meet-and-greet"}</SmallHeader>
              <TippyPair>
                <Icon path={mdiCalendar} size={0.7} />
                <span>Friday 2nd October</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>16:00 - 16:45</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <span>
                  The Cube <strong>(limited spaces)</strong>
                </span>
              </TippyPair>
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
                Sign up to the Soapbox Racers society through SUSU by clicking
                the button below!
              </p>
              <TippyButton href="https://www.susu.org/groups/soapbox-racers">
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
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/UoSSoapbox/"
                  target="_blank"
                >
                  https://www.facebook.com/UoSSoapbox/
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
      <MobileDescription>
        <TippyContent>
          <TippyHeader>Meet-and-greet</TippyHeader>
          <SmallHeader>{"Online Q&A"}</SmallHeader>
          <TippyPair>
            <Icon path={mdiCalendar} size={0.7} />
            <span>Tuesday 29th September</span>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiClockTimeFour} size={0.7} />
            <span>16:00 - 18:00</span>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiMapMarker} size={0.7} />
            <TippyHyperlink
              href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A00687f0db3c244f685e6d3f3312d602d%40thread.tacv2%2FGeneral%3FgroupId%3D40ff6040-d0cb-4961-99ea-6190f54f9dfd%26tenantId%3D4a5378f9-29f4-4d3e-be89-669d03ada9d8&type=channel&deeplinkId=936c95b1-1986-40b2-9035-2e563cf2137a&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
              target="_blank"
            >
              Microsoft Teams
            </TippyHyperlink>
          </TippyPair>
          <SmallHeader>{"In-person meet-and-greet"}</SmallHeader>
          <TippyPair>
            <Icon path={mdiCalendar} size={0.7} />
            <span>Friday 2nd October</span>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiClockTimeFour} size={0.7} />
            <span>16:00 - 16:45</span>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiMapMarker} size={0.7} />
            <span>
              The Cube <strong>(limited spaces)</strong>
            </span>
          </TippyPair>
        </TippyContent>
        <TippyContent>
          <TippyHeader>Sign up</TippyHeader>
          <p>
            Sign up to the Soapbox Racers society through SUSU by clicking the
            button below!
          </p>
          <TippyButton href="https://www.susu.org/groups/soapbox-racers">
            Sign Up
          </TippyButton>
        </TippyContent>
        <TippyContent>
          <TippyHeader>Social platforms</TippyHeader>
          <TippyPair>
            <Icon path={mdiFacebook} size={0.7} />
            <TippyHyperlink
              href="https://www.facebook.com/UoSSoapbox/"
              target="_blank"
            >
              https://www.facebook.com/UoSSoapbox/
            </TippyHyperlink>
          </TippyPair>
        </TippyContent>
      </MobileDescription>
    </CenteredPanel>
  );
}

export default SoapboxRacers;
