import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './styles';

const Page = ({ children, topPadding }) => (
  <Main topPadding={topPadding}>{children}</Main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  topPadding: PropTypes.bool
};

Page.defaultProps = {
  topPadding: false
};

export default Page;
