import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';

const Skills = ({ context }) => {
  const ref = useRef();
  const { activeSection, setSectionRef } = useContext(ScrollContext);

  useEffect(() => {
    setSectionRef('skills', ref.current);
  }, []);

  return (
    <Page id="skills" theRef={ref}>
      <Heading text={context.heading} animate={activeSection === 'skills'} />
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
