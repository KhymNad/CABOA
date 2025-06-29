import React, { useState } from 'react';
// import { motion } from 'framer-motion';
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
    date: 'July 15, 2025',
    location: 'Central Alberta Community Hall',
    description: 'Join us for the annual CABOA meeting and awards ceremony.'
  },
  {
    id: 3,
    title: 'Referee Training Workshop',
    date: 'August 3, 2025',
    location: 'Sports Complex Room 2',
    description: 'Improve your skills with expert-led training sessions.'
  },
  {
    id: 4,
    title: 'Season Kickoff Game',
    date: 'September 1, 2025',
    location: 'Central Alberta Gymnasium',
    description: 'Opening game of the season, all officials welcome!'
  }
];

function EventsSection() {
  const [hovering, setHovering] = useState(false);

  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.title}>Upcoming Events</h2>
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
