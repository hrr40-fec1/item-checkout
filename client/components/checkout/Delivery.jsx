import React from 'react';
import PropTypes from 'prop-types';
import helper from '../../helper';

const Delivery = ({ zip }) => (
  <div>
    <div className="col-left">
      <div>{`Deliver to ${zip}`}</div>
      <div>Edit zip code</div>
    </div>
    <div className="col-right">
      <button type="button">Ship It</button>
    </div>
    <div>{`Get it from ${helper.getShippingDate()} with free 2-day shipping on $35 orders`}</div>
  </div>
);

Delivery.propTypes = {
  zip: PropTypes.number,
};

Delivery.defaultProps = {
  zip: 0,
};

export default Delivery;
