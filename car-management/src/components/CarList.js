import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Lista de carros</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.make} - {car.model} - {car.color} - {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;