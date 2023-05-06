import React from 'react';

const PropertyListing = ({ property }) => {
  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
      <img src={property.image} alt={property.title} />
    </div>
  );
};

export default PropertyListing;
