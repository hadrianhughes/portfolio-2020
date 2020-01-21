import styled from 'styled-components';
import { rem } from '../../styles/tools';

const topPadding = rem(300);

export const Section = styled.section`
  box-sizing: border-box;
  min-height: 100vh;

  ${props => props.topPadding ? `padding-top: ${topPadding};` : ''}
`;
