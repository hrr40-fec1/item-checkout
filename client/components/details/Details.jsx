import React from 'react';
import PropTypes from 'prop-types';
import Colors from './Colors';
import Sizes from './Sizes';
import Quantity from './Quantity';

const Details = ({ colors, color, size }) => (
  <div>
    <Colors colors={colors} color={color} />
    <Sizes size={size} />
    <Quantity />
  </div>
);

Details.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array,
  color: PropTypes.string,
  size: PropTypes.string,
};

Details.defaultProps = {
  colors: [{ color: 'Black' }, { color: 'Red' }],
  color: 'Black',
  size: 'L',
};

export default Details;
