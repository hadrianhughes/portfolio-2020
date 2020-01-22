import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import ProgressLinks from '../../components/ProgressLinks';

const Skills = ({ context }) => {
  const ref = useRef();
  const { setSectionRef } = useContext(ScrollContext);

  useEffect(() => {
    setSectionRef('skills', ref.current);
  }, []);

  return (
    <Page theRef={ref}>
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
