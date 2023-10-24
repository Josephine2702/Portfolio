import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Project} from "./project/Project";
import pic1 from "../../../assets/images/pic1.webp";
import pic2 from "../../../assets/images/pic-2.webp";
import pic3 from "../../../assets/images/pic-3.webp";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";


const myProjectsList = [
    {
        title: "Yoga Club",
        description: "I created this personal project in order to show how to create an interface in Figma using a" +
            " portfolio as an example.",
        src: pic1
    },
    {
        title: "CofeeShop",
        description: "I created this personal project in order to show how to create an interface in Figma using a" +
            " portfolio as an example.",
        src: pic2
    },
    {
        title: "Business club",
        description: "I created this personal project in order to show how to create an interface in Figma using a" +
            " portfolio as an example.",
        src: pic3
    },
]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Project projectArray={myProjectsList}/>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media ${theme.media.tablet} {
    padding: 0 30px;

    ${FlexWrapper} {
      gap: 40px;
    }
  }
`
