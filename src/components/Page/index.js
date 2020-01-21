import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './styles';

const Page = ({ children, id, theRef, topPadding }) => (
  <Main
    id={id}
    ref={theRef}
    topPadding={topPadding}>{children}</Main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  topPadding: PropTypes.bool
};

Page.defaultProps = {
  id: '',
  topPadding: false
};

export default Page;
