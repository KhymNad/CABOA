import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';

    function ContactSection() {
    const headingControls = useAnimation();
    const lineControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
        const animate = async () => {
            await lineControls.start({
            scaleX: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
            });
            await headingControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
            });
        };
        animate();
        }
    }, [isInView, lineControls, headingControls]);

    return (
        <section className={styles.contactSection} id="contact" ref={ref}>
        <div className={styles.container}>
            <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={headingControls}
            >
            Contact Us
            </motion.h2>

            <motion.div
            className={styles.underline}
            initial={{ scaleX: 0 }}
            animate={lineControls}
            style={{ transformOrigin: 'left', margin: '0 auto 2rem auto', width: '17%' }}
            />

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
