import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const largeIconPortionSize = rem(150);

export const List = styled.ul`
  list-style-type: none;
  margin: ${rem(50)} 0 0;
  padding: 0 ${rem(20)};

  ${minWidth('large')} {
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
  width: 100%;

  ${minWidth('medium')} {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${largeIconPortionSize};
  }
`;

export const ItemHeading = styled.h3`
  font-size: ${rem(24)};
  margin: ${rem(10, 20)};

  ${minWidth('large')} {
    font-size: ${rem(32)};
    margin: ${rem(20)};
    margin-bottom: ${rem(10)};
  }
`;

export const ItemDescription = styled.p`
  margin: ${rem(20)};
  padding: 0;

  ${minWidth('large')} {
    margin-bottom: ${rem(30)};
  }
`;
