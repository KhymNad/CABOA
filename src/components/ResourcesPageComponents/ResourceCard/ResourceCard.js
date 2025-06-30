import React from 'react';
import styles from './ResourceCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faLaptop, faPlay } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  clipboard: faClipboard,
  laptop: faLaptop,
  play: faPlay,
};

export default function ResourceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={iconMap[icon]} size="3x" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
