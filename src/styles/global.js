import { createGlobalStyle } from 'styled-components';
import { colors } from './settings';
import { minWidth } from './tools';
import animations from './animations';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    font-size: 16px;
    margin: 0;
  }

  #root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${minWidth('medium')} {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  @font-face {
    font-family: PressStart2P;
    src: url('/fonts/PressStart2P-Regular.ttf');
  }

  ${animations}
`;

export default GlobalStyles;
