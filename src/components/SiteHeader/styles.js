import styled from 'styled-components';
import { minWidth, rem } from '../../styles/tools';
import Link from '../Link';

const leftOffset = 120;

export const StyledHeader = styled.header`
  left: 0;
  padding-top: ${rem(50)};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const LogoLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  margin-left: ${rem(leftOffset)};
  padding: ${rem(10)};
  width: ${rem(75)};

  ${minWidth('large')} {
    width: ${rem(100)};
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
`;
