import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SizeButton from './SizeButton';

const SizeSection = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Size = styled.span`
  margin-left: 0.5em;
  font-size: 20px;
`;

const SizeChart = styled.a`
  margin-left: 10px;
  font-size: 12px;
`;

const Sizes = ({ sizes, size }) => (
  <SizeSection>
    <Title>Sizes</Title>
    <Size>{size}</Size>
    <SizeChart href="#">Size Chart</SizeChart>
    <div>
      {sizes.map((item) => <SizeButton key={item} size={item} currentSelected={size} />)}
    </div>
  </SizeSection>
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
