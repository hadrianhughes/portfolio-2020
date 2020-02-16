import React from 'react';
import PropTypes from 'prop-types';

import {
  Display,
  DisplayHeader,
  DisplayHeading,
  HeadingIcon,
  DisplayDetails,
  Screenshot
} from './styles';

const GalleryDisplay = ({
  title,
  details,
  link,
  extraIcon,
  extraIconAlt,
  image
}) => (
  <Display>
    <DisplayHeader>
      <DisplayHeading>{title}</DisplayHeading>
      {
        extraIcon ?
          <HeadingIcon src={extraIcon} alt={extraIconAlt} />
          :
          null
      }
    </DisplayHeader>
    <DisplayDetails>{details}</DisplayDetails>
    {
      image ?
        (() => {
          const ScreenshotWithProps = <Screenshot src={image} alt={`Screenshot of ${title}`} />;

          if (link) {
            return (
              <a href={link} rel="noopener noreferrer" target="_blank">{ScreenshotWithProps}</a>
            );
          }

          return ScreenshotWithProps;
        })()
        :
        null
    }
  </Display>
);

GalleryDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  link: PropTypes.string,
  extraIcon: PropTypes.string,
  extraIconAlt: PropTypes.string,
  image: PropTypes.string
};

GalleryDisplay.defaultProps = {
  link: '',
  extraIcon: '',
  extraIconAlt: '',
  image: ''
};

export default GalleryDisplay;
