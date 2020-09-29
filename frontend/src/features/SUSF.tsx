import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiDiscord,
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

function SUSF() {
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
            <NavLink to="/spaceflight-society-susf/video">Video</NavLink>
            <NavLink to="/spaceflight-society-susf/presentation">
              Presentation
            </NavLink>
            <NavLink to="/spaceflight-society-susf/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/spaceflight-society-susf/video">
              <IFrame
                src="https://www.youtube.com/embed/ZoMuBMh2TCw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/spaceflight-society-susf/presentation">
              <IFrame
                src="https://docs.google.com/presentation/d/e/2PACX-1vS__RuHtYV7aFQ97JWYLmAmnWQVkLigaR8fLGiCw4vboKNBwbA02KQjFc0kiJhXRg/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/spaceflight-society-susf/qna">
              <Chatbox user={"SUSF"} />
            </Route>
            <Redirect to="/spaceflight-society-susf/video" />
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
                Check out their{" "}
                <TippyHyperlink
                  href="https://sucss.org/discord/"
                  target="_blank"
                >
                  Discord
                </TippyHyperlink>{" "}
                instead!
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
                This society is currently not affiliated with SUSU. Click the
                button below to view SUSU affiliated societies!
              </p>
              <TippyButton href="https://www.susu.org" target="_blank">
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
                  href="https://www.facebook.com/suspaceflight/"
                  target="_blank"
                >
                  https://www.facebook.com/suspaceflight/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiTwitter} size={0.7} />
                <TippyHyperlink
                  href="https://twitter.com/SUSpaceflight/"
                  target="_blank"
                >
                  https://twitter.com/SUSpaceflight/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiDiscord} size={0.7} />
                <TippyHyperlink
                  href="https://discord.gg/c7QEUBb"
                  target="_blank"
                >
                  https://discord.gg/c7QEUBb/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink
                  href="https://spaceflight.soton.ac.uk/"
                  target="_blank"
                >
                  https://spaceflight.soton.ac.uk/
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

export default SUSF;
