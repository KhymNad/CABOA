import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
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
    <section className={styles.resourcesSection} ref={ref}>
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={headingControls}
          >
            Educational Resources
          </motion.h2>
          <motion.div
            className={styles.underline}
            initial={{ scaleX: 0 }}
            animate={lineControls}
          />
        </header>

        {/* <p className={styles.subheading}>Helpful resources for CABOA officials and referees</p> */}

        <div className={styles.cards}>
          {resourceItems.map((item, idx) => (
            <ResourceCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <RuleMods />
        <CasmbaRules />
      </div>
    </section>
  );
}
