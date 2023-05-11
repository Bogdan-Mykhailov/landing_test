import {createGlobalStyle, css} from 'styled-components';
import LexendMedium from '../assets/fonts/lexend/LexendMedium.ttf'
import LexendRegular from '../assets/fonts/lexend/LexendRegular.ttf'
import LexendSemiBold from '../assets/fonts/lexend/LexendSemiBold.ttf'
import LexendBold from '../assets/fonts/lexend/LexendBold.ttf'
import LexendExtraBold from '../assets/fonts/lexend/LexendExtraBold.ttf'
import LexendBlack from '../assets/fonts/lexend/LexendBlack.ttf'
import LexendLight from '../assets/fonts/lexend/LexendLight.ttf'

const fontFaces = css`
  @font-face {
    font-family: 'Lexend500';
    src: url(${LexendMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend400';
    src: url(${LexendRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend600';
    src: url(${LexendSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend700';
    src: url(${LexendBold});
    font-style: normal;
  } 
  @font-face {
    font-family: 'Lexend800';
    src: url(${LexendExtraBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend900';
    src: url(${LexendBlack});
    font-style: normal;
  } 
  @font-face {
    font-family: 'Lexend300';
    src: url(${LexendLight});
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  html {
    font-family: LexendRegular, Roboto, Oxygen, sans-serif;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  ul, menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  :root {
    --headline: #1B1C57;
    --neutral: #626687;
    --white: #FFF;
    --green: #10B981;
    --greenDark: #047857;
    --grey: #888B97;
    --gold: #F59E0B;
  }
`;

export default GlobalStyle;
