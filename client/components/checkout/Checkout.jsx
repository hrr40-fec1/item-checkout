import React from 'react';
import PropTypes from 'prop-types';
import StorePickup from './StorePickup';
import Delivery from './Delivery';

const Checkout = ({ availableQuantity, city, zip }) => (
  <div>
    <StorePickup availableQuantity={availableQuantity} city={city} />
    <Delivery zip={zip} />
  </div>
);

Checkout.propTypes = {
  availableQuantity: PropTypes.number,
  city: PropTypes.string,
  zip: PropTypes.number,
};

Checkout.defaultProps = {
  availableQuantity: 0,
  city: '',
  zip: 0,
};

export default Checkout;
