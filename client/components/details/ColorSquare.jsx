import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0px;
  border: 0px;

  ${({ selected }) => selected && `
    border: 2px solid rgb(0, 131, 0);
  `}

  &:hover {
    border: 2px solid rgb(0, 0, 0);
  }
`;

const Square = styled.div`
  display: inline-block;
  width: 37px;
  height: 37px;
  margin: auto;
  vertical-align: middle;
  background-color: ${({ color }) => color};
`;

const ColorSquare = ({ color, currentSelected }) => (
  <Button type="button" selected={currentSelected === color}>
    <Square value={color} color={color} />
  </Button>
);

Button.defaultProps = {
  selected: 'false',
};

Square.defaultProps = {
  color: 'black',
};

ColorSquare.propTypes = {
  color: PropTypes.string,
  currentSelected: PropTypes.string,
};

ColorSquare.defaultProps = {
  color: 'Black',
  currentSelected: 'Black',
};

export default ColorSquare;
