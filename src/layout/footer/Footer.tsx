import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import footerImg from "../../assets/images/Vector.svg"

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap={"24px"} justify={"center"} align={"center"}>
                <a href=""> <Icon iconId={"instagram"} width={"42"} height={"42"} viewBox={"0 0 45 45"}/></a>
                <a href=""><Icon iconId={"linkedin"} width={"37"} height={"37"} viewBox={"0 0 38 38"}/></a>
                    <a href=""><Icon iconId={"email"} width={"42"} height={"32"} viewBox={"0 0 42 32"}/></a>
            </FlexWrapper>
            <FooterImage>
                <img src={footerImg} alt=""/>
            </FooterImage>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
display: flex;
  flex-direction: column;
  margin-top: 56px;
`

const FooterImage = styled.div`
width: 100vw;
  
  img {width: 100%}
  
`