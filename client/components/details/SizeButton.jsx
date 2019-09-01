import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 75px;
  height: 33px;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  margin: 5px 5px;
  font-size: 14px;

  ${({ selected }) => selected && `
    border: 2px solid rgb(0, 131, 0);
  `}

  &:hover {
    border: 2px solid rgb(0, 0, 0);
  }
`;

const SizeButton = ({ size, currentSelected }) => (
  <Button type="button" selected={currentSelected === size} value={size}>{size}</Button>
);

SizeButton.propTypes = {
  size: PropTypes.string,
  currentSelected: PropTypes.string,
};

SizeButton.defaultProps = {
  size: 'L',
  currentSelected: 'L',
};

export default SizeButton;
