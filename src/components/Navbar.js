import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo">E-sport</div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li className="cloth">
          <span onClick={toggleDropdown}>Vêtements des hommes</span>
          {showDropdown && (
            <ul className="dropdown">
              <li><Link to="/Pants">Pantalon</Link></li>
              <li><Link to="/Shirts">T-Shirt</Link></li>
              <li><Link to="/Shorts">Shorts</Link></li>
            </ul>
          )}
        </li>
        <li className="cloth">
          <span onClick={toggleDropdown}>Accessories</span>
          {showDropdown && (
            <ul className="dropdown">
              <li><Link to="/Razors">Rasoir</Link></li>
              <li><Link to="/Hairs">Cheveux</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/Shoes">Chaussures</Link></li>
        <li><Link to="/ShoppingCart">Panier</Link></li>
        <li><Link to="/About">A propos</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
