import styled, { css } from 'styled-components';
import { colors, homeComponentsWidth } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const fontSize = 32;
const mainFontSize = 48;
const mainFontSizeMobile = 40;

const HStyles = css`
  font-family: 'Bitter', sans-serif;
  font-size: ${props => rem(props.main ? mainFontSizeMobile : fontSize)};
  padding: 0 ${rem(20)};

  ${props => props.main ? `
    width: 70%;
  ` : `
    text-decoration: underline;
    text-underline-position: under;
  `}

  ${minWidth('medium')} {
    font-size: ${props => rem(props.main ? mainFontSize : fontSize)};
    margin: 0 auto;
    padding: 0;
    ${props => props.main ? `width: ${rem(homeComponentsWidth)};` : ''}
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
