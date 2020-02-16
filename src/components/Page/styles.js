import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const topPadding = rem(130);
const topPaddingMobile = rem(80);
const megaTopPadding = rem(300);
const megaTopPaddingMobile = rem(150);
const separatorWidth = rem(200);

export const Section = styled.section`
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: span 2;
  min-height: 100vh;
  padding-top: ${props => props.topPadding ? megaTopPaddingMobile : topPaddingMobile};
  position: relative;

  &::before {
    background-color: ${colors.white};
    content: '';
    height: 3px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: ${separatorWidth};
    ${props => props.topPadding ? 'display: none;' : ''}
  }

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
