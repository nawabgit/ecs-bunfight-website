import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiAt,
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
  MobileDescription,
} from "../common/societyComponents";

function SUCSS() {
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
            <NavLink to="/cyber-security-society-sucss/presentation">
              Presentation
            </NavLink>
            <NavLink to="/cyber-security-society-sucss/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/cyber-security-society-sucss/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vQgeHCwbZfMrQkyBvgJQufhYGHbL_iRk1nr5EeH05UtOZ8JmktPz_q_XAct9Zq3eQ/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/cyber-security-society-sucss/qna">
              <Chatbox user={10} />
            </Route>
            <Redirect to="/cyber-security-society-sucss/presentation" />
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
              <p>Sign up to SUCSS through SUSU by clicking the button below!</p>
              <TippyButton
                href="https://www.susu.org/groups/cyber-security-society"
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
                <TippyHyperlink href="mailto:sucss@soton.ac.uk" target="_blank">
                  sucss@soton.ac.uk
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebook} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/sotoncyber/"
                  target="_blank"
                >
                  https://www.facebook.com/sotoncyber/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiDiscord} size={0.7} />
                <TippyHyperlink
                  href="https://sucss.org/discord/"
                  target="_blank"
                >
                  https://sucss.org/discord/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink href="https://www.sucss.org/" target="_blank">
                  https://www.sucss.org/
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
          <p>
            This society is <strong>not</strong> hosting a meet-and-greet. Check
            their social media instead!
          </p>
        </TippyContent>
        <TippyContent>
          <TippyHeader>Sign up</TippyHeader>
          <p>Sign up to SUCSS through SUSU by clicking the button below!</p>
          <TippyButton
            href="https://www.susu.org/groups/cyber-security-society"
            target="_blank"
          >
            Sign Up
          </TippyButton>
        </TippyContent>
        <TippyContent>
          <TippyHeader>Social platforms</TippyHeader>
          <TippyPair>
            <Icon path={mdiAt} size={0.7} />
            <TippyHyperlink href="mailto:sucss@soton.ac.uk" target="_blank">
              sucss@soton.ac.uk
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiFacebook} size={0.7} />
            <TippyHyperlink
              href="https://www.facebook.com/sotoncyber/"
              target="_blank"
            >
              https://www.facebook.com/sotoncyber/
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiDiscord} size={0.7} />
            <TippyHyperlink href="https://sucss.org/discord/" target="_blank">
              https://sucss.org/discord/
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiWeb} size={0.7} />
            <TippyHyperlink href="https://www.sucss.org/" target="_blank">
              https://www.sucss.org/
            </TippyHyperlink>
          </TippyPair>
        </TippyContent>
      </MobileDescription>
    </CenteredPanel>
  );
}

export default SUCSS;
