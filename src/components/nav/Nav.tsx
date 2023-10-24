import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul{
    display: flex;
    gap: 48px;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
  
`