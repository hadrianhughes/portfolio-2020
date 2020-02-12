import React, { useContext, useRef, useEffect } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import Page from './index';

const PageHOC = name => Tag => {
  return function component ({ ...props }) {
    const ref = useRef();
    const { setSectionRef } = useContext(ScrollContext);

    useEffect(() => {
      setSectionRef(name, ref.current);
    }, []);

    const isHome = name === 'home';

    return (
      <Page
        id={name}
        theRef={ref}
        topPadding={isHome}
        fullWidth={isHome}>
        <Tag {...props} />
      </Page>
    );
  };
};

export default PageHOC;
