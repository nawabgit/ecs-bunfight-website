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
} from "../common/societyComponents";

function ECSSFC() {
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
            <NavLink to="/ecss-fc/video">Video</NavLink>
            <NavLink to="/ecss-fc/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/ecss-fc/video">
              <IFrame
                src="https://www.youtube.com/embed/UhQFwluIbTc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/ecss-fc/qna">
              <Chatbox user={"ECSSFC"} />
            </Route>
            <Redirect to="/ecss-fc/video" />
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
                Sign up to the ECSS FC Football Trials by clicking the button
                below!
              </p>
              <TippyButton
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=-XhTSvQpPk2-iWadA62p2BJYKmItmY5FjJlYYOsVlaVURFNZTDNUSkswNURQWk40TFoyVlNZSzJTUSQlQCN0PWcu&fbclid=IwAR0qWPXC3-y0WnEURJOVHnC3RH9673sSlP89PY1gsmtq1hZMLVuBKoHErBw"
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
                  href="https://www.facebook.com/ecssfc/"
                  target="_blank"
                >
                  https://www.facebook.com/ecssfc/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiInstagram} size={0.7} />
                <TippyHyperlink
                  href="https://www.instagram.com/ecssfc_/"
                  target="_blank"
                >
                  @ecssfc_
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

export default ECSSFC;
