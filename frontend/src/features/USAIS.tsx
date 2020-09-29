import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiFacebook,
  mdiCalendar,
  mdiClockTimeFour,
  mdiMapMarker,
  mdiAt,
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

function USAIS() {
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
            <NavLink to="/aisoc-usais/presentation">Presentation</NavLink>
            <NavLink to="/aisoc-usais/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/aisoc-usais/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vQMck2jL6HG-3wq5K1C7IHW2qpqFXbYqyhllKG3P5C3f8AWVHeq6Y5zS8vul68mEw/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/aisoc-usais/qna">
              <Chatbox user={15} />
            </Route>
            <Redirect to="/aisoc-usais/presentation" />
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
                <span>Friday 2nd October</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>14:45 - 15:30</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <span>The Cube</span>
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
                Sign up to USAIS by liking their Facebook page - click the link
                below!
              </p>
              <TippyButton href="https://www.facebook.com/UniversityofSouthamptonAISociety">
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
                <TippyHyperlink href="mailto:usais@soton.ac.uk" target="_blank">
                  usais@soton.ac.uk
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/UniversityofSouthamptonAISociety/"
                  target="_blank"
                >
                  https://www.facebook.com/UniversityofSouthamptonAISociety/
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

export default USAIS;
