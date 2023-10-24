import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
        <SectionTitle>Skills</SectionTitle>
                <FlexWrapper gap={"65px"} wrap={"wrap"} justify={"center"} align={"center"}>
                    <Icon iconId={"vscode"}/>
                    <Icon iconId={"html"}/>
                    <Icon iconId={"css"}/>
                    <Icon iconId={"sass"}/>
                    <Icon iconId={"styledComp"}/>
                    <Icon iconId={"bootstrap"}/>
                    <Icon iconId={"js"}/>
                    <Icon iconId={"react"}/>
                    <Icon iconId={"redux"}/>
                    <Icon iconId={"typeScript"}/>
                    <Icon iconId={"git"}/>
                    <Icon iconId={"gitHub"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
    ${FlexWrapper}{
      
      @media ${theme.media.tablet}{
        gap: 40px;
        justify-content: center;
        align-items: center;
        
      }
    }
`