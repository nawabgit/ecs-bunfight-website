import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiCalendar,
  mdiClockTimeFour,
  mdiMapMarker,
  mdiDiscord,
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

function Robosoc() {
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
            <NavLink to="/robosoc/video">Video</NavLink>
            <NavLink to="/robosoc/presentation">Presentation</NavLink>
            <NavLink to="/robosoc/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/robosoc/video">
              <IFrame
                src="https://www.youtube.com/embed/m1NdNeztJG0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/robosoc/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vQvzpJZPrxB7V5tKIVSXLc0gNPB9W3FCFqf_qhdpm51u5Dzfy1Vb4TGSJDvEx9GMg/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/robosoc/qna">
              <Chatbox user={7} />
            </Route>
            <Redirect to="/robosoc/video" />
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
                <span>15:00</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <TippyHyperlink
                  href="https://teams.microsoft.com/l/meetup-join/19%3a11b00874014745ae9bf7fb256fb0b811%40thread.tacv2/1601244796222?context=%7b%22Tid%22%3a%224a5378f9-29f4-4d3e-be89-669d03ada9d8%22%2c%22Oid%22%3a%22c08e33eb-3dfb-49c7-bf29-e5008ffb01fe%22%7d"
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
                Sign up to Robosoc through SUSU by clicking the button below!
              </p>
              <TippyButton
                href="https://www.susu.org/groups/robosoc"
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
                <Icon path={mdiDiscord} size={0.7} />
                <TippyHyperlink
                  href="https://discord.gg/FCfW2A/"
                  target="_blank"
                >
                  https://discord.gg/FCfW2A/
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

export default Robosoc;
