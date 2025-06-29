import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <motion.div
        className={styles['hero-content']}
        initial={{ opacity: 0, y: 30 }}      // start faded out and shifted down
        animate={{ opacity: 1, y: 0 }}       // animate to fully visible and original position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}  // timing & easing
      >
        <h1 className={styles['hero-title']}>Welcome to CABOA</h1>
        <div className={styles['tagline-banner']}>
          Central Alberta Basketball Officials Association
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
