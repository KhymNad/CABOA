import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.about}>
          <h4>CABOA</h4>
          <p>Central Alberta Basketball Officials Association</p>
          <p>Supporting officials since 2009</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/events">Events/News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: ref.caboa@gmail.com</p>
          <p>Address: Central Alberta, Canada</p>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} CABOA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
