import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';
import Link from '../Link';

const leftPosition = rem(75);
const topPadding = rem(240);
const width = rem(200);

export const Nav = styled.nav`
  display: none;
  grid-column-start: 1;
  grid-column-end: span 2;
  left: ${leftPosition};
  position: sticky;
  top: 0;

  ${minWidth('large')} {
    display: block;
  }
`;

export const List = styled.ul`
  font-family: 'Bitter', sans-serif;
  font-size: ${rem(22)};
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: ${topPadding};
  position: sticky;
  width: ${width};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  ${props => props.active ? `color: ${colors.flair};` : ''}

  &:hover {
    color: ${colors.flair};

    &::before {
      animation: 1s wiggle ease-in-out infinite;
    }
  }

  &::before {
    content: '>';
    display: inline-block;
    margin-right: ${rem(30)};

    ${props => props.active ? `color: ${colors.flair};` : '' }
  }
`;

export const Item = styled.li`
  margin: ${rem(15)} 0;
`;
