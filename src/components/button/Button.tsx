import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type StyledBtnPropsType = {
 btnType: "primary" | "outlined",
}

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.75rem;
 
`;

 export const LinkButton = styled.a<StyledBtnPropsType>`
  padding: 6px 22px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
 transition: all .2s;
  
  @media ${theme.media.tablet} {
   padding: 11px 27px;
  }
  

  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
      background-color: ${theme.colors.primaryColor};
   color: ${theme.colors.headingColor};
   border: 2px solid ${theme.colors.primaryColor};
  `}

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
      border: 2px solid ${theme.colors.headingColor};
   background-color: transparent;
   color: ${theme.colors.headingColor};
  `}

  &:hover
  {${props => props.btnType === "primary" && css<StyledBtnPropsType>`
      border: 2px solid ${theme.colors.headingColor};
   background-color: ${theme.colors.headingColor};
   color: ${theme.colors.primaryColor};
  `}}
  
  &:hover
  {${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
      border: 2px solid ${theme.colors.headingColor};
   background-color: ${theme.colors.headingColor};
   color: ${theme.colors.primaryColor};
  `}}
  
 `;

