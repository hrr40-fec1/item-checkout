import React from 'react';
import PropTypes from 'prop-types';


const InStock = ({ availableQuantity, city }) => (
  <div>
    <div className="col-left">
      <div className="h-text-bold h-text-green">Pick up today</div>
      <div className="h-text-bold">{`at ${city}`}</div>
      <div>Edit store</div>
      <div className="h-text-orange">{`only ${availableQuantity} left`}</div>
    </div>
    <div className="col-right">
      <button type="button">Pick it up</button>
    </div>
    <div>Ready within 2 hours with Order Pickup</div>
  </div>
);

InStock.propTypes = {
  availableQuantity: PropTypes.number,
  city: PropTypes.string,
};

InStock.defaultProps = {
  availableQuantity: 0,
  city: '',
};

export default InStock;
