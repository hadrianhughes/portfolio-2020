import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const iconPortionSize = rem(80);
const largeIconPortionSize = rem(200);

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 ${rem(20)};

  ${minWidth('large')} {
    padding: 0 ${rem(50)};
  }
`;

export const Item = styled.li`
  background-color: ${colors.blueLightGrey};
  display: flex;
  margin: ${rem(20)} 0;
`;

export const IconPortion = styled.div`
  height: ${iconPortionSize};
  position: relative;
  width: ${iconPortionSize};

  ${minWidth('large')} {
    height: ${largeIconPortionSize};
    width: ${largeIconPortionSize};
  }
`;

export const TextPortion = styled.div`
  flex: 1;
`;

export const Icon = styled.img`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(${iconPortionSize} - 20px);

  ${minWidth('large')} {
    width: calc(${largeIconPortionSize} - 50px);
  }
`;

export const ItemHeading = styled.h3`
  font-size: ${rem(24)};
  line-height: ${iconPortionSize};
  margin: 0 ${rem(10)};

  ${minWidth('large')} {
    font-size: ${rem(32)};
    margin: ${rem(20)};
  }
`;
