import { createGlobalStyle } from 'styled-components';
import { colors, pageMaxWidth } from './settings';
import { minWidth, rem } from './tools';
import animations from './animations';

const GlobalStyles = createGlobalStyle`
  * {
    color: ${colors.white};
  }

  body {
    background-color: ${colors.blueGrey};
    font-family: 'Merriweather', serif;
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

    ${minWidth('large')} {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  p {
    margin: ${rem(50)} 0;
    padding: 0 ${rem(20)};

    ${minWidth('large')} {
      padding: 0 ${rem(100)};
    }
  }

  ${animations}
`;

export default GlobalStyles;
