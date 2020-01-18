import styled from 'styled-components';
import { rem } from '../../styles/tools';
import { Link } from 'react-router-dom';

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
      color: yellow;
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
`;
