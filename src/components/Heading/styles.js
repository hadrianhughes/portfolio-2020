import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const fontSize = 32;
const mainFontSize = 48;
const mainWidth = 500;

const HStyles = css`
  font-family: 'Bitter', sans-serif;
  font-size: ${props => rem(props.main ? mainFontSize : fontSize)};
  margin: 0 auto;
  padding: 0 ${rem(20)};

  ${minWidth('large')} {
    ${props => props.main ? `width: ${rem(mainWidth)}` : ''};
    padding: 0;
  }
`;

export const H1 = styled.h1`${HStyles}`;
export const H2 = styled.h2`${HStyles}`;

export const Span = styled.span`
  display: block;
  text-align: ${props => props.main ? 'left' : 'center'};

  &:nth-child(even) {
    color: ${colors.flair};
  }
`;
