import React from 'react';
import PropTypes from 'prop-types';
import SizeButton from './SizeButton';

const Sizes = ({ sizes, size }) => (
  <div>
    <strong>Sizes</strong>
    <span id="size">{size}</span>
    <div>
      {sizes.map((item) => <SizeButton key={item} size={item} currentSelected={size} />)}
    </div>
  </div>
);

Sizes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sizes: PropTypes.array,
  size: PropTypes.string,
};

Sizes.defaultProps = {
  sizes: ['S', 'M', 'L', 'XL', '2XL'],
  size: 'L',
};

export default Sizes;
