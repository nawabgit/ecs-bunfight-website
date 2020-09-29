import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiCalendar,
  mdiClockTimeFour,
  mdiMapMarker,
  mdiTwitter,
  mdiAt,
  mdiInstagram,
  mdiLinkedin,
} from "@mdi/js";
import { Link, NavLink, Route, Switch, Redirect } from "react-router-dom";

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
  Chatbox,
} from "../common/societyComponents";

function MedTech() {
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
            <NavLink to="/medtech/presentation">Presentation</NavLink>
            <NavLink to="/medtech/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/medtech/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vST4mGLbf2VkU2a5anWby0c7lPx49w8-lLe2RLQf3eMWUf2xsIWRMZmzDGPS5wK9A/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/medtech/qna">
              <Chatbox user={16} />
            </Route>
            <Redirect to="/medtech/presentation" />
          </Switch>
        </Presentation>
      </Wrapper>
      <Sidebar>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Meet-and-greet</TippyHeader>
              <TippyPair>
                <Icon path={mdiCalendar} size={0.7} />
                <span>Wednesday 30th September</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>18:00 - 20:00</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <TippyHyperlink
                  href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MGI2MzJjOWUtZDgwMS00ZDhjLTkyNmUtNTQzZmUzZjdhMDA3%40thread.v2/0?context=%7b%22Tid%22%3a%224a5378f9-29f4-4d3e-be89-669d03ada9d8%22%2c%22Oid%22%3a%229ebb03d7-5ce1-4119-baf5-1893be5addfe%22%7d"
                  target="_blank"
                >
                  Microsoft Teams
                </TippyHyperlink>
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
                Sign up to the MedTech by clicking the button below and joining
                the mailing list!
              </p>
              <TippyButton
                href="https://mailchi.mp/3ec328019946/sotonmedtech"
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
                  href="mailto:sotonmedtech@gmail.com"
                  target="_blank"
                >
                  sotonmedtech@gmail.com
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="www.facebook.com/sotonmedtech"
                  target="_blank"
                >
                  www.facebook.com/sotonmedtech/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiLinkedin} size={0.7} />
                <TippyHyperlink
                  href="www.linkedin.com/company/sotonmedtech/"
                  target="_blank"
                >
                  www.linkedin.com/company/sotonmedtech/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiInstagram} size={0.7} />
                <TippyHyperlink
                  href="www.instagram.com/sotonmedtech/"
                  target="_blank"
                >
                  @sotonmedtech
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

export default MedTech;
