import styled from 'styled-components';
import { rem, minWidth } from '../../styles/tools';

const topPadding = rem(50);
const topPaddingMobile = rem(100);
const megaTopPadding = rem(300);

export const Section = styled.section`
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: span 2;
  min-height: 100vh;

  ${props => props.topPadding ? `padding-top: ${megaTopPadding};` : `
    padding-top: ${topPaddingMobile};

    ${minWidth('large')} {
      padding-top: ${topPadding};
    }
  `}

  ${minWidth('large')} {
    ${props => props.fullWidth ? `
      grid-column-end: span 8;
    ` : `
      grid-column-start: 3;
      grid-column-end: span 6;
    `}
  }
`;
