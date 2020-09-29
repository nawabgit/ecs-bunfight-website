import styled from "styled-components";
import Tippy from "@tippyjs/react";

export const StyledTippy = styled(Tippy)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;

export const TippyContent = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 600px;
  overflow-y: scroll;
  padding: 0.5rem;
`;

export const TippyHeader = styled.h2`
  margin: 0.3rem 0rem;
`;

export const TippyPair = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0rem;

  * {
    &:first-child {
      margin-right: 0.25rem;
    }
  }
`;

export const TippyHyperlink = styled.a`
  color: #add8e6;
`;

export const TippyButton = styled.a`
   display: inline-block;
   padding: 0.35em 1.2em;
   border: 0.1em solid #ffffff;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
  background-color: transparent;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   text-align: center;
   transition: all 0.2s;
  &:hover {
     color: #000000;
     background-color: #ffffff;
  }
`;
