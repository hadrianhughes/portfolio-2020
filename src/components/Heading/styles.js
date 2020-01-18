import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: PressStart2P;
`;

export const Span = styled.span`
  animation: 1.5s typewriter${props => props.index} steps(${props => props.length});
  animation-delay: ${props => 1.5 * props.index}s;
  animation-fill-mode: forwards;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  width: 0;

  @keyframes typewriter${props => props.index} {
    0% { width: 0px; }
    100% { width: ${props => props.length * 32}px; }
  }
`;
