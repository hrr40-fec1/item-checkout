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

  &:focus {
    outline: thin dotted;
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

Button.displayName = 'Button';
Square.displayName = 'Square';

const ColorSquare = ({ color, currentSelected, colorClickHandler }) => (
  <Button type="button" selected={currentSelected === color}>
    <Square color={color} onClick={() => colorClickHandler(color)} />
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
  colorClickHandler: PropTypes.func,
};

ColorSquare.defaultProps = {
  color: 'Black',
  currentSelected: 'Black',
  colorClickHandler: () => {},
};

export default ColorSquare;
