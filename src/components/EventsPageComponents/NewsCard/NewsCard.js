import React from 'react';
import styles from './NewsCard.module.css';

function NewsCard({ article }) {
  return (
    <div
        className={styles.card}
        style={{ backgroundImage: `url(${article.image})` }}>
        <div className={styles.overlay} />
        <div className={styles.content}>
            <h3 className={styles.title}>{article.title}</h3>
            <div className={styles.sourceDate}>
            {article.source} &bull; {article.date}
            </div>
            <a
            className={styles.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer">
            Read More
            </a>
        </div>
    </div>
  );
}

export default NewsCard;
