import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page';

const Skills = ({ context }) => (
  <Page id="skills">Skills</Page>
);

Skills.propTypes = {
  context: PropTypes.object
};

Skills.defaultProps = {
  context: {}
};

export default Skills;
