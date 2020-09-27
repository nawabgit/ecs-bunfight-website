import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import BuiltTitling from "./fonts/built-titling-sb.ttf";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @font-face {
    font-family: "Built Titling Bold";
    src: url(${BuiltTitling}) format("truetype");
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #F7F8FB;
    font-size: 14pt;
    color: white;
    font-family: Roboto, sans-serif;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: gray gray;
  }
  
  *::-webkit-scrollbar {
    width: 4px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
