import Image from 'next/image';
import React from 'react';
import styles from '../../styles/about.module.css';

const AboutUs = () => {
  return (
      <section className={styles.aboutUs}>
              <div className={styles.aboutUsLeft}>
                  <h1 className={styles.aboutUsMessage}>Who We Are?</h1>
                  <p className={styles.aboutUsText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Asperiores culpa tenetur facilis at amet facere temporibus!
                   Dolore a, maiores fugit facilis ipsum omnis deserunt corporis consectetur id veniam sit quas?
                   Asperiores culpa tenetur facilis at amet facere temporibus!
                   Dolore a, maiores fugit facilis ipsum omnis deserunt corporis consectetur id veniam sit quas?
                   Asperiores culpa tenetur facilis at amet facere temporibus!
                   Dolore a, maiores fugit facilis ipsum omnis deserunt corporis consectetur id veniam sit quas?
                   Asperiores culpa tenetur facilis at amet facere temporibus!
                   Dolore a, maiores fugit facilis ipsum omnis deserunt corporis consectetur id veniam sit quas?
                   </p>
              </div>
              <div className={styles.aboutUsRight}>
                  <Image src="/img/bg.jpg" 
                      alt=''
                      width="450px"
                      height="450px"
                  />
              </div>
      </section>
  );
};

export default AboutUs;
