import React from 'react';
import PropTypes from 'prop-types';

const ColorSquare = ({ color, currentSelected }) => (
  <span className={currentSelected === color ? `square ${color} selected` : `square ${color}`} value={color} />
);

ColorSquare.propTypes = {
  color: PropTypes.string,
  currentSelected: PropTypes.string,
};

ColorSquare.defaultProps = {
  color: 'Black',
  currentSelected: 'Black',
};

export default ColorSquare;
