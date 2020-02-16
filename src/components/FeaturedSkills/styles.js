import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const largeIconPortionSize = rem(150);
const previewMaxHeight = rem(500);

export const List = styled.ul`
  list-style-type: none;
  margin: ${rem(50)} 0 0;
  padding: 0 ${rem(20)};

  ${minWidth('medium')} {
    padding: 0 ${rem(50)};
  }
`;

export const Item = styled.li`
  background-color: ${colors.blueLightGrey};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: ${rem(20)} 0;
`;

export const IconPortion = styled.div`
  grid-column-end: span 3;
  grid-column-start: 1;
  padding: ${rem(10)};
  position: relative;
`;

export const TextPortion = styled.div`
  grid-column-end: span 12;
  grid-column-start: 4;
`;

export const Icon = styled.img`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  ${minWidth('medium')} {
    width: ${largeIconPortionSize};
  }
`;

export const ItemHeading = styled.h3`
  font-size: ${rem(24)};
  margin: ${rem(30, 20)};
  position: relative;

  ${minWidth('medium')} {
    font-size: ${rem(32)};
    margin: ${rem(20)};
    margin-bottom: ${rem(10)};
  }
`;

export const ItemDescription = styled.p`
  margin: 0;
  max-height: ${props => props.open ? previewMaxHeight : 0};
  overflow: hidden;
  padding: 0 ${rem(20)};
  padding-bottom: ${props => props.open ? rem(20) : 0};
  transition: 0.5s max-height, 0.5s padding-bottom;

  ${minWidth('medium')} {
    margin: ${rem(20)};
    margin-bottom: ${rem(30)};
    max-height: none;
    padding: 0;
  }
`;

export const OpenButton = styled.button`
  background: none;
  border: none;
  font-size: ${rem(40)};
  padding: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  ${minWidth('medium')} {
    display: none;
  }
`;
