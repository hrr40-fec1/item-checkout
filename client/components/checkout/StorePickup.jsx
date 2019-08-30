import React from 'react';
import PropTypes from 'prop-types';


const StorePickup = ({ availableQuantity, city }) => (
  <div>
    <div className="col-left">
      <div>Pick up today</div>
      <div>{`at ${city}`}</div>
      <div>Edit store</div>
      <div>{`only ${availableQuantity} left`}</div>
    </div>
    <div className="col-right">
      <button type="button">Pick it up</button>
    </div>
    <div>Ready within 2 hours with Order Pickup</div>
  </div>
);

StorePickup.propTypes = {
  availableQuantity: PropTypes.number,
  city: PropTypes.string,
};

StorePickup.defaultProps = {
  availableQuantity: 0,
  city: '',
};

export default StorePickup;
