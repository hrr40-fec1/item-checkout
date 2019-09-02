import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const EditStore = styled.a`
  font-size: 12px;
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

const InStock = ({ availableQuantity, city }) => (
  <div>
    <Left>
      <Title>Pick up today</Title>
      <Location>{`at ${city}`}</Location>
      <EditStore href="#">Edit store</EditStore>
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
  city: PropTypes.string,
};

InStock.defaultProps = {
  availableQuantity: 0,
  city: '',
};

export default InStock;
