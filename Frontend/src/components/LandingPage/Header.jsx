// src/components/LandingPage/Header.js
import React from 'react';
import './Header.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';

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
      <Link to='/signup'><a>Register</a></Link>  
        {/* <a href="#testimonials">Testimonials</a> */}
        <Link to='/login'><a href="">Login</a></Link>
      </div>
    </div>
  );
}

export default Header;
