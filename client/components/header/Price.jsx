import React from 'react';
import PropTypes from 'prop-types';


const Price = ({ price }) => (
  <div id="price">
    {`$${price.toFixed(2)}`}
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

Price.defaultProps = {
  price: 0,
};

export default Price;
