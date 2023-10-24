import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export const NavMobile = () => {
    return (
        <StyledNavMobile>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <NavMobilePopup isOpen={false}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </NavMobilePopup>
        </StyledNavMobile>
    );
};

const StyledNavMobile = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }

`

const NavMobilePopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${theme.colors.secondaryColor};
  display: none;
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
  display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -80px;
  right: -80px;
  z-index: 9999;

  span {
    display: block;
    width: 50px;
    height: 4px;
    border-radius: 10px;
    background-color: ${theme.colors.primaryColor};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}  

    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      border-radius: 10px;
      background-color: ${theme.colors.primaryColor};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(-45deg) translateY(0);
    `}
    }

    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      border-radius: 10px;
      background-color: ${theme.colors.primaryColor};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 50px;
    `}
    }
  }

`

