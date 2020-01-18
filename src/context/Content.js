import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ContentContext = React.createContext({});

export const ContentProvider = ({ children }) => {
  let [pages, setPages] = useState({});

  const addContent = (path, content) => {
    if (!pages[path]) {
      if (content) {
        setPages({ ...pages, [path]: content });
      } else {
        fetch(`/api${path === '/' ? '/index' : path}.json`)
          .then(response => response.json())
          .then(result => setPages({ ...pages, [path]: result }));
      }
    }
  };

  return (
    <ContentContext.Provider
      value={{
        pages,
        addContent
      }}>
      {children}
    </ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired
};
