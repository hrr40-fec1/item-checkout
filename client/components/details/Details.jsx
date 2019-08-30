import React from 'react';
import PropTypes from 'prop-types';
import Colors from './Colors';
import Sizes from './Sizes';
import Quantity from './Quantity';

// eslint-disable-next-line object-curly-newline
const Details = ({ colors, color, sizes, size }) => (
  <div>
    <Colors colors={colors} color={color} />
    <Sizes sizes={sizes} size={size} />
    <Quantity />
  </div>
);

Details.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array,
  color: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  sizes: PropTypes.array,
  size: PropTypes.string,
};

Details.defaultProps = {
  colors: [{ color: 'Black' }, { color: 'Red' }],
  color: 'Black',
  sizes: ['S', 'M', 'L', 'XL', '2XL'],
  size: 'L',
};

export default Details;
