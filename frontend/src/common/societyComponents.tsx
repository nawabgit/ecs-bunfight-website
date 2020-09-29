import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { api } from "../store";
import useSelector from "./hooks/useSelector";

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
  width: 100%;

  align-self: end;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 3.5rem;

  & > a {
    margin-left: 2rem;

    font-size: 24pt;
    font-weight: 500;

    text-decoration: none;
    color: grey;
    border-bottom: none;

    &:first-child {
      margin-left: 0rem;
    }
  }

  .active {
    color: white;
    border-bottom: solid 5px white;
  }
`;

export const Presentation = styled.div`
  align-self: end;
  margin-right: 1rem;
  margin-left: 5rem;
  margin-top: 1rem;
`;

export const ChatboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  background-color: #474747;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1em;
  height: 540px;
  width: 800px;

  overflow-y: scroll;

  & > div {
    margin: 0.5rem 0rem;
  }
`;

export const ChatboxInput = styled.input`
  background-color: #d1d1d1;
  border-radius: 1em;

  padding: 0rem 0.75rem;
  font-size: 14pt;

  border: none;

  margin: 1.5rem 0rem;

  height: 50px;
  width: 80%;
`;

export const ChatboxButton = styled.button`
  background-color: #474747;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-size: 14pt;
  font-weight: 500;

  border: none;

  border-radius: 1em;
  margin: 1.5rem 0rem;
  width: 18%;
  margin-left: 2%;

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

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  background-color: #666666;

  padding: 1rem 1rem;
  border-radius: 1em;
`;

export const QuestionHeader = styled.h3`
  margin 0rem 0rem 0.75rem;
`;

export const QuestionText = styled.span`
  font-size: 11pt;
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
  color: white;
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

export function Chatbox({ user }: { user: number }) {
  const { pending, questions } = useSelector((state) => state.questions);
  const [inputState, setInputState] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <ChatboxWrapper>
        {!pending &&
          questions &&
          questions
            .filter((e) => e.user === user)
            .map(
              (e) =>
                e.answer && (
                  <QuestionWrapper>
                    <QuestionHeader>{e.title}</QuestionHeader>
                    <QuestionText>{e.answer.answer_text}</QuestionText>
                  </QuestionWrapper>
                )
            )}
      </ChatboxWrapper>
      {sent && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          Your question has been received and will be answered shortly.
        </div>
      )}
      <div style={{ display: "flex" }}>
        <ChatboxInput
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          placeholder="Type your question here..."
        ></ChatboxInput>
        <ChatboxButton
          onClick={() => {
            api.post("/core/questions/", {
              title: inputState,
              user: user,
            });
            setInputState("");
            setSent(true);
          }}
        >
          Submit
        </ChatboxButton>
      </div>
    </>
  );
}
