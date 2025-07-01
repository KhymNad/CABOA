import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/caboa_logo.png`} alt="CABOA Logo" className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className={({ isActive }) => isActive ? styles.activeLink : ''}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : ''}>
            Events/News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
