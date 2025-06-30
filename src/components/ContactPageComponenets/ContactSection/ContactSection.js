import React from 'react';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';

function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>Have questions? Reach out to us below.</p>
        <div className={styles.content}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
