import React from 'react';
import PropTypes from 'prop-types';
import InStock from './InStock';
import OutOfStock from './OutOfStock';

const StorePickup = ({ availableQuantity, city, setStoreId }) => {
  if (availableQuantity === 0) {
    return <OutOfStock city={city} />;
  }

  return <InStock availableQuantity={availableQuantity} city={city} setStoreId={setStoreId} />;
};

StorePickup.propTypes = {
  availableQuantity: PropTypes.number,
  city: PropTypes.string,
  setStoreId: PropTypes.func,
};

StorePickup.defaultProps = {
  availableQuantity: 0,
  city: '',
  setStoreId: () => {},
};

export default StorePickup;
