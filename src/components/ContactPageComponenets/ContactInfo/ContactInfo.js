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
            <span>Location:</span> Central Alberta, Canada
            </li>
            <li>
            <span>Facebook:</span>{' '}
            <a
                href="https://www.facebook.com/people/Central-Alberta-Basketball-Officials-Association/61551820839181/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                Central Alberta Basketball Officials Association
            </a>
            </li>
        </ul>
        </div>
    );
}

export default ContactInfo;
