import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/caboa_logo.png`} alt="CABOA Logo" className={styles.logo} />
        </Link>
      </div>

      {/* Hamburger toggle button */}
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className={`${styles.bar} ${menuOpen ? styles.bar1Active : ''}`} />
        <div className={`${styles.bar} ${menuOpen ? styles.bar2Active : ''}`} />
        <div className={`${styles.bar} ${menuOpen ? styles.bar3Active : ''}`} />
      </button>

      {/* Nav links: show or hide based on menuOpen on mobile */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>
            Events/News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
