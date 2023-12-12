import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo3 from '../components/3logo.png';



const linkStyle = {
  fontSize: '22px',
  marginRight: '10px',
};

const CustomNavbar = () => {
  


  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<div className="container-fluid">
<ul className="navbar-nav">
  <li className="nav-item">
    <img src={Logo3} alt="Your Logo" className="img-fluid" style={{ maxWidth: '80px' }} />
  </li>
  <li className="nav-item">
    <Link to='/'  className="nav-link"  style={linkStyle}>
      Home 
    </Link>
  </li>
  <li className="nav-item">
    <Link  to='/buylands' className="nav-link" style={linkStyle}>
      Buy lands
    </Link>
  </li>
  <li className="nav-item">
    <Link  to='/services' className="nav-link" style={linkStyle}>
      Services
    </Link>
  </li>
  <li className="nav-item">
    <Link  to='/testimonials'  className="nav-link" style={linkStyle}>
      Testimonials
    </Link>
  </li>
  <li className="nav-item">
    <Link to='/premium' className="nav-link"  style={linkStyle}>
      Premium
    </Link>
  </li>
<li className="nav-item">
    <Link to='/sellmyland' className="nav-link"  style={linkStyle}>
      Sell My Land
    </Link>
  </li>
</ul>

<ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <a
      href="#"
      className="nav-link"
      style={linkStyle}  
      
    >
      Sign Up
    </a>
  </li>
  <li className="nav-item">
    <a href="#" 
    className="nav-link" 
    style={linkStyle}>
      Login
    </a>
  </li>
</ul>
</div>
</nav>
</div>

  );
};
export default CustomNavbar;
