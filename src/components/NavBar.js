// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
        <img src="/img/caboa_logo.png" alt="CABOA Logo" className='logo' /> {/* Replace with actual CABOA logo */}
        <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Uncomment or add more links as needed */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
    </nav>
  );
}

export default NavBar;
