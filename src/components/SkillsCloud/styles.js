import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const previewMaxHeight = rem(300);

export const Wrapper = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  margin-top: ${rem(50)};
  overflow: hidden;
  padding: 0;
  position: relative;

  ${props => props.preview ? `
    max-height: ${previewMaxHeight};

    &::after {
      background: linear-gradient(rgba(0, 0, 0, 0), ${colors.blueGrey});
      bottom: 0;
      content: '';
      height: ${rem(70)};
      left: 0;
      position: absolute;
      width: 100%;
    }

    ${minWidth('medium')} {
      max-height: none;

      &::after {
        display: none;
      }
    }
  ` : ''}
`;

const ItemStyles = css`
  font-family: 'Open Sans';
  font-weight: 800;
  margin: 0;
  padding: 0 ${rem(20)};
  text-align: left;
  width: 100%;

  ${minWidth('medium')} {
    margin: ${rem(10)} 0;
    padding: 0;
    text-align: center;
    width: auto;
  }
`;

export const PrimaryItem = styled.li`
  ${ItemStyles}

  font-size: ${rem(48)};

  ${minWidth('medium')} {
    width: 30%;
  }
`;

export const SecondaryItem = styled.li`
  ${ItemStyles}

  font-size: ${rem(32)};

  ${minWidth('medium')} {
    width: 25%;
  }
`;

export const TertiaryItem = styled.li`
  ${ItemStyles}

  font-size: ${rem(24)};

  ${minWidth('medium')} {
    width: 20%;
  }
`;

export const ExpandButton = styled.button`
  background-color: ${colors.white};
  border: 0;
  border-radius: 50%;
  bottom: 0;
  color: ${colors.black};
  cursor: pointer;
  height: ${rem(30)};
  left: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  width: ${rem(30)};
`;
