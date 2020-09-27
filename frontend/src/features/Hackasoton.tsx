import React from "react";
import Icon from "@mdi/react";
import {
  mdiMessageVideo,
  mdiAccountPlus,
  mdiAccountGroup,
  mdiArrowLeftThick,
  mdiAt,
  mdiWeb,
  mdiFacebook,
  mdiCalendar,
  mdiClockTimeFour,
  mdiMapMarker,
  mdiFacebookMessenger,
} from "@mdi/js";
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

function DevECS() {
  return (
    <CenteredPanel>
      <Wrapper>
        <Header>
          <Circle>
            <Icon path={mdiArrowLeftThick} size={1} />
          </Circle>
          <NavBar>
            <a href="">Presentation</a>
            <a href="">{"Q&A"}</a>
          </NavBar>
        </Header>
        <Presentation>
          <IFrame
            src="https://docs.google.com/presentation/d/e/2PACX-1vTOEMw1Q3m0QLLXn5psD30LfHHu9YX9MFBe7McieIjiBTblrmXMuG-HVSdhgHc9RtA8wblSfSYSunzK/embed?start=false&loop=false&delayms=5000"
            frameBorder="0"
            width="800"
            height="629"
            allowFullScreen={true}
          ></IFrame>
        </Presentation>
      </Wrapper>
      <Sidebar>
        <StyledTippy
          content={
            <TippyContent>
              <TippyHeader>Meet-and-greet</TippyHeader>
              <TippyPair>
                <Icon path={mdiCalendar} size={0.7} />
                <span>Tuesday 29th September</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiClockTimeFour} size={0.7} />
                <span>14:00 - 15:00</span>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiMapMarker} size={0.7} />
                <TippyHyperlink
                  href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTU2ODdmMDEtOTVmNy00N2FkLWE1ZDQtZTY0YzYxYjVkMzAy%40thread.v2/0?context=%7b%22Tid%22%3a%224a5378f9-29f4-4d3e-be89-669d03ada9d8%22%2c%22Oid%22%3a%22d3660cdf-e7e8-464c-80b8-4c0fc1153283%22%7d"
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
                Sign up to the Hackasoton society by clicking the button below
                and joining the mailing list!
              </p>
              <TippyButton
                href="https://hackasoton.us7.list-manage.com/subscribe/post?u=959a42d567d3f16d123db561e&amp;id=83ab3277fa"
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
                  href="http://facebook.com/HackaSoton/"
                  target="_blank"
                >
                  http://facebook.com/HackaSoton/
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiFacebookMessenger} size={0.7} />
                <TippyHyperlink
                  href="https://www.facebook.com/groups/HackaSoton/"
                  target="_blank"
                >
                  http://www.facebook.com/groups/HackaSoton
                </TippyHyperlink>
              </TippyPair>
              <TippyPair>
                <Icon path={mdiWeb} size={0.7} />
                <TippyHyperlink
                  href="http://hackthesouth.co.uk/"
                  target="_blank"
                >
                  http://hackthesouth.co.uk/
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

export default DevECS;
