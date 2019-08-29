import React from 'react';
import PropTypes from 'prop-types';
import StorePickup from './StorePickup';
import Delivery from './Delivery';

const Checkout = ({ city, zip }) => (
  <div>
    <StorePickup city={city} />
    <Delivery zip={zip} />
  </div>
);

Checkout.propTypes = {
  city: PropTypes.string,
  zip: PropTypes.number,
};

Checkout.defaultProps = {
  city: '',
  zip: 0,
};

export default Checkout;
