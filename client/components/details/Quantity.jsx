import React from 'react';
import styled from 'styled-components';

const QuantitySection = styled.div`
  font-size: 17px;
`;

const Dropdown = styled.select`
  font-size: 16px;
  margin-left: 5px;
  padding: 2px 5px;

  &:focus {
    outline: thin dotted;
  }
`;

const Quantity = () => {
  const values = [];

  for (let i = 1; i < 100; i += 1) {
    values.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <QuantitySection>
      Quantity:
      <Dropdown>
        {values}
      </Dropdown>
    </QuantitySection>
  );
};

export default Quantity;
