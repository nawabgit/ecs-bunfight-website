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

function ECSS() {
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
            <NavLink to="/ecss/presentation">Presentation</NavLink>
            <NavLink to="/ecss/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/ecss/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vQbcgsYH8BlNBZq00LVBRg5Thts8uvMD4DaXCTa2mj3IUFqVSau2o6I3vD4l94Ung/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/ecss/qna">
              <Chatbox user={2} />
            </Route>
            <Redirect to="/ecss/presentation" />
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
              <p>Sign up to ECSS through SUSU by clicking the button below!</p>
              <TippyButton
                href="https://www.susu.org/groups/ecss"
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
                  href="https://www.facebook.com/ecss.soton"
                  target="_blank"
                >
                  https://www.facebook.com/ecss.soton/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebookMessenger} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/groups/ecss.soton/"
                  target="_blank"
                >
                  https://www.facebook.com/groups/ecss.soton/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiDiscord} size={0.7} />
                <TippyHyperlink href="discord.gg/sZpF58S" target="_blank">
                  discord.gg/sZpF58S/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiInstagram} size={0.7} />
                <TippyHyperlink
                  href="https://www.instagram.com/ecss_soton/"
                  target="_blank"
                >
                  @ecss_soton
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink
                  href="https://www.society.ecs.soton.ac.uk/"
                  target="_blank"
                >
                  https://www.society.ecs.soton.ac.uk
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
          <p>Sign up to ECSS through SUSU by clicking the button below!</p>
          <TippyButton href="https://www.susu.org/groups/ecss" target="_blank">
            Sign Up
          </TippyButton>
        </TippyContent>
        <TippyContent>
          <TippyHeader>Social platforms</TippyHeader>
          <TippyPair>
            <Icon path={mdiFacebook} size={0.7} />
            <TippyHyperlink
              href="https://www.facebook.com/ecss.soton"
              target="_blank"
            >
              https://www.facebook.com/ecss.soton/
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiFacebookMessenger} size={0.7} />
            <TippyHyperlink
              href="https://www.facebook.com/groups/ecss.soton/"
              target="_blank"
            >
              https://www.facebook.com/groups/ecss.soton/
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiDiscord} size={0.7} />
            <TippyHyperlink href="discord.gg/sZpF58S" target="_blank">
              discord.gg/sZpF58S/
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiInstagram} size={0.7} />
            <TippyHyperlink
              href="https://www.instagram.com/ecss_soton/"
              target="_blank"
            >
              @ecss_soton
            </TippyHyperlink>
          </TippyPair>
          <TippyPair>
            <Icon path={mdiWeb} size={0.7} />
            <TippyHyperlink
              href="https://www.society.ecs.soton.ac.uk/"
              target="_blank"
            >
              https://www.society.ecs.soton.ac.uk
            </TippyHyperlink>
          </TippyPair>
        </TippyContent>
      </MobileDescription>
    </CenteredPanel>
  );
}

export default ECSS;
