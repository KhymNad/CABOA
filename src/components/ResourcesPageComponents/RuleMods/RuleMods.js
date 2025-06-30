import React from 'react';
import styles from './RuleMods.module.css';

export default function RuleMods() {
  return (
    <section className={styles.section}>
      <h2>Rule Modifications</h2>
      <h3>RDMBA Fall Tournament 2024</h3>
      <ul>
        <li>10 minute warm up depending on schedule</li>
        <li>9 minute stop time quarters</li>
        <li>2 Time outs first half, 3 second half</li>
        <li>2 minute quarter break</li>
        <li>5 minute half time</li>
        <li>8 seconds to get over half court</li>
        <li>24 second shot clock at discretion of officials</li>
        <li>No full court press after 25 point spread</li>
        <li>OT - First team to score 5 points (discretion of organizer)</li>
        <li>All other rules as per Basketball Alberta standard</li>
      </ul>
      <h4>U13 Alterations</h4>
      <ul>
        <li>No full court press</li>
        <li>No zone defense</li>
        <li>8 minute games for U13 boys</li>
      </ul>
      <p><b>*** Tournament Organizers reserve the right to alter rules as needed</b></p>
    </section>
  );
}
