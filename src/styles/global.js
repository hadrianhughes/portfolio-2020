import { createGlobalStyle } from 'styled-components';
import { colors, pageMaxWidth } from './settings';
import { minWidth } from './tools';
import animations from './animations';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    font-family: 'Open Sans';
    font-size: 16px;
    margin: 0;
  }

  #root {
    margin: 0 auto;
    max-width: ${pageMaxWidth}px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${minWidth('medium')} {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  ${fonts}

  ${animations}
`;

export default GlobalStyles;
