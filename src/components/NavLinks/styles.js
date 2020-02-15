import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';
import Link from '../Link';

const fontSize = rem(14);
const desktopFontSize = rem(24);
const width = rem(500);

export const Wrapper = styled.div`
  margin: ${rem(32)} auto 0;
  padding: 0 ${rem(20)};

  ${minWidth('medium')} {
    padding: 0;
    width: ${width};
  }
`;

export const List = styled.ul`
  font-family: 'Bitter', sans-serif;
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
  padding: ${rem(5)} 0;

  &:hover {
    &::before, a {
      color: ${colors.flair};
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;
`;
