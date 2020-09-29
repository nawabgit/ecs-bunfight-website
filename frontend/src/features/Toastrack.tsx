import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiFacebookMessenger,
  mdiDiscord,
  mdiInstagram,
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

function Toastrack() {
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
            <NavLink to="/toastrack/presentation">Presentation</NavLink>
            <NavLink to="/toastrack/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/toastrack/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vT9vEKq3W0SL3Jmo8YNmbVN0igzOxQGxH3CXvLR1KKFsTJDkgAy5o2jasjB7T0bSV-y6PHKiraYZDsh/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/toastrack/qna">
              <Chatbox user={"Toastrack"} />
            </Route>
            <Redirect to="/toastrack/presentation" />
          </Switch>
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
                Sign up to toastrack via liking their Facebook page by clicking
                the button below!
              </p>
              <TippyButton
                href="https://www.facebook.com/toastrackbus"
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
                  href="mailto:toastrack@soton.ac.uk"
                  target="_blank"
                >
                  toastrack@soton.ac.uk
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/toastrackbus"
                  target="_blank"
                >
                  https://www.facebook.com/toastrackbus/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebookMessenger} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/groups/toastrack"
                  target="_blank"
                >
                  https://www.facebook.com/groups/toastrack/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiDiscord} size={0.7} />
                <TippyHyperlink href="discord.gg/CzuEwZq/" target="_blank">
                  discord.gg/CzuEwZq/
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

export default Toastrack;
