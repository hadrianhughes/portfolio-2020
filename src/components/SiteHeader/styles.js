import styled from 'styled-components';
import { minWidth, rem } from '../../styles/tools';
import Link from '../Link';

const leftOffset = 10;
const leftOffsetLarge = 100;
const paddingTop = 10;
const paddingTopLarge = 50;

export const StyledHeader = styled.header`
  left: 0;
  padding-top: ${rem(paddingTop)};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  ${minWidth('large')} {
    padding-top: ${rem(paddingTopLarge)};
  }
`;

export const LogoLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  margin-left: ${rem(leftOffset)};
  padding: ${rem(10)};
  width: ${rem(75)};

  ${minWidth('large')} {
    margin-left: ${rem(leftOffsetLarge)};
    width: ${rem(100)};
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
`;
