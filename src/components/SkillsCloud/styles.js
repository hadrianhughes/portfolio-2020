import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { rem, minWidth } from '../../styles/tools';

const topMargin = rem(48);
const previewMaxHeight = rem(200);

export const Wrapper = styled.div`
  margin: 0 auto ${rem(50)};
  position: relative;

  ${minWidth('medium')} {
    padding: 0 ${rem(50)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  margin-top: ${topMargin};
  max-height: ${rem(1000)};
  overflow: hidden;
  padding: 0;
  padding-bottom: ${rem(20)};
  position: relative;
  transition: 0.5s max-height;

  ${minWidth('medium')} {
    padding: 0;
  }

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
  cursor: default;
  font-family: 'Bitter', sans-serif;
  font-weight: 800;
  margin: 0;
  padding: 0 ${rem(20)};
  text-align: center;
  width: 100%;

  ${minWidth('medium')} {
    margin: ${rem(20)} 0;
    padding: 0;
    width: auto;
  }
`;

export const PrimaryItem = styled.li`
  ${ItemStyles}

  font-size: ${rem(32)};

  ${minWidth('medium')} {
    width: 33%;
  }
`;

export const SecondaryItem = styled.li`
  ${ItemStyles}

  font-size: ${rem(24)};

  ${minWidth('medium')} {
    width: 25%;
  }
`;

export const ExpandButton = styled.button`
  border: 0;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  height: ${rem(30)};
  left: 50%;
  position: absolute;
  text-indent: -9999px;
  transform: translate(-50%, 50%);
  width: ${rem(30)};

  ${props => `background-image: url(/icons/${props.collapsed ? 'expand' : 'collapse'}.svg);`}

  ${minWidth('medium')} {
    display: none;
  }
`;
