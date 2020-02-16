import styled from 'styled-components';
import { minWidth, rem } from '../../styles/tools';
import Link from '../Link';

const leftOffset = 10;
const leftOffsetLarge = 100;
const topOffset = 10;
const topOffsetLarge = 50;

export const StyledHeader = styled.header`
  width: 100%;
`;

export const LogoLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  left: ${rem(leftOffset)};
  padding: ${rem(10)};
  position: fixed;
  top: ${rem(topOffset)};
  width: ${rem(75)};
  z-index: 100;

  ${minWidth('large')} {
    left: ${rem(leftOffsetLarge)};
    top: ${rem(topOffsetLarge)};
    width: ${rem(100)};
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
`;
