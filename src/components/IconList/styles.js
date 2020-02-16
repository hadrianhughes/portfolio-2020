import styled from 'styled-components';
import { homeComponentsWidth } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

export const List = styled.ul`
  list-style-type: none;
  margin: ${rem(20)} auto 0;
  padding: 0 ${rem(20)};

  ${minWidth('medium')} {
    padding: 0;
    width: ${rem(homeComponentsWidth)}
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  margin-right: ${rem(15)};
  padding: 0;
  width: ${rem(30)};
`;

export const Icon = styled.img`
  width: 100%;
`;
