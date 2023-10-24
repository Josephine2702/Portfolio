import React from 'react';
import styled from "styled-components";
import {Nav} from "../../components/nav/Nav";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {NavMobile} from "../../components/navMobile/Nav";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"flex-end"} align={"baseline"}>
                <Nav/>
                    <NavMobile/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 12px 0;
  color: ${theme.colors.headingColor};
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  line-height: 28px;
  
  
  a:hover{
    border-bottom: 4px solid ${theme.colors.primaryColor};
  }
`
