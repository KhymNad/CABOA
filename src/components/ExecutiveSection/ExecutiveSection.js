import React from 'react';
import styles from './ExecutiveSection.module.css';

const teamMembers = [
  { name: 'Josh Carothers', role: 'President', img: '/img/executives/josh.png', alt: 'Josh Carothers' },
  { name: 'Damian Horner', role: 'Vice President', img: '/img/executives/DamianHorner.jpg', alt: 'Damian Horner' },
  { name: 'Tamara Visser', role: 'Secretary', img: '/img/executives/tamara.jpg', alt: 'Tamara Visser' },
  { name: 'Stanton Swain', role: 'Treasurer', img: '/img/executives/stanton.png', alt: 'Stanton Swain' },
  { name: 'Darryl Armeneau', role: 'Education Chairman', img: '/img/executives/darryl.jpg', alt: 'Darryl Armeneau' },
  { name: '(Vacant Position)', role: 'Evaluation Chairman', img: '/img/executives/ref2.webp', alt: 'Vacant Position' },
  { name: 'Landon Campbell', role: 'Member-at-Large', img: '/img/executives/landon.jpg', alt: 'Landon Campbell' },
  { name: 'Josh Carothers', role: 'Assignor', img: '/img/executives/josh.png', alt: 'Josh Carothers' },
];

function TeamSection() {
  return (
    <section className={styles['team-section']}>
      <h2>2024 - 2025 Executives</h2>
      <h3>"Represent the interest of basketball officials in Alberta"</h3>
      <div className={styles['team-grid']}>
        {teamMembers.map(({ name, role, img, alt }, index) => (
          <div className={styles['team-member']} key={index}>
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
