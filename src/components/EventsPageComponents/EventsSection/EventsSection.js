import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './EventsSection.module.css';
import EventCard from '../EventCard/EventCard.js';

const events = [
  {
    id: 1,
    title: 'CABOA Annual Clinic 2024',
    date: 'October 21 & 26, 2024',
    location: 'Intermediate School Building, 5205 48 Ave., Red Deer',
    description: `
      Monday, October 21: 6:30 pm – 9:00 pm (Veteran officials focus) 
      \nSaturday, October 26: 8:30 am – 1:00 pm (Rookie & developing officials) 
      \nAttend one or both. Bring gym shoes, whistle, notebook, and pen.
    `,
    link: 'https://forms.gle/F8AqwmaKnLReQ5c66'
  },
  {
    id: 2,
    title: 'CABOA Annual Meeting',
    date: '',
    location: '',
    description: 'Join us for the annual CABOA meeting and awards ceremony.'
  },
  {
    id: 3,
    title: 'Referee Training Workshop',
    date: '',
    location: '',
    description: 'Improve your skills with expert-led training sessions.'
  },
  {
    id: 4,
    title: 'Season Kickoff Game',
    date: '',
    location: '',
    description: 'Opening game of the season, all officials welcome!'
  }
];

function EventsSection() {
  const [hovering, setHovering] = useState(false);

  // Animation controls for heading and underline
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
    <section className={styles.eventsSection} ref={ref}>
      <motion.div
        className={styles.headerWrapper}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Upcoming Events
        </motion.h2>
        <motion.div
          className={styles.underline}
          initial={{ scaleX: 0 }}
          animate={lineControls}
        />

      </motion.div>

      <div
        className={`${styles.carousel} ${hovering ? styles.paused : ''}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className={styles.track}>
          {[...events, ...events].map((event, i) => (
            <div className={styles.slide} key={i}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
