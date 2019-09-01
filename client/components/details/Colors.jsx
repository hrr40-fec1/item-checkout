import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorSquare from './ColorSquare';

const ColorSection = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Color = styled.span`
  margin-left: 0.5em;
  font-size: 20px;
`;


const Colors = ({ colors, color }) => (
  // eslint-disable-next-line react/jsx-one-expression-per-line
  <ColorSection>
    <Title>Color</Title>
    <Color>{color}</Color>
    <div>
      {colors.map((colorObj) => (
        <ColorSquare
          key={colorObj.color}
          color={colorObj.color}
          currentSelected={color}
        />
      ))}
    </div>
  </ColorSection>
);

Colors.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array,
  color: PropTypes.string,
};

Colors.defaultProps = {
  colors: [{ color: 'Black' }, { color: 'Red' }],
  color: 'Black',
};

export default Colors;
