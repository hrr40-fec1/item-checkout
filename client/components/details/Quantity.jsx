import React from 'react';

const Quantity = () => {
  const values = [];

  for (let i = 1; i < 100; i += 1) {
    values.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div>
      Quantity:
      <select>
        {values}
      </select>
    </div>
  );
};

export default Quantity;
