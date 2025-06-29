import { motion } from 'framer-motion';
import styles from './EventCard.module.css';

function EventCard({ event }) {
  return (
    <motion.div
      className={styles.card}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className={styles.left}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.date}><strong>Date:</strong> {event.date}</p>
        <p className={styles.location}><strong>Location:</strong> {event.location}</p>
      </div>
      <div className={styles.right}>
        <p className={styles.description}>{event.description}</p>
        {event.link && (
          <a
            className={styles.link}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Here
          </a>
        )}
      </div>

      {/* Underline animation */}
      <motion.div
        className={styles.underline}
        variants={{
          rest: { width: 0 },
          hover: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
        }}
      />
    </motion.div>
  );
}

export default EventCard;
