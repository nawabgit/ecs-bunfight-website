import React from "react";
import styled from "styled-components";
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

const SmallHeader = styled.h4`
  margin: 0.1rem 0rem;
`;

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
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Extra Information</TippyHeader>
              <SmallHeader>ECSS A</SmallHeader>
              <p>
                ECSS A (est. 2007) is a football team in the 2 nd division of
                the Intramural Sunday league. In the 2019/20 season, ECSS A won
                all 7 games we played, all but guaranteeing us promotion into
                the top division. However, due to the Covid-19 outbreak, the
                season was declared null and void. Training consists of fitness,
                technical and tactical drills, followed by 6/7 a side game.
                Social events help the squad to bond, both with themselves and
                players in the B team. The squads are reviewed regularly
                throughout the season, with promotion to the A team possible for
                any club member. ECSS A is the perfect squad for anyone who has
                a background in football and is looking to improve alongside
                players of a similar mindset.
              </p>
              <SmallHeader>ECSS B</SmallHeader>
              <p>
                ECSS B (Est. 2018) is a football team in the 3 rd  division of
                the Intramural Sunday league. Over the past couple
                of seasons, the quality and numbers in the squad have been
                growing steadily and this year we are looking to be extremely
                competitive in the league with your help! Our training sessions
                focus on both some technical drills but mainly shape and
                movement for the 11-a-side games. We play because we love the
                game so whether you’ve been playing for years, or only have a
                little experience this is the club for you. ECSS B is the
                perfect squad for anyone who is new to the game and is looking
                to develop their skills and have a good time.
              </p>
              <SmallHeader>Tour</SmallHeader>
              <p>
                The annual ECSS FC Tour is undoubtedly the best thing you will
                experience in your university career. There is no better way to
                consolidate team chemistry than spending 5 days with the lads in
                a popular European city, consuming beverages, doing karaoke and
                beating the local engineering society at a friendly game of
                11-a-side. Tour secretary is elected at the AGM each year to
                organise the holiday.
              </p>
              <SmallHeader>Socials</SmallHeader>
              <p>
                Whether or not you’re making an impact on the football pitch
                socials are for every member of the club regardless of ability. 
                Socials aid in creating the true chemistry between players of
                both squads, through the consumption of a cold beverage (Either
                alcoholic or Non-Alcoholic depending on your preference) and a
                few laughs with the lads over some games or whatever the weeks
                theme demands.  Socials take place every other Wednesday and the
                theme of each social varies from week to week, the only
                recurring theme is the infamous Shirt and Ties you will become
                accustomed to and never want to take off and the games you will
                have to learn. A few examples of previous socials we have had
                are: 
                <ul>
                  <li>Father Sons social </li>
                  <li>Sausage social  </li>
                  <li>Halloween Fitness social </li>
                  <li>A very ECSSFC Christmas  </li>
                  <li>ECSSFC White T shirt social </li>
                </ul>
                Prior to the outbreak of COVID-19 we would journey to Oceana, a
                club which features Southampton’s main attraction - The Cheese
                floor. Where we would dance into the early hours of the morning
                and share tales to other students whilst consuming a slightly
                below room temperature sugar laced VK. However, the Great minds
                of the Backroom staff have been working hard to find a suitable
                alternative to provide a similar experience whilst complying
                with the current Government guidelines and advice.
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

export default ECSSFC;
