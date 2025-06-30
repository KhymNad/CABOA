import React from 'react';
import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles.info}>
      <h3>Contact Details</h3>
      <p><strong>Email:</strong> caboa.edu.chair@gmail.com</p>
      <p><strong>League Contact:</strong> caboa.malarge@gmail.com</p>
      <p><strong>Location:</strong> Central Alberta, Canada</p>
    </div>
  );
}

export default ContactInfo;
