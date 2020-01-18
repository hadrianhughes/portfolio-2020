import React from 'react';
import PropTypes from 'prop-types';
import { H1, Span } from './styles';
import { truthy } from '../../utils';

const Heading = ({ text, lines }) => {
  const realLines = lines.filter(truthy);
  realLines.forEach(l => console.log(l.length));

  return (
    <H1>
      {
        realLines.length > 0 ?
          realLines.map((l, i) => <Span length={l.length} index={i}>{l}</Span>)
          :
          <Span length={text.length}>{text}</Span>
      }
    </H1>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string)
};

Heading.defaultProps = {
  text: '',
  lines: []
};

export default Heading;
