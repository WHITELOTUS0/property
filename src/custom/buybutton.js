import React from 'react';

const BuyButton = ({ property, onClick }) => {
  return (
    <button onClick={() => onClick(property)}>Buy Property</button>
  );
};

export default BuyButton;
