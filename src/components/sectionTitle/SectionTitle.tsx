import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {fontStyle} from "../../styles/Common";



export const SectionTitle = styled.h2`
  ${fontStyle({Fmax: 48, Fmin: 32})}
  text-align: center;
  position: relative;
  margin-bottom: 80px;
  color: ${theme.colors.headingColor};

  @media ${theme.media.mobile}{
    margin-bottom: 50px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    border: solid 4px ${theme.colors.primaryColor};
    border-radius: 2px;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    
    @media ${theme.media.mobile}{
      width: 70px;
      bottom: -10px;
      border: solid 3px ${theme.colors.primaryColor};
    }
  }
`

