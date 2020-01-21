import styled from 'styled-components';
import { rem } from '../../styles/tools';

const topMargin = rem(300);

export const Main = styled.main`
  ${props => props.topMargin ? `margin-top: ${topMargin};` : ''}
`;
