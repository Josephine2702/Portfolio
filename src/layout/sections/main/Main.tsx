import React from 'react';
import main from '../../../assets/images/programmer.svg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonContainer, LinkButton} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {fontStyle} from "../../../styles/Common";


type StyledImageProps = {
    src?: string,
}

export const Main = (props: StyledImageProps) => {
    return (
        <Container>
            <FlexWrapper align={"space-between"} gap={"114px"}>
                <Content>
                    <h1>Frontend developer</h1>
                    <h2>Hello, my name is Irina Bochkovskaja</h2>
                    <p>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.</p>
                    <ButtonContainer>
                        <LinkButton btnType={"primary"} href="#">Projects</LinkButton>
                        <LinkButton btnType={"outlined"} href="#">Linkedin</LinkButton>
                    </ButtonContainer>
                </Content>
                <PersonalImg src={main} alt=""/>
            </FlexWrapper>
        </Container>
    );
};


const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 505px;
  padding-top: 55px;

  @media ${theme.media.tablet} {
    padding-top: 130px;
    margin-left: 10px;
  }

  & > *:not(:first-child) {
    margin-bottom: 32px;
  }

  h1 {
    ${fontStyle({family: "'Nunito', 'sans-serif'", weight: 700, Fmax: 32, Fmin: 24})};
    color: ${theme.colors.primaryColor};
  }

  h2 {
    ${fontStyle({family: "'Roboto', 'sans-serif'", weight: 700, Fmax: 64, Fmin: 48})};
    color: ${theme.colors.headingColor};
  }

  p {
    font-size: 24px;
    line-height: 36px;
  }
`

const PersonalImg = styled.img`
  width: 20rem;
  position: absolute;
  top: 2%;
  left: 60%;

  @media ${theme.media.tablet} {
    width: 10rem;
    top: 10px;
    left: 10px;
  }

  @media ${theme.media.tablet} {
    width: 8rem;
  }
`