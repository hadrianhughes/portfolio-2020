import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

export const Wrapper = styled.div`
  background-color: ${colors.blueLightGrey};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: ${rem(50, 20)} 0;
  padding: ${rem(20)};
`;

export const List = styled.ul`
  grid-column-end: span 3;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${minWidth('medium')} {
    grid-column-end: 2;
  }
`;

export const ListItem = styled.li`
  padding: ${rem(10)};
  transition: 0.2s padding-left ease-out;

  ${props => props.active ? `
    background-color: ${colors.altBlueGrey};
    padding-left: ${rem(20)};

    ${ItemButton} {
      color: ${colors.flair};
    }
  ` : ''}
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Bitter', sans-serif;
  font-size: ${rem(22)};
  text-align: left;
  transition: 0.2s color;
  width: 100%;
`;
