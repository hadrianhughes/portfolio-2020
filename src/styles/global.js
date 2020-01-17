import { colors } from './settings';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    margin: 0;
  }
`;

export default GlobalStyles;
