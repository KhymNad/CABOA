import React from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import RuleMods from '../RuleMods/RuleMods';
import CasmbaRules from '../CasmbaRules/CasmbaRules';
import styles from './ResourceSection.module.css';

const resourceItems = [
  {
    icon: 'clipboard',
    title: 'Exam Study Materials',
    description:
      'Study guides, sample questions, and prep material to help you succeed in officiating exams.',
  },
  {
    icon: 'laptop',
    title: 'FIBA Documents',
    description:
      'Access FIBA guidelines, rulebooks, and educational documents for certified officials.',
  },
  {
    icon: 'play',
    title: 'Educational Videos',
    description:
      'Video tutorials and game scenarios to help improve your understanding of calls and mechanics.',
  },
];

export default function ResourcesSection() {
  return (
    <section className={styles.resourcesSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Educational Resources</h2>
        </header>
        {/* <p className={styles.subheading}>Helpful resources for CABOA officials and referees</p> */}

        <div className={styles.cards}>
          {resourceItems.map((item, idx) => (
            <ResourceCard key={idx} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>

        <RuleMods />
        <CasmbaRules />
      </div>
    </section>
  );
}
