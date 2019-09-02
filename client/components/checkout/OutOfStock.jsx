import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditStore = styled.a`
  font-size: 12px;
`;

const OutOfStock = ({ city }) => (
  <div className="col-left">
    <div className="h-text-bold">{`Out of stock at ${city}`}</div>
    <EditStore href="#">Edit store</EditStore>
  </div>
);

OutOfStock.propTypes = {
  city: PropTypes.string,
};

OutOfStock.defaultProps = {
  city: '',
};

export default OutOfStock;
