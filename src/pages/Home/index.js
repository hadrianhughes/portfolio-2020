import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';
import NavLinks from '../../components/NavLinks';

const Home = ({ context, navLinks }) => {
  const ref = useRef();
  const { activeSection, setSectionRef } = useContext(ScrollContext);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setSectionRef('home', ref.current);
  }, []);

  useEffect(() => {
    if (activeSection === 'home' && !entered) {
      setEntered(true);
    }
  }, [activeSection]);

  return (
    <Page
      theRef={ref}
      id="home"
      topPadding fullWidth>
      <Heading
        lines={[context.headingLineOne, context.headingLineTwo]}
        animate={entered}
        main />
      <NavLinks links={navLinks} />
    </Page>
  );
};

Home.propTypes = {
  context: PropTypes.object,
  navLinks: PropTypes.arrayOf(PropTypes.object)
};

Home.defaultProps = {
  context: {},
  navLinks: []
};

export default Home;
