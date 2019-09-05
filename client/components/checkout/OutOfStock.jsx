import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditStore = styled.button`
  padding: 0px;
  border: 0px;
  background-color: rgb(240, 240, 240);
  font-size: 12px;
  font-family: Times New Roman;
  text-decoration: underline;

  &:focus {
    outline: thin dotted;
  }
`;

const OutOfStock = ({ city, setStoreId }) => (
  <div className="col-left">
    <div className="h-text-bold">{`Out of stock at ${city}`}</div>
    <EditStore onClick={() => setStoreId(window.prompt('Enter New Store Id'))}>Edit store</EditStore>
  </div>
);

OutOfStock.propTypes = {
  city: PropTypes.string,
  setStoreId: PropTypes.func,
};

OutOfStock.defaultProps = {
  city: '',
  setStoreId: () => {},
};

export default OutOfStock;
