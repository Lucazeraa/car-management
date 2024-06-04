import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-car">Add Car</Link></li>
        <li><Link to="/about">Sobre</Link></li> {/* Adicione esta linha para o link "Sobre" */}
      </ul>
    </nav>
  );
};

export default NavBar;