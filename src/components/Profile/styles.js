import styled from 'styled-components';
import { rem } from '../../styles/tools';

export const Wrapper = styled.div`
  margin-top: ${rem(30)};
`;

export const Photo = styled.img`
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  padding: ${rem(20)} 0;
  width: ${rem(200)};
`;

export const Paragraph = styled.p`
  margin: ${rem(20)} 0;
`;
