import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';

const Skills = () => {
  const ref = useRef();
  const { setSectionRef } = useContext(ScrollContext);

  useEffect(() => {
    setSectionRef('skills', ref.current);
  }, []);

  return (
    <Page id="skills" theRef={ref}>
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
