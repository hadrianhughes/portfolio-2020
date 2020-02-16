import React from 'react';
import PropTypes from 'prop-types';

import {
  Display,
  DisplayHeader,
  DisplayHeading,
  HeadingIcon,
  DisplayLink,
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
      <DisplayHeading>
        <span>{title}</span>
        {
          extraIcon ?
            <HeadingIcon src={extraIcon} alt={extraIconAlt} />
            :
            null
        }
      </DisplayHeading>
      {
        link ?
          <DisplayLink
            href={link}
            target="_blank">
            Visit Site
          </DisplayLink>
          :
          null
      }
    </DisplayHeader>
    <DisplayDetails>{details}</DisplayDetails>
    {
      image ?
        <Screenshot src={image} alt={`Screenshot of ${title}`} />
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
