import React from 'react';
import styles from '../../styles/about.module.css';

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
        <h1 className={styles.aboutMessage}>About US</h1>
        <p className={styles.aboutMessageTest}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Aperiam, doloremque?</p>
    </section>
  );
};

export default AboutHero;
