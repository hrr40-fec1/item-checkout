import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const Left = styled.div`
  display: inline-block;
  width: 60%;
`;

const Right = styled.div`
  display: inline-block;
  width: 30%;
  vertical-align: top;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: rgb(0, 131, 0);
`;

const Location = styled.div`
  font-weight: bold;
  font-size: 17px;
`;

const EditStore = styled.button`
  padding: 0px;
  border: 0px;
  background-color: rgb(240, 240, 240);
  font-size: 12px;
  font-family: Times New Roman;
  text-decoration: underline;

  &:focus {
    outline: thin dotted;
  }
`;

const Button = styled.button`
  width: 100px;
  background-color: rgb(204, 0, 0);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 0, 0);
  border-radius: 5px;
  font-size: 15px;
  padding: 6px 10px;
`;

const Info = styled.button`
  margin-left: 10px;
  border-radius: 100%;

  &:focus {
    outline: none;
  }
`;

const QuantityText = styled.div`
  margin-top: 5px;
  font-size: 14px;

  ${({ availableQuantity }) => availableQuantity <= 5 && `
    color: rgb(184, 83, 0);
  `}
`;

const PickUpText = styled.div`
  font-size: 14px;
`;

Location.displayName = 'Location';
Button.displayName = 'Button';
QuantityText.displayName = 'QuantityText';

const InStock = ({ availableQuantity, streetAddress, city, state, zip, setStoreId }) => (
  <div>
    <Left>
      <Title>Pick up today</Title>
      <Location>
        {`at ${city}`}
        <Tooltip title={`${streetAddress} ${city}, ${state} ${zip}`} placement="top">
          <Info>?</Info>
        </Tooltip>
      </Location>
      <EditStore onClick={() => setStoreId(window.prompt('Enter New Store Id'))}>Edit store</EditStore>
    </Left>
    <Right>
      <Button type="button">Pick it up</Button>
    </Right>
    <QuantityText availableQuantity={availableQuantity}>{`only ${availableQuantity} left`}</QuantityText>
    <PickUpText>Ready within 2 hours with Order Pickup</PickUpText>
  </div>
);


InStock.propTypes = {
  availableQuantity: PropTypes.number,
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  setStoreId: PropTypes.func,
};

InStock.defaultProps = {
  availableQuantity: 0,
  streetAddress: '',
  city: '',
  state: '',
  zip: 0,
  setStoreId: () => {},
};


export default InStock;
