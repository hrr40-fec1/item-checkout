import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import helper from '../../helper';

const Left = styled.div`
  display: inline-block;
  width: 60%;
`;

const Right = styled.div`
  display: inline-block;
  width: 30%;
  vertical-align: top;
`;

const Section = styled.section`
  margin-top: 10px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 17px;
  color: rgb(0, 131, 0);
`;

const Location = styled.span`
  font-weight: bold;
  margin-left: 0.3em;
  font-size: 17px;
`;

const EditZip = styled.button`
padding: 0px;
border: 0px;
background-color: rgb(240, 240, 240);
font-size: 12px;
font-family: Times New Roman;
text-decoration: underline;
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

const DeliveryDate = styled.span`
  font-size: 14px;
  color: rgb(0, 131, 0);
`;

const DeliveryText = styled.span`
  font-size: 14px;
`;

Button.displayName = 'Button';
Location.displayName = 'Location';

const Delivery = ({ zip, setZipCode }) => (
  <div>
    <Left>
      <Title>Deliver to</Title>
      <Location>{zip}</Location>
      <div>
        <EditZip onClick={() => setZipCode(window.prompt('Enter New Zip Code'))}>Edit zip code</EditZip>
      </div>
    </Left>
    <Right>
      <Button type="button">Ship It</Button>
    </Right>
    <Section>
      <DeliveryDate>{`Get it on ${helper.getShippingDate()} `}</DeliveryDate>
      <DeliveryText>with free 2-day shipping on $35 orders</DeliveryText>
    </Section>
  </div>
);

Delivery.propTypes = {
  zip: PropTypes.number,
  setZipCode: PropTypes.func,
};

Delivery.defaultProps = {
  zip: 0,
  setZipCode: () => {},
};

export default Delivery;
