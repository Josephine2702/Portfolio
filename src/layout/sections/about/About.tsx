import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import backgroundImage from "./../../../assets/images/BackgroundMain.svg"
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

type AboutStyledProps = {
    src?: string
}
export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <ImageAbout src={backgroundImage}>
                        <Icon iconId={"about"} width={"300"} height={"100"} viewBox={"0 0 700 500"}/>
                    </ImageAbout>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section<AboutStyledProps>`
  min-height: fit-content;
`

const ImageAbout = styled.div<AboutStyledProps>`
  height: 100px;
  position: relative;
  z-index: 0;

  &::after {
    content: url(${props => props.src});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }

`
