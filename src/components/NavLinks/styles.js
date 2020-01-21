import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';
import Link from '../Link';

const width = rem(300);

export const List = styled.ul`
  font-family: PressStart2P;
  list-style-type: none;
  margin: ${rem(50)} auto 0;
  padding-left: ${rem(75)};
  width: ${width};
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
