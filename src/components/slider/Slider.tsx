import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import arrow from "../../assets/images/arrow.svg";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <img className={"left"} src={arrow}/>
                    <img className={"right"} src={arrow}/>
                    <Text>I created this personal project in order to show how to create an interface in Figma using a
                        portfolio as an example.I created this personal project in order to show how to create an
                        interface in Figma using a portfolio as an example.I created this personal project in order to
                        show how to create an interface in Figma using a portfolio as an example.
                    </Text>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  text-align: center;
`

const Slide = styled.div`
  max-width: 600px;
  padding: 20px;
  outline: 1px solid rgba(32, 178, 170, 0.56);
  position: relative;

  img {
    content: url(${arrow});
    position: absolute;
    display: block;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  .left {
    top: 50%;
    left: -5%;
    transform: translateY(-50%);
  }

  .right {
    top: 50%;
    right: -5%;
    transform: translateY(-50%) rotate(180deg);
  }
`

const Text = styled.p`

`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;

    background-color: ${theme.colors.textColor};

    &.active {
      background-color: ${theme.colors.primaryColor};
      width: 20px;
    }

  }
`