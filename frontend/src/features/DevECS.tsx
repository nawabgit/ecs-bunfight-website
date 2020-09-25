import React from "react";
import styled, { keyframes } from "styled-components";

const IFrame = styled.iframe`
  border-radius: 1%;
  max-height: 75vh;
  max-width: 46.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  margin-right: 100px;
`;

const fadeIn = keyframes`
0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}`;

const CenteredPanel = styled.div`
  display: flex;
  padding: 2vh 2vw;
  justify-content: space-between;
  align-items: center;

  background-color: #292929;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2%;

  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

function DevECS() {
  return (
    <CenteredPanel>
      <IFrame
        src="https://docs.google.com/presentation/d/e/2PACX-1vQTThN1xN66KghPWPSCVZzVmJ8sQmafWiUXzbcEDIwteQRy1E9mh-CpnH6dsM9IZA/embed?start=false&loop=false&delayms=5000"
        frameBorder="0"
        width="961"
        height="750"
        allowFullScreen={true}
      ></IFrame>
      <div>yo yo yo</div>
    </CenteredPanel>
  );
}

export default DevECS;
