import styled from "styled-components";
import backimage from "../assets/images/BackgroundMain.svg"
import {theme} from "../styles/Theme";

export const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  //outline: 1px solid black;
`

export const Wrapper = styled.div`
  width: 60rem;
  height: 50rem;
  position: absolute;
  top: -4%;
  right: -5%;
  background: url(${backimage}) no-repeat right top;
  background-size: contain;
  z-index: -1;

  @media ${theme.media.desktop}{
    width: 100%;
    height: 70rem;
    top: -8%;
    right: 0;
  }
`

export const BackWrapper = styled.div`
  width: 99vw;
  height: 100%;
  position: relative;
  overflow: hidden;
`