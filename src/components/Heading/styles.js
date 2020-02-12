import styled, { css } from 'styled-components';
import { rem, minWidth } from '../../styles/tools';

const fontSize = 16;
const desktopFontSize = 24;
const desktopMainFontSize = 32;

const HStyles = css`
  font-family: PressStart2P;
  font-size: ${rem(fontSize)};

  ${minWidth('large')} {
    font-size: ${props => rem(props.main ? desktopMainFontSize : desktopFontSize)};
  }
`;

export const H1 = styled.h1`${HStyles}`;
export const H2 = styled.h2`${HStyles}`;

export const Span = styled.span`
  display: block;
  margin: 10px auto;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;

  @keyframes typewriter${props => props.index} {
    0% { width: 0px; }
    100% { width: ${props => props.length * fontSize}px; }
  }

  @keyframes desktop_typewriter${props => props.index} {
    0% { width: 0px; }
    100% { width: ${props => props.length * (props.main ? desktopMainFontSize : desktopFontSize)}px; }
  }
`;
