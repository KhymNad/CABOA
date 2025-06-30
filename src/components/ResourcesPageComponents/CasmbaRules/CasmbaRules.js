import React from 'react';
import styles from './CasmbaRules.module.css';

export default function CasmbaRules() {
  return (
    <section className={styles.section}>
      <h2>CASMBA Rule Information</h2>
      <h3>CASMBA League 2024</h3>
      <p><strong>Forfeiting Games:</strong></p>
      <ul>
        <li>Teams must start with 4, but a 5th player must join before Q2 or forfeit.</li>
        <li>Non-roster players, borrowing players, or college athletes are not permitted.</li>
        <li>Improperly editing the scoresheet is not allowed.</li>
      </ul>
      <p><strong>Technical Fouls (Players):</strong></p>
      <ul>
        <li>2 techs = ejection & immediate gym exit</li>
        <li>3 techs = 5-game suspension</li>
        <li>2 ejections = 5-game suspension</li>
        <li>3 ejections = season disqualification</li>
      </ul>
      <p><strong>Technical Fouls (Teams):</strong> 3 team techs = disqualification</p>
      <p>
        All conduct concerns: <a href="mailto:casmba@shaw.ca">casmba@shaw.ca</a><br />
        Senior men's issues: <a href="mailto:caboa.malarge@gmail.com">caboa.malarge@gmail.com</a>
      </p>
    </section>
  );
}
