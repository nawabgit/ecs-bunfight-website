import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import WelcomeScreen from "./features/WelcomeScreen";
import Hackasoton from "./features/Hackasoton";
import DevECS from "./features/DevECS";
import FutureWorlds from "./features/FutureWorlds";
import SUWS from "./features/SUWS";
import Robosoc from "./features/Robosoc";
import SoapboxRacers from "./features/SoapboxRacers";
import SUCSS from "./features/SUCSS";
import SUSF from "./features/SUSF";
import SRO from "./features/SRO";
import ECSEmpower from "./features/ECSEmpower";
import USAIS from "./features/USAIS";
import useDispatch from "./common/hooks/useDispatch";
import { doGetQuestions } from "./state/state";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1145%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(208%2c 83%2c 77%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='0' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='720' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='720' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='1440' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1152' x='1440' y='720'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1145'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1149'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1147'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1146'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1150'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1148'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1151'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1152'%3e%3cuse xlink:href='%23SvgjsPath1146' x='30' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='30' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='30' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='30' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='30' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='30' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='30' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='30' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='30' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='30' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='30' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='30' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='90' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='90' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='90' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='90' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='90' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='90' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='90' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='150' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='150' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='150' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='150' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='150' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='150' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='210' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='210' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='210' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='210' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='210' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='210' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='210' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='270' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='270' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1151' x='270' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='270' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='270' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='270' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='270' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='270' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='270' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='270' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='270' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='270' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='330' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='330' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='330' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='330' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='330' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='330' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='330' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='330' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='330' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='330' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='330' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='330' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='390' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='390' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='390' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='390' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='390' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='390' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='390' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='450' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='450' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='450' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='450' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='450' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='450' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='450' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='450' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='450' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='450' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='450' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='450' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='510' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='510' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='510' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='510' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1151' x='510' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='510' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='510' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='510' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='510' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='510' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1151' x='510' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='510' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='570' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='570' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1149' x='570' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='570' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='570' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='570' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='570' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='570' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='570' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='570' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='570' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='570' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='630' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1151' x='630' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='630' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1150' x='630' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='630' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1148' x='690' y='30' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='690' y='90' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1151' x='690' y='150' stroke='rgba(114%2c 17%2c 12%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='210' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='270' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='330' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='390' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='450' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='690' y='510' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='570' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1147' x='690' y='630' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1146' x='690' y='690' stroke='rgba(114%2c 17%2c 12%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
`;

const WelcomeContainer = styled(AppContainer)`
  padding: 10vh 8vw;
`;

const SocietyContainer = styled(AppContainer)`
  justify-content: center;
  padding: 6vh 4vw;
`;

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(doGetQuestions());
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <WelcomeContainer>
          <WelcomeScreen />
        </WelcomeContainer>
      </Route>
      <Route path="/hackasoton">
        <SocietyContainer>
          <Hackasoton />
        </SocietyContainer>
      </Route>
      <Route path="/devecs">
        <SocietyContainer>
          <DevECS />
        </SocietyContainer>
      </Route>
      <Route path="/future-worlds">
        <SocietyContainer>
          <FutureWorlds />
        </SocietyContainer>
      </Route>
      <Route path="/wireless-society-suws">
        <SocietyContainer>
          <SUWS />
        </SocietyContainer>
      </Route>
      <Route path="/robosoc">
        <SocietyContainer>
          <Robosoc />
        </SocietyContainer>
      </Route>
      <Route path="/soapbox-racers">
        <SocietyContainer>
          <SoapboxRacers />
        </SocietyContainer>
      </Route>
      <Route path="/cyber-security-society-sucss">
        <SocietyContainer>
          <SUCSS />
        </SocietyContainer>
      </Route>
      <Route path="/spaceflight-society-susf">
        <SocietyContainer>
          <SUSF />
        </SocietyContainer>
      </Route>
      <Route path="/robotics-outreach-sro">
        <SocietyContainer>
          <SRO />
        </SocietyContainer>
      </Route>
      <Route path="/ecs-empower">
        <SocietyContainer>
          <ECSEmpower />
        </SocietyContainer>
      </Route>
      <Route path="/aisoc-usais">
        <SocietyContainer>
          <USAIS />
        </SocietyContainer>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
