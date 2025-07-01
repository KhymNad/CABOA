import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './CallToAction.module.css';

function CallToAction() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Interested in Becoming an Official?</h2>
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => navigate('/contact')}
                className={styles.button}
            >
                CONTACT US
            </motion.button>
        </div>
    );
}

export default CallToAction;
