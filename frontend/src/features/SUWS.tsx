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

function SUWS() {
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
            <NavLink to="/wireless-society-suws/presentation">
              Presentation
            </NavLink>
            <NavLink to="/wireless-society-suws/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/wireless-society-suws/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vQMck2jL6HG-3wq5K1C7IHW2qpqFXbYqyhllKG3P5C3f8AWVHeq6Y5zS8vul68mEw/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/wireless-society-suws/qna">
              <Chatbox user={"SUWS"} />
            </Route>
            <Redirect to="/wireless-society-suws/presentation" />
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
                <span>Thursday 1st October</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>18:00</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <TippyHyperlink
                  href="https://teams.microsoft.com/l/meetup-join/19%3ae9c1805acc39404983470da1c62c87d9%40thread.tacv2/1600456551789?context=%7b%22Tid%22%3a%224a5378f9-29f4-4d3e-be89-669d03ada9d8%22%2c%22Oid%22%3a%226d0303f7-f833-40fd-8bb1-44629be6a794%22%7d"
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
              <p>Sign up to SUWS through SUSU by clicking the button below!</p>
              <TippyButton
                href="https://www.susu.org/groups/sown-suws"
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
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/groups/g3kmi/"
                  target="_blank"
                >
                  https://www.facebook.com/groups/g3kmi/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiTwitter} size={0.7} />
                <TippyHyperlink
                  href="https://www.twitter.com/g3kmi/"
                  target="_blank"
                >
                  https://www.twitter.com/g3kmi/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink href="https://www.suws.org.uk/" target="_blank">
                  https://www.suws.org.uk/
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

export default SUWS;
