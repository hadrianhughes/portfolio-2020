import styled, { css } from 'styled-components';
import { rem, minWidth } from '../../styles/tools';

const fontSize = 16;
const desktopFontSize = 24;
const desktopMainFontSize = 32;

const HStyles = css`
  font-family: PressStart2P;
  font-size: ${rem(fontSize)};

  ${minWidth('medium')} {
    font-size: ${props => rem(props.main ? desktopMainFontSize : desktopFontSize)};
  }
`;

export const H1 = styled.h1`${HStyles}`;
export const H2 = styled.h2`${HStyles}`;

export const Span = styled.span`
  animation: 1s typewriter${props => props.index} steps(${props => props.length});
  animation-delay: ${props => props.index}s;
  animation-fill-mode: forwards;
  display: block;
  margin: 10px auto;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  width: 0;

  ${minWidth('medium')} {
    animation-name: desktop_typewriter${props => props.index};
  }

  @keyframes typewriter${props => props.index} {
    0% { width: 0px; }
    100% { width: ${props => props.length * fontSize}px; }
  }

  @keyframes desktop_typewriter${props => props.index} {
    0% { width: 0px; }
    100% { width: ${props => props.length * (props.main ? desktopMainFontSize : desktopFontSize)}px; }
  }
`;
