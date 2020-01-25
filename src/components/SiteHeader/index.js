import React from 'react';
import { StyledHeader, LogoLink, LogoImg } from './styles';

const SiteHeader = () => (
  <StyledHeader>
    <LogoLink href="#home">
      <LogoImg src="/icons/logo.svg" alt="Home" />
    </LogoLink>
  </StyledHeader>
);

export default SiteHeader;
