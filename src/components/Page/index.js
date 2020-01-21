import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressLinks from '../ProgressLinks';
import { Section } from './styles';

const Page = ({
  children,
  id,
  theRef,
  topPadding
}) => (
  <Section
    id={id}
    ref={theRef}
    topPadding={topPadding}>{children}</Section>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  theRef: PropTypes.object,
  topPadding: PropTypes.bool
};

Page.defaultProps = {
  id: '',
  theRef: null,
  topPadding: false
};

export default Page;
