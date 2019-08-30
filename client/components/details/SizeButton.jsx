import React from 'react';
import PropTypes from 'prop-types';

const SizeButton = ({ size, currentSelected }) => (

  <button className={currentSelected === size ? 'size selected' : 'size'} type="button" value={size}>{size}</button>
);


SizeButton.propTypes = {
  size: PropTypes.string,
  currentSelected: PropTypes.string,
};

SizeButton.defaultProps = {
  size: 'L',
  currentSelected: 'L',
};

export default SizeButton;
