import React from 'react';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';

function ContactSection() {
    return (
        <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
            <h2 className={styles.heading}>Contact Us</h2>
            <div className={styles.content}>
                <div className={styles.content_left}>
                    <ContactInfo />
                    <img src="/img/caboa_logo.png" alt="CABOA Logo" className={styles.logo} />
                </div>
            <ContactForm />
            </div>
        </div>
        </section>
    );
}

export default ContactSection;
