import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StorePickup from './StorePickup';
import Delivery from './Delivery';

const Section = styled.section`
  background-color: rgb(240, 240, 240);
  padding: 10px;
  margin: 10px 0px;
`;

// eslint-disable-next-line object-curly-newline
const Checkout = ({ availableQuantity, streetAddress, city, state, zip, setStoreId }) => (
  <div>
    <Section>
      <StorePickup
        availableQuantity={availableQuantity}
        streetAddress={streetAddress}
        city={city}
        state={state}
        zip={zip}
        setStoreId={setStoreId}
      />
    </Section>
    <Section>
      <Delivery zip={zip} />
    </Section>
  </div>
);

Checkout.propTypes = {
  availableQuantity: PropTypes.number,
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  setStoreId: PropTypes.func,
};

Checkout.defaultProps = {
  availableQuantity: 0,
  streetAddress: '',
  city: '',
  state: '',
  zip: 0,
  setStoreId: () => {},
};

export default Checkout;
