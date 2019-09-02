import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

Title.displayName = 'Title';

const Price = ({ price }) => (
  <Title>
    {`$${price.toFixed(2)}`}
  </Title>
);

Price.propTypes = {
  price: PropTypes.number,
};

Price.defaultProps = {
  price: 0,
};

export default Price;
