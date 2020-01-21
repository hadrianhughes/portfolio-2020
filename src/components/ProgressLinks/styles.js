import styled from 'styled-components';
import { rem } from '../../styles/tools';
import Link from '../Link';

const leftPosition = rem(100);
const topPadding = rem(100);
const width = rem(200);

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
`;

export const Item = styled.li`
  margin: ${rem(20)} 0;
`;
