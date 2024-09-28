// src/Component/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import '../css/header.css'; // Ensure this path is correct
import logo from '../Image/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get current route location
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle navigation and menu toggle
  const handleNavigation = (path) => {
    setIsOpen(false); // Close the menu
    navigate(path); // Navigate to the specified path
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
            <img src={logo} alt="logo" className="logo-image" />
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
          </div>
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => handleNavigation('/')} >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={isActive('/about') ? 'active' : ''}  onClick={() => handleNavigation('/about')} >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services"  className={isActive('/services') ? 'active' : ''}  onClick={() => handleNavigation('/services')} >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <a href="#contact" className={isActive('#contact') ? 'active' : ''}   onClick={() => handleNavigation('#contact')} >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
