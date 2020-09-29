import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiWeb,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
  mdiInformation,
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

function FutureWorlds() {
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
            <NavLink to="/future-worlds/video">Video</NavLink>
            <NavLink to="/future-worlds/qna">{"Q&A"}</NavLink>
          </NavBar>
        </Header>
        <Presentation>
          <Switch>
            <Route path="/future-worlds/video">
              <IFrame
                src="https://www.youtube.com/embed/zcdeRQ-oKzU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="800"
                height="629"
                allowFullScreen={true}
              ></IFrame>
            </Route>
            <Route path="/future-worlds/qna">
              <Chatbox user={"FutureWorlds"} />
            </Route>
            <Redirect to="/future-worlds/video" />
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
                Sign up to the Future Worlds Welcome event by clicking the
                button below!
              </p>
              <TippyButton
                href="https://futureworlds.com/welcome/"
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
                  href="https://www.facebook.com/FutureworldsSoton/"
                  target="_blank"
                >
                  https://www.facebook.com/FutureworldsSoton/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiTwitter} size={0.7} />
                <TippyHyperlink
                  href="https://www.twitter.com/FutureWorlds/"
                  target="_blank"
                >
                  @futureworlds
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiLinkedin} size={0.7} />
                <TippyHyperlink
                  href="https://www.linkedin.com/company/future-worlds/"
                  target="_blank"
                >
                  https://www.linkedin.com/company/future-worlds/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiInstagram} size={0.7} />
                <TippyHyperlink
                  href="https://www.instagram.com/futureworldssoton/"
                  target="_blank"
                >
                  https://www.instagram.com/futureworldssoton/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink
                  href="https://www.futureworlds.com/"
                  target="_blank"
                >
                  https://www.futureworlds.com/
                </TippyHyperlink>
              </TippyPair>
            </TippyContent>
          }
          placement="left"
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
              <TippyHeader>Extra Information</TippyHeader>
              <p>
                Be inspired by those who made it happen whilst studying at
                university. Join Future Worlds, the University of Southampton’s
                on-campus startup accelerator, this Welcome Week on 1st October
                for our live online broadcast and learn how you can get involved
                in the exciting startup community here at the University.
              </p>
              <p>
                By joining this event you will have the opportunity to find out
                how you can get £500 to help explore your own startup idea. This
                has been made possible from the support of Santander and the
                Student Enterprise team here at the University.
              </p>
              <p>
                Future Worlds hosts inspiring startup events, skills workshops
                and investor pitching opportunities and accelerates ideas
                through one-to-one support and its network of mentors and
                millionaire investors. We exist to help aspiring University
                entrepreneurs change the world with their ideas.
              </p>
              <p>
                Register for free today:{" "}
                <TippyHyperlink href="https://futureworlds.com/welcome/">
                  https://futureworlds.com/welcome/
                </TippyHyperlink>
              </p>
            </TippyContent>
          }
          placement="left"
          arrow={true}
          interactive={true}
        >
          <Circle>
            <Icon path={mdiInformation} size={1} />
          </Circle>
        </StyledTippy>
      </Sidebar>
    </CenteredPanel>
  );
}

export default FutureWorlds;
