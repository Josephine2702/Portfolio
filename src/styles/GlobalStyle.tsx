import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body {
    margin: 0;
    font-family:'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',  'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.textColor}
  }
  
  a {
    text-decoration: none;
    color: unset;
    cursor: pointer;
  }
 
  li {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
  
  section {
    margin-top: 144px;
    
    @media ${theme.media.mobile}{
      margin-top: 80px;
    }
  }
  
  p {
    font-family: Nunito;
    font-weight: 400;
    color: ${theme.colors.textColor};
  }
  
  h2, h3{
    font-family: 'Playfair Display';
    font-weight: 700;
    color: ${theme.colors.headingColor}
  }
  
`
