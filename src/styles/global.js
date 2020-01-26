import { createGlobalStyle } from 'styled-components';
import { colors, pageMaxWidth } from './settings';
import { minWidth, rem } from './tools';
import animations from './animations';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    font-family: 'Open Sans';
    font-size: 18px;
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

  p {
    margin: ${rem(50)} 0;
    padding: 0 ${rem(100)};
  }

  ${fonts}

  ${animations}
`;

export default GlobalStyles;
