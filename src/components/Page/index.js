import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './styles';

const Page = ({ children, topMargin }) => (
  <Main topMargin={topMargin}>{children}</Main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  topMargin: PropTypes.bool
};

Page.defaultProps = {
  topMargin: false
};

export default Page;
