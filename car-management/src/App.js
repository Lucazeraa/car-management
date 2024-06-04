import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import About from './components/About'; // Importe o componente About

const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarList cars={cars} />} />
        <Route path="/add-car" element={<CarForm addCar={addCar} />} />
        <Route path="/about" element={<About />} /> {/* Adicione esta linha para a página Sobre */}
      </Routes>
    </Router>
  );
};

export default App;