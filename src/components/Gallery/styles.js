import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const Wrapper = styled.div`
  background-color: ${colors.blueLightGrey};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: ${rem(50, 20)} 0;
  padding: ${rem(20)};
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: ${rem(10)};
`;

export const ListItem = styled.li`
  padding: ${rem(10)} 0;
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
  transition: 0.2s color;
`;
