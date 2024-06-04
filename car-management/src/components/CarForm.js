import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [Nome, setNome] = useState('');
  const [Modelo, setModelo] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Nome && Modelo && color && year) {
      addCar({ Nome, Modelo, color, year });
      setNome('');
      setModelo('');
      setColor('');
      setYear('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          value={Nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Modelo:</label>
        <input 
          type="text" 
          value={Modelo} 
          onChange={(e) => setModelo(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Color:</label>
        <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Ano:</label>
        <input 
          type="number" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;