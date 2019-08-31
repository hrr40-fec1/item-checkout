import React from 'react';
import PropTypes from 'prop-types';

const OutOfStock = ({ city }) => (
  <div className="col-left">
    <div className="h-text-bold">{`Out of stock at ${city}`}</div>
    <div>Edit store</div>
  </div>
);

OutOfStock.propTypes = {
  city: PropTypes.string,
};

OutOfStock.defaultProps = {
  city: '',
};

export default OutOfStock;
