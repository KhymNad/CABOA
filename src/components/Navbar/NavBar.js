import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // Ensure you have a CSS file for styling

function NavBar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src="/img/caboa_logo.png" alt="CABOA Logo" className={styles.logo} /> {/* Replace with actual CABOA logo */}
        </div>
        <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Uncomment or add more links as needed */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
    </nav>
  );
}

export default NavBar;
