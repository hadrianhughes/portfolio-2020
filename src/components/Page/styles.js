import styled from 'styled-components';
import { rem } from '../../styles/tools';

const topPadding = rem(300);

export const Section = styled.section`
  box-sizing: border-box;
  min-height: 100vh;

  ${props => props.topPadding ? `padding-top: ${topPadding};` : ''}

  ${props => props.fullWidth ? `
    grid-column-start: 1;
    grid-column-end: span 8;
  ` : `
    grid-column-start: 3;
    grid-column-end: span 6;
  ` }
`;
