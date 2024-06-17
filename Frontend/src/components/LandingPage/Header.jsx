// src/components/LandingPage/Header.js
import React from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Placeholder logo */}
        <img src="https://via.placeholder.com/150" alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        {/* <a href="#testimonials">Testimonials</a> */}
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
}

export default Header;
