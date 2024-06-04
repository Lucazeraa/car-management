import React from 'react';

const CarDetails = ({ cars, index }) => {
  const car = cars[index];

  if (!car) return <div>Car not found</div>;

  return (
    <div>
      <h2>Car Details</h2>
      <p><strong>Make:</strong> {car.make}</p>
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>Color:</strong> {car.color}</p>
      <p><strong>Year:</strong> {car.year}</p>
    </div>
  );
};

export default CarDetails;