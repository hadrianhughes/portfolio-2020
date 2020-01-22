import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';
import Link from '../Link';

const fontSize = rem(14);
const desktopFontSize = rem(16);

export const Wrapper = styled.div`
  margin-top: ${rem(50)};
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  font-family: PressStart2P;
  font-size: ${fontSize};
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: auto;

  ${minWidth('medium')} {
    font-size: ${desktopFontSize};
  }
`;

export const Item = styled.li`
  &:hover {
    &::before, a {
      color: ${colors.yellow};
    }

    &::before {
      animation: 1s wiggle ease-in-out infinite;
    }
  }

  &::before {
    content: '>';
    display: inline-block;
    width: 30px;
  }

  @keyframes wiggle {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;
`;
