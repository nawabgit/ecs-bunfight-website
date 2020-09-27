import styled, { keyframes } from "styled-components";

export const IFrame = styled.iframe`
  border-radius: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  margin-right: 100px;
  margin-left: 40px;
`;

export const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

export const CenteredPanel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em 2em;

  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1em;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  flex: 70%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 0 0 10%;
  width: 90%;

  align-self: end;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 3.5rem;

  & > a {
    font-size: 24pt;
    font-weight: 500;

    color: white;
    text-decoration: none;
    border-bottom: solid 5px white;

    &:last-child {
      color: grey;
      text-decoration: none;
      border-bottom: none;

      margin-left: 2rem;
    }
  }
`;

export const Presentation = styled.div`
  align-self: end;
  margin-right: 1rem;
  margin-left: 5rem;
  margin-top: 1rem;
`;

export const Sidebar = styled.div`
  flex: 1;
  margin-top: 5rem;
  margin-bottom: 1rem;

  & > div {
    margin: 1.5rem 0rem;

    &:first-child {
      margin-top: 0px;
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 35px;

  background-color: #363636;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  cursor: pointer;
  &:hover {
    -webkit-filter: brightness(90%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;
