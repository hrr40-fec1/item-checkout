import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import Quantity from './Quantity';

const Sections = styled.section`
  padding: 10px 0px;
`;

// eslint-disable-next-line object-curly-newline
const Details = ({ colors, color, colorClickHandler, sizes, size }) => (
  <div>
    <Sections>
      <Colors colors={colors} color={color} colorClickHandler={colorClickHandler} />
    </Sections>
    <Sections>
      <Sizes sizes={sizes} size={size} />
    </Sections>
    <Sections>
      <Quantity />
    </Sections>
  </div>
);

Details.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array,
  color: PropTypes.string,
  colorClickHandler: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  sizes: PropTypes.array,
  size: PropTypes.string,
};

Details.defaultProps = {
  colors: [{ color: 'Black' }, { color: 'Red' }],
  color: 'Black',
  colorClickHandler: () => {},
  sizes: ['S', 'M', 'L', 'XL', '2XL'],
  size: 'L',
};

export default Details;
