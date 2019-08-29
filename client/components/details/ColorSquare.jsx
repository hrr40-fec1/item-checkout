import React from 'react';
import PropTypes from 'prop-types';

const ColorSquare = ({ color }) => (
  <span className={`square ${color}`} />
);

ColorSquare.propTypes = {
  color: PropTypes.string,
};

ColorSquare.defaultProps = {
  color: 'Black',
};

export default ColorSquare;
