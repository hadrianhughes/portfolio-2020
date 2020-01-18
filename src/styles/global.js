import { colors } from './settings';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    font-size: 16px;
    margin: 0;
  }

  @font-face {
    font-family: PressStart2P;
    src: url('/fonts/PressStart2P-Regular.ttf');
  }
`;

export default GlobalStyles;
