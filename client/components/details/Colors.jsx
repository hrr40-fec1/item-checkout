import React from 'react';
import PropTypes from 'prop-types';
import ColorSquare from './ColorSquare';

const Colors = ({ colors, color }) => (
  // eslint-disable-next-line react/jsx-one-expression-per-line
  <div>
    <strong>Colors</strong>
    <span id="color">{color}</span>
    <div>
      {colors.map((colorObj) => <ColorSquare key={colorObj.color} color={colorObj.color} />)}
    </div>
  </div>
);

Colors.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array,
  color: PropTypes.string,
};

Colors.defaultProps = {
  colors: [{ color: 'Black' }, { color: 'Red' }],
  color: 'Black',
};

export default Colors;
