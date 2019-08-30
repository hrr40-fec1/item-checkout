import React from 'react';
import PropTypes from 'prop-types';
import InStock from './InStock';
import OutOfStock from './OutOfStock';


const StorePickup = ({ availableQuantity, city }) => {
  if (availableQuantity === 0) {
    return <OutOfStock city={city} />;
  }

  return <InStock availableQuantity={availableQuantity} city={city} />;
};

StorePickup.propTypes = {
  availableQuantity: PropTypes.number,
  city: PropTypes.string,
};

StorePickup.defaultProps = {
  availableQuantity: 0,
  city: '',
};

export default StorePickup;
