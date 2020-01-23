import styled from 'styled-components';
import { minWidth } from '../../styles/tools';

export const StyledHeader = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  ${minWidth('medium')} {
    position: static;
  }
`;
