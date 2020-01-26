import styled from 'styled-components';
import { minWidth, rem } from '../../styles/tools';
import Link from '../Link';

export const StyledHeader = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  ${minWidth('medium')} {
    position: static;
  }
`;

export const LogoLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  margin: ${rem(10)};
  padding: ${rem(10)};
  width: ${rem(75)};

  ${minWidth('medium')} {
    width: ${rem(100)};
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
`;
