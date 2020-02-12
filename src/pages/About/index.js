import React, { useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';

const About = ({ context }) => {
  const ref = useRef();
  const { activeSection, setSectionRef } = useContext(ScrollContext);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setSectionRef('about', ref.current);
  }, []);

  useEffect(() => {
    if (activeSection === 'about' && !entered) {
      setEntered(true);
    }
  }, [activeSection]);

  return (
    <Page id="about" theRef={ref}>
      <Heading text={context.heading} animate={entered} />
      <p>{context.text}</p>
    </Page>
  );
};

About.propTypes = {
  context: PropTypes.object
};

About.defaultProps = {
  context: {}
};

export default About;
