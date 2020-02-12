import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';

const About = ({ context }) => {
  const ref = useRef();
  const { setSectionRef } = useContext(ScrollContext);

  useEffect(() => {
    setSectionRef('about', ref.current);
  }, []);

  return (
    <Page id="about" theRef={ref}>
      <Heading text={context.heading} />
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
