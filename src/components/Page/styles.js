import styled from 'styled-components';
import { rem, minWidth } from '../../styles/tools';

const topPadding = rem(75);
const topPaddingMobile = rem(100);
const megaTopPadding = rem(300);
const megaTopPaddingMobile = rem(150);

export const Section = styled.section`
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: span 2;
  min-height: 100vh;
  padding-top: ${props => props.topPadding ? megaTopPaddingMobile : topPaddingMobile};

  ${minWidth('medium')} {
    padding-top: ${props => props.topPadding ? megaTopPadding : topPadding};

    ${props => props.fullWidth ? `
      grid-column-end: span 8;
    ` : `
      grid-column-start: 3;
      grid-column-end: span 6;
    `}
  }
`;
