import React from 'react';
import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles.info}>
      <h3>Contact Information</h3>
      <ul>
        <li>
          <span>Email:</span> caboa.edu.chair@gmail.com
        </li>
        <li>
          <span>League Contact:</span> caboa.malarge@gmail.com
        </li>
        <li>
          <span>Location:</span> Central Alberta, Canada
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
