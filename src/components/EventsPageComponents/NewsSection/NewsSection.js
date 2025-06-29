import React from 'react';
import styles from './NewsSection.module.css';

const newsItems = [
  {
    title: 'Rigger Jason Chatwood to lead St. Joseph Baseball Academy',
    link: 'https://www.reddeerexpress.com/sports/rigger-jason-chatwood-to-lead-st-joseph-baseball-academy/',
    source: 'Red Deer Express',
    date: 'April 05, 2018'
  },
  {
    title: 'Chatwood ready to hit home run with baseball and softball academy',
    link: 'https://www.reddeeradvocate.com/sports/chatwood-ready-to-hit-home-run-with-baseball-and-softball-academy/',
    source: 'Red Deer Advocate',
    date: 'March 20, 2018'
  },
  {
    title: 'DINOS HALL OF FAME: Veronica Den Oudsten, Basketball',
    link: 'http://www.godinos.com/hof.aspx?hof=27&mobile=skip',
    source: 'University of Calgary Dinos',
    date: '2014'
  }
];

function NewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Refs in the News</h2>
        <h3 className={styles.subheading}>News Articles</h3>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h4 className={styles.newsTitle}>{item.title}</h4>
            </a>
            <p className={styles.meta}>
              Posted by <strong>{item.source}</strong> on {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
