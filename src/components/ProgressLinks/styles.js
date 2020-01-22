import styled from 'styled-components';
import { rem, minWidth } from '../../styles/tools';
import Link from '../Link';

const leftPosition = rem(100);
const topPadding = rem(100);
const width = rem(200);

export const Nav = styled.nav`
  display: none;
  grid-column-start: 1;
  grid-column-end: span 2;

  ${minWidth('medium')} {
    display: block;
  }
`;

export const List = styled.ul`
  font-family: PressStart2P;
  font-size: ${rem(12)};
  left: ${leftPosition};
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: ${topPadding};
  position: sticky;
  top: 0;
  width: ${width};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &::before {
    content: '>';
    margin-right: ${rem(30)};
  }
`;

export const Item = styled.li`
  margin: ${rem(20)} 0;
`;
