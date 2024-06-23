// src/components/LandingPage/Header.js
import React from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Placeholder logo */}
        <img src="https://via.placeholder.com/150" alt="Logo" />
        {/* <span className='logoText'>Spacebook</span> */}
      </div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">Pricing</a>
        <a href="#pricing">Register</a>
        {/* <a href="#testimonials">Testimonials</a> */}
        <a href="#footer">Login</a>
      </div>
    </div>
  );
}

export default Header;
