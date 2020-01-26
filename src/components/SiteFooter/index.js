import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './styles';

const SiteFooter = ({ copyright }) => {
  const currentYear = (new Date()).getFullYear();

  return (
    <StyledFooter>
      {copyright.replace('{{currentYear}}', currentYear)}
    </StyledFooter>
  );
};

SiteFooter.propTypes = {
  copyright: PropTypes.string
};

SiteFooter.defaultProps = {
  copyright: ''
};

export default SiteFooter;
