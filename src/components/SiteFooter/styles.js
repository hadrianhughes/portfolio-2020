import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const StyledFooter = styled.footer`
  font-family: 'Bitter', sans-serif;
  padding: ${rem(30)};
  position: relative;
  text-align: center;

  &::before {
    background-color: ${colors.white};
    content: '';
    height: 3px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: ${rem(200)};
  }
`;
