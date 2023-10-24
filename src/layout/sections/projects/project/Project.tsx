import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {fontStyle} from "../../../../styles/Common";

interface ProjectItem {
    src: string;
    title: string;
    description: string;
}

export const Project = (props: { projectArray: Array<ProjectItem> }) => {

    return (
        <FlexWrapper direction={"column"} gap={"80px"}>
            {props.projectArray.map((item) => {
                return (
                    <StyledProject>
                        <ImageProject src={item.src}/>
                        <ContentProject>
                            <TitleProject>{item.title}</TitleProject>
                            <DescriptionProject>{item.description}</DescriptionProject>
                            <LinkProject>View Project</LinkProject>
                        </ContentProject>
                    </StyledProject>
                )
            })}
        </FlexWrapper>)
};

const StyledProject = styled.div`
  display: flex;
  max-width: 992px;
  width: 100%;
  min-height: 526px;
  background-color: ${theme.colors.secondaryColor};
  border-radius: 20px;
  overflow: hidden;

  @media ${theme.media.tablet} {
    flex-direction: column;
    min-height: 300px;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    @media ${theme.media.tablet} {
      flex-direction: column;
    }
  }
`

const ImageProject = styled.img`
  max-width: 496px;
  width: 100%;
  object-fit: cover;

  @media ${theme.media.tablet} {


  }

`

const ContentProject = styled.div`
  max-width: 496px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  gap: 24px;

  @media ${theme.media.tablet} {
    gap: 10px;
    padding: 20px 30px;
  }
`

const TitleProject = styled.h3`
  ${fontStyle({family: 'Playfair Display', Fmax: 40, Fmin: 24})}
`

const DescriptionProject = styled.p`
  font-size: 18px;
`

const LinkProject = styled.a`
  width: 150px;
  border: solid 2px black;
  border-radius: 24px;
  color: black;
  padding: 8px 24px;
  transition: .2s;


  @media ${theme.media.tablet} {
    align-self: flex-end;
  }

  &:hover {
    background-color: ${theme.colors.headingColor};
    color: ${theme.colors.primaryColor};
  }
`


