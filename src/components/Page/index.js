import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressLinks from '../ProgressLinks';
import { Section } from './styles';

const Page = ({
  children,
  id,
  theRef,
  topPadding,
  fullWidth
}) => (
  <Section
    id={id}
    ref={theRef}
    topPadding={topPadding}
    fullWidth={fullWidth}>{children}</Section>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  theRef: PropTypes.object,
  topPadding: PropTypes.bool,
  fullWidth: PropTypes.bool
};

Page.defaultProps = {
  id: '',
  theRef: null,
  topPadding: false,
  fullWidth: false
};

export default Page;
