import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './styles';

const Page = ({ children }) => (
  <Main>{children}</Main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
