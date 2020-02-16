import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const itemHeight = rem(50);

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
  overflow: hidden;
  padding: 0;
  position: relative;

  ${props => props.collapsed ? `
    max-height: ${itemHeight};

    ${minWidth('medium')} {
      max-height: none;
    }

    ${ListItem} {
      display: none;
    }
  ` : ''}

  ${minWidth('medium')} {
    grid-column-end: 2;
  }
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  height: ${itemHeight};
  padding: ${rem(10)};
  position: relative;
  transition: 0.2s padding-left ease-out;

  ${props => props.active ? `
    background-color: ${colors.altBlueGrey};
    display: block !important;
    padding-left: ${rem(20)};

    ${ItemButton} {
      color: ${colors.flair};
    }
  ` : `
    ${minWidth('medium')} {
      display: block !important;
    }
  `}
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Bitter', sans-serif;
  font-size: ${rem(22)};
  position: absolute;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s color;
  width: 100%;
`;

export const CollapseButton = styled.button`
  font-size: ${rem(40)};
  position: absolute;
  right: 0;
  text-align: right;
  top: calc(${itemHeight} / 2);
  transform: translateY(calc(-50% - 2px));
  width: ${rem(100)};

  ${minWidth('medium')} {
    display: none;
  }
`;
