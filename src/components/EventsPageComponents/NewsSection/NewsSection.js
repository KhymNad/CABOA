import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import NewsCard from '../NewsCard/NewsCard';
import styles from './NewsSection.module.css';

const articles = [
  {
    title: 'Rigger Jason Chatwood to lead St. Joseph Baseball Academy',
    link: 'https://www.reddeerexpress.com/sports/rigger-jason-chatwood-to-lead-st-joseph-baseball-academy/',
    source: 'Red Deer Express',
    date: 'April 05, 2018',
    image: `${process.env.PUBLIC_URL}/img/news/baseball.png`,
  },
  {
    title: 'Chatwood ready to hit home run with baseball and softball academy',
    link: 'https://www.reddeeradvocate.com/sports/chatwood-ready-to-hit-home-run-with-baseball-and-softball-academy/',
    source: 'Red Deer Advocate',
    date: 'March 20, 2018',
    image: `${process.env.PUBLIC_URL}/img/news/baseball.png`,
  },
  {
    title: 'DINOS HALL OF FAME: Veronica Den Oudsten, Basketball',
    link: 'http://www.godinos.com/hof.aspx?hof=27&mobile=skip',
    source: 'University of Calgary Dinos',
    date: '2014',
    image: `${process.env.PUBLIC_URL}/img/news/dinos_news.png`,
  },
];

function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Animation controls and in-view detection
  const headingControls = useAnimation();
  const lineControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const delay = 5000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [currentIndex]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  // Animate heading and underline when section enters viewport
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
    <section className={styles.newsSection} ref={ref}>
      <motion.div className={styles.headerWrapper}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Refs in the News
        </motion.h2>
        <motion.div
          className={styles.underline}
          initial={{ scaleX: 0 }}
          animate={lineControls}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>

      <div className={styles.carousel}>
        <div
          className={styles.slides}
          style={{
            width: `${articles.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / articles.length}%)`,
          }}
        >
          {articles.map((article, idx) => (
            <div key={idx} className={styles.slideWrapper}>
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {articles.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
