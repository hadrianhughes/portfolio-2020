import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import ProgressLinks from '../../components/ProgressLinks';

const Skills = ({ context }) => {
  const { refs } = useContext(ScrollContext);

  return (
    <Page theRef={refs.skills}>
    </Page>
  );
};

Skills.propTypes = {
  context: PropTypes.object
};

Skills.defaultProps = {
  context: {}
};

export default Skills;
