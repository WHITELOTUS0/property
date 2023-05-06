import React, { useState, useEffect } from 'react';
import PropertyListing from './propertyListing';
import BuyButton from './buybutton';

const IndexPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const api = 'https://api.airbnb.com/v2/listings/search?';
    

    // Fetch data from data source
    // Update properties state with fetched data
  }, []);

  const handleBuyClick = (property) => {
    // Handle buy click event
  };

  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>
          <PropertyListing property={property} />
          <BuyButton property={property} onClick={handleBuyClick} />
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
