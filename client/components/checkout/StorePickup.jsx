/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import InStock from './InStock';
import OutOfStock from './OutOfStock';

const StorePickup = ({ availableQuantity, streetAddress, city, state, zip, setStoreId }) => {
  if (availableQuantity === 0) {
    return <OutOfStock city={city} setStoreId={setStoreId} />;
  }

  return (
    <InStock
      availableQuantity={availableQuantity}
      streetAddress={streetAddress}
      city={city}
      state={state}
      zip={zip}
      setStoreId={setStoreId}
    />
  );
};

StorePickup.propTypes = {
  availableQuantity: PropTypes.number,
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  setStoreId: PropTypes.func,
};

StorePickup.defaultProps = {
  availableQuantity: 0,
  streetAddress: '',
  city: '',
  state: '',
  zip: 0,
  setStoreId: () => {},
};

export default StorePickup;
