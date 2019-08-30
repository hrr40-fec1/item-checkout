import React from 'react';
import PropTypes from 'prop-types';

const SizeButton = ({ size }) => (
  <button type="button" value={size}>{size}</button>
);


SizeButton.propTypes = {
  size: PropTypes.string,
};

SizeButton.defaultProps = {
  size: 'L',
};

export default SizeButton;
