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
              <div>:(</div>
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
                  href="https://meet.google.com/mcj-zhdj-aff"
                  target="_blank"
                >
                  Google Meets
                </TippyHyperlink>
              </TippyPair>
              <TippyHyperlink
                style={{ marginTop: "1rem" }}
                href="https://rb.gy/j0xgwz/"
                target="_blank"
              >
                Add to Google Calendar
              </TippyHyperlink>
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
                href="https://www.susu.org/groups/robosoc/"
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
